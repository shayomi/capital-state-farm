import HomeHero from "@/components/custom/home/HomeHero";
import HomeExplore from "@/components/custom/home/HomeExplore";
import HomeStatsCard from "@/components/custom/home/HomeStatsCard";
import HomeService from "@/components/custom/home/HomeService";
import HomeProduce from "@/components/custom/home/HomeProduce";
import HomeExtra from "@/components/custom/home/HomeExtra";
import ProductValue from "@/components/custom/home/HomeProductValue";

export default function Home() {
  return (
    <main className=" pt-24">
      <HomeHero />
      <HomeExplore />
      <HomeStatsCard />
      <HomeService />
      <HomeProduce />
      <ProductValue />
      <HomeExtra />
    </main>
  );
}
