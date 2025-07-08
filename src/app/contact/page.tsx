import Container from "@/components/Container";
import SlideUp from "@/components/SlideUp";
import React from "react";
import ContactForm from "../ui/contactForm";

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
