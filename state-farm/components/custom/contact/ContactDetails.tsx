"use client";
import { ContactDetail } from "../constants/contact";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";
import { transition1 } from "@/app/Transition";

const ContactDetails = () => {
  return (
    <motion.section className="mt-12 sm:mt-24">
      <div className="max-w-[90%] mx-auto justify-center flex text-center flex-col">
        <Typography variant="h3">Get In Touch With Us</Typography>
        <Typography variant="p">phone and email</Typography>
      </div>
      <motion.div className=" max-w-[90%] lg:max-w-2xl w-full  mx-auto px-4 sm:px-24 flex flex-row justify-center items-center gap-3 sm:gap-3 mt-8">
        {ContactDetail.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            key={index}
            className="bg-secondary  card-shadow rounded-lg text-center px-4 lg:px-12 py-6 sm:py-12 max-w-[400px] mx-auto"
          >
            <img
              src={item.icon}
              alt="loading..."
              className="w-7 h-7 mx-auto mb-5"
            />

            <Typography variant="h6" className="mb-3">
              {item.title}
            </Typography>

            <Typography
              variant="h4"
              className="text-[0.7rem] sm:text-base sm:max-w-[150px] font-normal sm:mt-1"
            >
              {item.detail}
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ContactDetails;
