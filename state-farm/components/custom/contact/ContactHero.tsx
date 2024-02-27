"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";

const ContactHero = () => {
  return (
    <motion.section className="contact-hero-banner-bg-small sm:contact-hero-banner-bg">
      <div className="container">
        <motion.div
          variants={fadeIn("down", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="max-w-[28rem] pb-14 sm:pb-28 pt-10 sm:pt-16"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mt-8">Contact Us</h1>

          <Typography variant="div" className="mt-8">
            For more enquires, you can reach us at
          </Typography>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactHero;
