import React from "react";
import FaqHero from "@/components/custom/faq/FaqHero";
import FaqAccordion from "@/components/custom/faq/FaqAccordion";

const FAQ = () => {
  return (
    <main className="pt-24">
      <FaqHero />

      <FaqAccordion />
    </main>
  );
};

export default FAQ;
