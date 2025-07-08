import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Gmail SMTP host
  port: 587, 
  secure: false, // false for port 587, true for port 465
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.G_PASS, // App password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

export { transporter };
