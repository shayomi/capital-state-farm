"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";
import { transition1 } from "@/app/Transition";

const HomeExplore = () => {
  return (
    <motion.section className="py-16 bg-gradient-to-t from-faded-secondary to-white">
      <div className="container">
        <motion.div className="flex flex-wrap md:flex-nowrap gap-10 sm:gap-8 lg:gap-14 items-end">
          <div className="basis-full sm:basis-6/12 sm:pr-8 order-first sm:order-last">
            <h1 className="background-text">ABOUT</h1>

            <motion.div
              variants={fadeIn("left", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="z-20 -mt-4"
            >
              <Typography variant="h3">Explore our farm</Typography>

              <Typography variant="h3" className="text-accent mt-4">
                Welcome to Capital State Farm, where the richness of nature
                meets sustainable farming practices.
              </Typography>

              <Typography variant="p">
                Founded by Built upon a foundation of family farming traditions,{" "}
                <a href="https://www.linkedin.com/in/eaboyeji" target="_blank">
                  name name
                </a>{" "}
                brings decades of experience and a relentless drive to innovate
                within the organic industry. At Farm Name, we cultivate premium,
                nutrient-dense produce that not only nourishes the body but also
                fuels the growing demand for organic products in today's
                marketplace. Our commitment to quality, sustainability, and
                consumer satisfaction sets us apart, driving growth and
                profitability while fostering a healthier planet for future
                generations.
              </Typography>

              <Typography variant="p" className="styled-link">
                Experience the profitability of purpose-driven farming at Farm
                Name, where every harvest represents a sustainable investment in
                a brighter, greener future.
              </Typography>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("right", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="basis-full sm:basis-6/12 order-last sm:order-first"
          >
            <img
              src="/images/explore-img.png"
              alt="explore image"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeExplore;
