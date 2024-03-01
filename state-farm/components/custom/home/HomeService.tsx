"use client";

import { Typography } from "@/components/ui/typography";
import { Services } from "../constants/service";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";
import { transition1 } from "@/app/Transition";

const HomeService = () => {
  return (
    <motion.section className="mt-24 " id="service">
      <div className="container">
        <h1 className="background-text">Values</h1>
        <Typography variant="h3">What we are about</Typography>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
          {Services.map((item, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              key={index}
              className="bg-[#FBF2F0] gray-card-shadow px-2.5 py-5 sm:px-4 sm:py-6 text-center  rounded-lg"
            >
              <Typography variant="h5" className="mb-3 text-primary ">
                {item.title}
              </Typography>

              <Typography variant="smallText" className="font-normal">
                {item.description}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex flex-wrap md:flex-nowrap gap-10 sm:gap-8 lg:gap-14 items-center mt-16">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="basis-full sm:basis-full lg:basis-5/12"
          >
            <img
              src="/images/meats.png"
              alt="service"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="basis-full sm:basis-full lg:basis-7/12 overflow-hidden"
          >
            <div className="lg:max-w-[590px] lg:ml-auto z-20 -mt-4">
              <Typography variant="h4" className="text-accent mt-4">
                At our organic farm, we are driven by a deep commitment to
                sustainability, health, transparency, and community. Our
                dedication to producing food free from synthetic pesticides and
                GMOs underscores our mission to provide nourishing, wholesome
                produce that supports both individual well-being and
                environmental health.
              </Typography>

              <Typography variant="p">
                Transparency lies at the heart of our operation. We uphold
                stringent organic certification standards and provide clear
                insights into our farming methods and processes. By actively
                engaging with local consumers, businesses, and agricultural
                organizations, we foster a sense of community and connection.
              </Typography>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeService;
