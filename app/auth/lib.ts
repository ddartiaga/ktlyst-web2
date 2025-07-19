import { render } from "@react-email/render";
import { Resend } from "resend";

import VerificationEmail from "./email-templates/VerificationEmail";

const sendVerificationRequest = async ({
  identifier,
  url,
}: {
  identifier: string;
  url: string;
}) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailHtml = await render(VerificationEmail({ url, email: identifier }));

  await resend.emails.send({
    from: "no-reply@katalysttechservices.com",
    to: identifier,
    subject: "KATALYST - Sign In Verification",
    html: emailHtml,
  });
};

export { sendVerificationRequest };
