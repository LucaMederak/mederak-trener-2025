import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.art7.nazwa.pl",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL, // your domain email address
    pass: process.env.SMTP_EMAIL_PASSWORD, // your password
  },
  tls: {
    rejectUnauthorized: false,
  },
});
