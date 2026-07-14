import { NextResponse, after } from "next/server";
import nodemailer from "nodemailer";

import { buildContactEmailHtml, buildContactEmailText } from "@/lib/contact-email";

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

function getTransporter() {
  const service = process.env.EMAIL_SERVICE || "gmail";
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "Email is not configured: set EMAIL_USER and EMAIL_APP_PASSWORD."
    );
  }

  return nodemailer.createTransport({
    service,
    auth: { user, pass },
  });
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

  let transporter;
  try {
    transporter = getTransporter();
  } catch (error) {
    console.error("[contact] email not configured", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }

  const from = process.env.EMAIL_USER!;
  const to = process.env.CONTACT_TO_EMAIL || from;

  // Send after the response goes out so the UI doesn't wait on the SMTP round trip.
  after(async () => {
    try {
      await transporter.sendMail({
        from: `"Ahaitu Labs" <${from}>`,
        to,
        subject: `New inquiry from ${submission.name}${
          submission.interest ? ` - ${submission.interest}` : ""
        }`,
        text: buildContactEmailText(submission),
        html: buildContactEmailHtml(submission),
      });
    } catch (error) {
      console.error("[contact] failed to send email", error);
    }
  });

  return NextResponse.json({ ok: true });
}
