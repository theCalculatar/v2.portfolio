import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <div className=" relative">
      <Hero />
      <Projects />
      <Services />
      <Pricing />
      <Faqs />
    </div>
  );
}
