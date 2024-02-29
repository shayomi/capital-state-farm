import React from "react";
import FarmHero from "@/components/custom/farm/FarmHero";
import FarmProduce from "@/components/custom/farm/FarmProduce";
import FarmDescription from "@/components/custom/farm/FarmDescription";
import FarmBanner from "@/components/custom/farm/FarmBanner";

const Farm = () => {
  return (
    <main className="pt-14">
      <FarmHero />
      <FarmDescription />
      <FarmBanner />
      <FarmProduce />
    </main>
  );
};

export default Farm;
