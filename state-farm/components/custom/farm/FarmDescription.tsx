"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";

export default function FarmDescription() {
  return (
    <motion.section className="bg-primary-50 bg-dotted-pattern bg-contain py-12 md:py-10 mt-16">
      <div className="container">
        <motion.div className="wrapper grid grid-cols-1 gap-10 md:grid-cols-2 2xl:gap-0">
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
              Discover the Natural Difference at{" "}
              <span className="text-primary">
                Capital State Farm Organic Products!
              </span>
            </Typography>
            <p className="p-regular-20 md:p-regular-24">
              <span className="text-accent font-medium">
                Here at Capital State Farm, we&apos;re dedicated to delivering
                the finest organic products straight from our fields to your
                table.
              </span>
              Our commitment to organic farming means you can enjoy fruits,
              vegetables, dairy, and meats that are free from harmful chemicals
              and pesticides. At Capital State Farm, we prioritize the health of
              our land and the well-being of our community. With each bite,
              you&apos;re tasting the bounty of nature nurtured by sustainable
              practices and a passion for quality. By choosing our organic
              products, you&apos;re not only embracing a healthier lifestyle but
              also supporting local agriculture and environmental stewardship.
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
