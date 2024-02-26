"use client";
import { homeStats } from "../constants/stat";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";
import { transition1 } from "@/app/Transition";

const HomeStatsCard = () => {
  return (
    <motion.section>
      <motion.div className=" max-w-[90%] lg:max-w-4xl w-full  mx-auto  sm:px-8  grid grid-cols-3 gap-3 sm:gap-10 items-start">
        {homeStats.map((item, index) => (
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
            <Typography variant="h2" className="text-[1rem] sm:text-4xl">
              {item.number}
            </Typography>

            <Typography
              variant="h6"
              className="text-[0.7rem] sm:text-base sm:max-w-[150px] font-normal sm:mt-1"
            >
              {item.title}
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HomeStatsCard;
