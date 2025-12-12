// /lib/email.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendWelcomeEmail(opts: {
  to?: string;
  name: string;
  uid: string;
  password: string;
  createdBy?: "admin" | "self";
}) {
  if (!opts.to) {
    // no email provided, silently return
    return;
  }
  const FRONTEND = process.env.FRONTEND_URL || "http://localhost:3000";
  const loginUrl = `${FRONTEND}/authentication/sign-in/cover`;

  const html = `
    <p>Hi ${opts.name},</p>
    <p>Welcome to Baby Shield. Your account has been created ${opts.createdBy === "admin" ? "by an administrator" : "successfully"}.</p>
    <p><strong>User ID:</strong> ${opts.uid}</p>
    <p><strong>Password:</strong> ${opts.password}</p>
    <p>Please <a href="${loginUrl}">login here</a> and change your password after first login.</p>
    <p>Regards,<br/>Baby Shield Team</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: opts.to,
    subject: "Welcome to Baby Shield",
    html,
  });
}