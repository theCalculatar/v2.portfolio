import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/app/context";

const poppoinsSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppoinsMono = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alpheus Mabetlela",
    template: "%s | Alpheus Mabetlela",
  },
  description:
    "Alpheus Mabetlela is a full-stack developer passionate about building high-impact web applications using Angular, React, Node.js, and modern technologies.",
  openGraph: {
    title: "Alpheus Mabetlela",
    description:
      "Welcome to the portfolio of Alpheus Mabetlela — full-stack dev, hackathon leader, and builder of real-world digital solutions.",
    url: "https://mahlane.vercel.app",
    siteName: "Alpheus's Portfolio",
    images: [
      {
        url: "https://mahlane.vercel.app/images/demo.png",
        width: 1200,
        height: 630,
        alt: "Alpheus Mabetlela Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpheus Mabetlela",
    description:
      "Explore Alpheus Mabetlela’s full-stack projects, tech journey, and contact information — all in one place.",
    images: ["https://mahlane.vercel.app/images/demo.png"],
  },
  metadataBase: new URL("https://mahlane.vercel.app"),
  icons: {
    icon: "/favicon.ico", // optional, if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <ContextProvider>
        <body
          className={`${poppoinsMono.variable} ${poppoinsSans.variable} antialiased px-4 relative md:px-8 lg:px-20 xl:px-48`}
        >
          <header className="fixed top-0 z-[999] left-4 right-4 md:left-8 md:right-8 lg:right-20 lg:left-20 xl:left-48 xl:right-48">
            <Navbar className="" />
          </header>
          {children}

          <footer>
            <Footer />
          </footer>
          {/* <div className="bg-blue-600/50 absolute z-10 inset-0">lee</div> */}
        </body>
      </ContextProvider>
    </html>
  );
}
