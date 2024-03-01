import React from "react";
import ContactHero from "@/components/custom/contact/ContactHero";
import ContactDetails from "@/components/custom/contact/ContactDetails";
import ContactForm from "@/components/custom/contact/ContactForm";

const FAQ = () => {
  return (
    <main className="pt-20 pb-20">
      <ContactHero />

      <ContactDetails />

      <ContactForm />
    </main>
  );
};

export default FAQ;
