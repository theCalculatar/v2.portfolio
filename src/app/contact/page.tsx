import { Metadata } from "next";
import Container from "@/components/Container";
import SlideUp from "@/components/SlideUp";
import React from "react";
import ContactForm from "../ui/contactForm";

export const metadata: Metadata = {
  title: "Contact | Alpheus Mabetlela",
  description:
    "Get in touch with Alpheus Mabetlela — full-stack developer available for freelance projects, collaborations, and opportunities.",
  openGraph: {
    title: "Contact | Alpheus Mabetlela",
    description:
      "Reach out to Alpheus for work, collabs, or just to connect. Always open to exciting opportunities.",
    url: "https://mahlane.vercel.app/contact",
    siteName: "Alpheus's Portfolio",
    images: [
      {
        url: "https://mahlane.vercel.app/og/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Alpheus Mabetlela",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Alpheus Mabetlela",
    description:
      "Want to work with Alpheus? Reach out via email or socials — always keen to collaborate.",
    images: ["https://mahlane.vercel.app/twitter/contact.png"],
  },
};

function Page() {
  return (
    <Container>
      <SlideUp>
        <ContactForm />
      </SlideUp>
    </Container>
  );
}

export default Page;
