"use client";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";

const HomeExtra = () => {
  return (
    <motion.section className="section mt-12 md:mt-24">
      <motion.div className="extra-banner-bg relative pt-16 pb-44 sm:pt-14 sm:pb-32 min-h-[400px] sm:min-h-[300px] xl:min-h-[300px] sm:h-[400px] w-full flex items-center">
        <motion.div className="container z-1 flex items-center h-full">
          <div className="flex items-center flex-wrap md:flex-nowrap gap-4 sm:gap-8 w-full">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="basis-full md:basis-1/3 order-last sm:order-first"
            >
              <div className="md:max-w-xl">
                <div className="space-y-4 mt-28">
                  <Typography
                    variant="p"
                    className=" leading-[3rem] sm:leading-[18px] text-background text-center md:text-start "
                  >
                    Experience the pure taste of nature&apos;s bounty with our
                    100% organic farm produce.
                  </Typography>
                </div>
                <div className="flex justify-center mx-auto md:mx-0 md:justify-start">
                  <a>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="text-foreground mt-3 "
                    >
                      Explore our farm
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("down", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="hidden  basis-full md:basis-2/3 md:flex sm:justify-end order-first sm:order-last"
            >
              <img
                src="/images/extra-img.png"
                alt=" loading..."
                className="h-[300px] sm:h-full sm:max-h-[400px] w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomeExtra;
