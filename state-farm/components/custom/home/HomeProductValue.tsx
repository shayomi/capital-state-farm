"use client";

import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";
import { Button } from "@/components/ui/button";
import { ProductValues } from "../constants/productvalue";
import { transition1 } from "@/app/Transition";
import Image from "next/image";

const ProductValue = () => {
  return (
    <motion.section className="container mt-24 sm:mt-32">
      <Typography variant="h2">Our Products are</Typography>
      <div className="flex flex-wrap md:flex-nowrap gap-24 sm:gap-8 lg:gap-14 items-center mt-12">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up", "tween", 0.2, 0.4)}
          className="basis-full sm:basis-6/12 grid grid-cols-1 sm:grid-cols-2 gap-y-14 gap-x-6 lg:gap-14 items-stretch order-last sm:order-first"
        >
          {ProductValues.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", "tween", index * 0.2, 0.4)}
              whileHover={{ scale: 1.05 }}
              transition={transition1}
              key={index}
              className="basis-full sm:basis-6/12 relative"
            >
              <div className="bg-white border-b border-primary  card-shadow pt-6 pb-5 px-5 rounded-3xl h-full">
                <Typography
                  variant="largeText"
                  className="text-[0.9rem] sm:text-lg mt-4 text-primary font-bold"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="p"
                  className="text-[0.9rem] sm:text-lg font-normal mt-4"
                >
                  {item.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="basis-full sm:basis-6/12 order-first sm:order-last">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="z-20 -mt-4"
          >
            <img
              src="/images/productvalue.png"
              alt="service"
              className="w-full h-auto "
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductValue;
