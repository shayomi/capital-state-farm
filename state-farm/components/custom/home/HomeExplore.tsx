"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";

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

              <Typography variant="h5" className="text-accent mt-4">
                Founded in 2023, Capital State Farms was built on the foundation
                of growing agricultural produce as nature intended using a
                combination of innovations and age-long farming practices
                without compromising the nature of the produce.
              </Typography>

              <Typography variant="p">
                At Capital Farms, we understand that food is the purest form of
                love, and we strive to cultivate high-quality produce that fuels
                the growing demand for organic products in today&apos;s
                marketplace. We run a mixed farming system that includes
                cultivating plants and raising animals. Our vegetables are grown
                optimally under the right amount of light, water, and nutrients,
                while our animals are free-ranging and grass-fed. Not only do
                our farming practices ensure that our vegetables and meat are
                nutritious and flavorful to our teeming customers, but they are
                also sustainable and kind to the environment. The end product of
                our sustainable farming process is fresh vegetables, meat, and
                non-dairy produce straight from our farm to your kitchen.
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
        <Typography
          variant="p"
          className="styled-link mt-6 max-w-[95%] sm:max-w-[70%] mx-auto"
        >
          At Capital State Farms, we are committed to quality, sustainability,
          and consumer satisfaction. Our excellent attributes of driving growth
          and healthier food options at pocket-friendly prices while fostering a
          safer planet for future generations set us apart. Experience food in
          its purest form at Capital State Farm, where it grows as nature wills
          it.
        </Typography>
      </div>
    </motion.section>
  );
};

export default HomeExplore;
