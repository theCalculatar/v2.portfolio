import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Faqs from "@/components/Faqs";

export const metadata: Metadata = {
  title: "Home | Alpheus Mabetlela",
  description:
    "Full-stack developer. Builder. Innovator. Explore Alpheus Mabetlela’s digital portfolio and latest work.",
  openGraph: {
    title: "Home | Alpheus Mabetlela",
    description:
      "Discover projects, background, and contact info for Alpheus — full-stack developer and hackathon leader.",
    url: "https://mahlane.vercel.app",
    siteName: "Alpheus's Portfolio",
    images: [
      {
        url: "https://mahlane.vercel.app/images/demo.png",
        width: 1200,
        height: 630,
        alt: "Alpheus Mabetlela Homepage Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpheus Mabetlela",
    description:
      "Explore Alpheus Mabetlela’s full-stack dev journey, projects, and how to get in touch.",
    images: ["https://mahlane.vercel.app/images/demo.png"],
  },
};

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <Projects />
      <Services />
      <Pricing />
      <Faqs />
    </div>
  );
}
