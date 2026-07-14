import { NextResponse, after } from "next/server";
import { Resend } from "resend";

import {
  buildAcknowledgementEmailHtml,
  buildAcknowledgementEmailText,
  buildContactEmailHtml,
  buildContactEmailText,
} from "@/lib/contact-email";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strip CR/LF so form input can't inject extra mail headers.
function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    throw new Error(
      "Email is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL."
    );
  }

  return {
    apiKey,
    to,
    from: process.env.CONTACT_FROM_EMAIL || "no-reply@ahaitulabs.com",
  };
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(body.email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address." },
      { status: 400 }
    );
  }

  const submission = {
    name: sanitizeHeaderValue(body.name),
    email: sanitizeHeaderValue(body.email),
    company: body.company ? sanitizeHeaderValue(body.company) : undefined,
    interest: body.interest ? sanitizeHeaderValue(body.interest) : undefined,
    message: body.message.trim(),
  };

  let config;
  try {
    config = getEmailConfig();
  } catch (error) {
    console.error("[contact] email not configured", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(config.apiKey);
  const from = `Ahaitu Labs <${config.from}>`;

  // Send after the response goes out so the UI doesn't wait on the email round trip.
  after(async () => {
    const notifyOwner = resend.emails
      .send({
        from,
        to: config.to,
        replyTo: submission.email,
        subject: `New inquiry from ${submission.name}${
          submission.interest ? ` - ${submission.interest}` : ""
        }`,
        text: buildContactEmailText(submission),
        html: buildContactEmailHtml(submission),
      })
      .catch((error) => {
        console.error("[contact] failed to send owner notification", error);
      });

    const acknowledgeSender = resend.emails
      .send({
        from,
        to: submission.email,
        subject: "We've received your message - Ahaitu Labs",
        text: buildAcknowledgementEmailText(submission),
        html: buildAcknowledgementEmailHtml(submission),
      })
      .catch((error) => {
        console.error("[contact] failed to send sender acknowledgement", error);
      });

    await Promise.all([notifyOwner, acknowledgeSender]);
  });

  return NextResponse.json({ ok: true });
}
