"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";

export default function FarmHero() {
  return (
    <motion.section className="product-hero-banner-bg">
      <div className="container">
        <motion.div
          variants={fadeIn("down", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="max-w-[32rem] py-36 "
        >
          <Typography variant="h2" className="">
            From our Farm to <span className="text-primary">your Kitchen</span>
          </Typography>
        </motion.div>
      </div>
    </motion.section>
  );
}
