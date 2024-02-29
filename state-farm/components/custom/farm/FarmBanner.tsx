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
              Indulge in the richness of nature with Capital State Farm&apos;s
              exquisite organic products. From the moment our seeds touch the
              soil to the moment our harvest reaches your plate, we uphold the
              highest standards of organic farming, ensuring that every bite is
              a celebration of purity and quality.
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
              By choosing Capital State Farm Organic, you&apos;re not just
              making a purchase; you&apos;re making a conscious decision to
              support sustainable agriculture and promote a healthier lifestyle
              for yourself and future generations. Join us in embracing the
              vitality of organic living and experience the difference firsthand
              with our farm-fresh delights. Welcome to a world where every taste
              tells a story of wholesome goodness!
            </Typography>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FarmBanner;
