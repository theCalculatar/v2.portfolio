"use server";

import { transporter } from "@/lib";
import { z } from "zod";

const sendMailSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(2, "Message is required"),
});

async function sendMail(initialState: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (sendMailSchema.safeParse({ name, email, message }).success === false) {
    return {
      message: "make sure all fields are filled out correctly.",
      error: "Invalid input",
    };
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Website Form" <${email}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>From:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
    });

    return {
      message: "I have received your message and will get back to you soon.",
      success: true,
      error: "",
    };
    
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: "Failed to send email",
      error: "Failed to send message. Please try again.",
    };
  }
}

export { sendMail };
