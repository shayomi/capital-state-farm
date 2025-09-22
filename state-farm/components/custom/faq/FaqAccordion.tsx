"use client";
import { faqs } from "../constants/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { fadeIn } from "@/app/Variant";
import { motion } from "framer-motion";

const FaqAccordion = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView={"show"}
      variants={fadeIn("down", "tween", 0.6, 1.4)}
      className="container py-20"
    >
      <motion.div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>

              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
};

export default FaqAccordion;
