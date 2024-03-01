"use client";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/Variant";

const HomeExtra = () => {
  return (
    <motion.section className="section mt-12 md:mt-24 extra-banner-bg max-h-[700px]">
      <motion.div className=" container   w-full flex items-center">
        <motion.div className="flex items-center h-full">
          <div className="flex items-center flex-wrap md:flex-nowrap gap-4 sm:gap-8 w-full">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="basis-full md:basis-1/3 order-last md:order-first"
            >
              <div className="md:max-w-xl pb-12 md:pb-0">
                <div className="mt-0 md:mt-28">
                  <Typography
                    variant="p"
                    className=" leading-[1rem] sm:leading-[18px] text-background text-center md:text-start "
                  >
                    Experience the pure taste of nature&apos;s bounty with our
                    100% organic farm produce.
                  </Typography>
                </div>
                <div className="flex justify-center mx-auto md:mx-0 md:justify-start">
                  <Typography variant="p" className="text-white">
                    For more information, see our{" "}
                    <a href="/faq" className="text-secondary">
                      FAQ
                    </a>
                  </Typography>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("down", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className=" basis-full md:basis-2/3 md:flex sm:justify-end order-first md:order-last"
            >
              <img
                src="/images/extras-img.png"
                alt=" loading..."
                className="h-auto sm:h-full sm:max-h-[400px] w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomeExtra;
