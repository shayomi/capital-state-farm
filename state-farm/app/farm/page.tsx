import React from "react";
import FarmHero from "@/components/custom/farm/FarmHero";
import FarmProduce from "@/components/custom/farm/FarmProduce";

const Farm = () => {
  return (
    <main className="pt-24">
      <FarmHero />

      <FarmProduce />
    </main>
  );
};

export default Farm;
