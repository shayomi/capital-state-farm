"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";

export default function HomeHero() {
  return (
    <motion.section className="bg-primary-50 bg-dotted-pattern bg-contain py-12 md:py-10">
      <div className="container">
        <motion.div className="wrapper grid grid-cols-1 gap-10 md:grid-cols-2 2xl:gap-0">
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className=" flex flex-col justify-center gap-8"
          >
            <div>
              <Typography
                variant="h1"
                className="sm:leading-[52px] lg:leading-[62px]"
              >
                Home of Quality
              </Typography>
              <Typography
                variant="h2"
                className="sm:leading-[52px] lg:leading-[62px] text-primary"
              >
                Agricultural Produce
              </Typography>
            </div>

            <p className="p-regular-20 md:p-regular-24">
              Enjoy food the way nature intended with organically grown produce
              from our farm to your kitchen and tables.
            </p>
            <Button size="lg" className="button w-full sm:w-fit hidden md:flex">
              <Link href="/farm">Explore Now</Link>
            </Button>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className=""
          >
            <img
              src="/images/csf-hero.png"
              alt="hero image loading"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
            <Button
              size="lg"
              asChild
              className="button w-full sm:w-fit sm:flex mx-auto md:hidden mt-12"
            >
              <Link href="#events">Explore Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
