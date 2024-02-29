"use client";

import { Typography } from "@/components/ui/typography";
import { Produce } from "../constants/produce";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";
import { transition1 } from "@/app/Transition";
import Link from "next/link";

const HomeProduce = () => {
  return (
    <motion.section className="mt-24 " id="service">
      <div className="container">
        <h1 className="background-text text-end">Farm</h1>
        <Typography variant="h3" className="text-end">
          Our Top Produce
        </Typography>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
          {Produce.map((item, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              key={index}
              className=" flex flex-col gap-y-5 "
            >
              <div className="bg-secondary gray-card-shadow px-2.5 py-5 sm:px-4 sm:py-6  rounded-lg">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 mx-auto "
                />
              </div>
              <Typography variant="h5" className="mb-3 text-black text-center">
                {item.title}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="mt-6 px-4 flex justify-center"
        >
          <Button>
            <Link href="/farm">See all Produce</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeProduce;
