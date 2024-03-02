"use client";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";

const FarmBanner = () => {
  return (
    <motion.section className="section farm-banner-bg mt-12 sm:mt-24">
      <div className="container py-36">
        <motion.div className="wrapper grid grid-cols-1 gap-10 md:grid-cols-2 2xl:gap-0">
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className=" "
          >
            <Typography variant="p" className="text-white">
              Indulge in the richness of nature with Capital State Farm's Farm's
              exquisite organic produce. From the moment our seeds touch the
              soil to the moment our harvest reaches your plate, we uphold the
              highest standards of organic farming and processing to ensure that
              every bite is a celebration of purity and quality.
            </Typography>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className=""
          >
            <Typography variant="p" className="text-white">
              You&apos;re not just making a purchase when you buy from Capital
              State Farm; you&apos;re making a conscious decision to support
              sustainable agriculture that promotes a healthier lifestyle for
              you and your family. In a world where farmers prioritize profit,
              we embrace the vitality of organically grown food. Welcome to a
              world where every taste tells a story of farm-fresh delights and
              wholesome goodness!
            </Typography>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FarmBanner;
