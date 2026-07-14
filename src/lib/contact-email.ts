export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message: string;
}

const COLORS = {
  bg: "#0a0a0f",
  card: "#121218",
  border: "#232330",
  foreground: "#f4f4f6",
  muted: "#9a9aa8",
  primary: "#6d5dfc",
  leadership: "#e8a33d",
  ai: "#6d5dfc",
  dev: "#2dd4bf",
};

const FONT_STACK =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${COLORS.border};" valign="top">
        <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${COLORS.muted};font-family:${FONT_STACK};">
          ${escapeHtml(label)}
        </div>
        <div style="margin-top:4px;font-size:15px;line-height:1.5;color:${COLORS.foreground};font-family:${FONT_STACK};white-space:pre-wrap;">
          ${value}
        </div>
      </td>
    </tr>`;
}

export function buildContactEmailHtml(submission: ContactSubmission) {
  const { name, email, company, interest, message } = submission;
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:${COLORS.bg};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.bg};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

            <!-- wordmark -->
            <tr>
              <td style="padding-bottom:24px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-right:8px;">
                      <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:${COLORS.leadership};margin-right:3px;"></span>
                      <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:${COLORS.ai};margin-right:3px;"></span>
                      <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:${COLORS.dev};"></span>
                    </td>
                    <td>
                      <span style="font-family:Georgia,'Times New Roman',serif;font-size:18px;color:${COLORS.foreground};">
                        Ahaitu Labs
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- card -->
            <tr>
              <td style="background-color:${COLORS.card};border:1px solid ${COLORS.border};border-radius:16px;padding:32px;text-align:left;" align="left">

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;border-top:1px solid ${COLORS.border};text-align:left;">
                  ${name ? fieldRow("Name", escapeHtml(name)) : ""}
                  ${fieldRow("Email", `<a href="mailto:${escapeHtml(email)}" style="color:${COLORS.primary};text-decoration:none;">${escapeHtml(email)}</a>`)}
                  ${company ? fieldRow("Company", escapeHtml(company)) : ""}
                  ${interest ? fieldRow("Interested in", escapeHtml(interest)) : ""}
                  ${fieldRow("Message", escapeHtml(message))}
                </table>
              </td>
            </tr>

            <!-- footer -->
            <tr>
              <td style="padding:20px 4px 0;">
                <div style="font-size:12px;color:${COLORS.muted};font-family:${FONT_STACK};">
                  Sent from the Ahaitu Labs contact form &middot; ${timestamp}
                </div>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildContactEmailText(submission: ContactSubmission) {
  const { name, email, company, interest, message } = submission;
  const lines = [
    "New contact form submission - Ahaitu Labs",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
  ];
  if (company) lines.push(`Company: ${company}`);
  if (interest) lines.push(`Interested in: ${interest}`);
  lines.push("", "Message:", message);
  return lines.join("\n");
}
