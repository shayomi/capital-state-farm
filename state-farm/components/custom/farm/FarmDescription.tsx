"use client";

import Image from "next/image";

import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";

export default function FarmDescription() {
  return (
    <motion.section className="bg-primary-50 bg-dotted-pattern bg-contain py-12 md:py-10 mt-16">
      <div className="container">
        <motion.div className="wrapper grid grid-cols-1 gap-10 md:grid-cols-2 2xl:gap-0 items-center">
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className=" flex flex-col justify-center gap-8"
          >
            <Typography
              variant="h3"
              className="sm:leading-[36px] lg:leading-[42px]"
            >
              Discover food in its purest form at{" "}
              <span className="text-primary">Capital State Farm!</span>
            </Typography>
            <p className="p-regular-20 md:p-regular-24">
              <span className="text-accent font-medium">
                Capital State Farm is dedicated to delivering the finest organic
                produce straight from our farm to your kitchen. Our commitment
                to organic farming means you can enjoy chemical-free fruits,
                vegetables, non-dairy, and meats.{" "}
              </span>{" "}
              At Capital State Farm, we love food in its most divine form, and
              our love for food translates into our passion for the earth that
              grows this food. Thus, we promote environmentally safe practices
              that are kind to the planet. By choosing our organically grown
              produce, you&apos;re not only embracing a healthier lifestyle but
              also supporting age-long agricultural practices that protect the
              environment.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className=""
          >
            <Image
              src="/images/product-farm-bg.png"
              alt="hero image loading"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] drop-shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
