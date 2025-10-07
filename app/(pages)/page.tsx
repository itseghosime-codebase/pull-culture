import Banner from "@/components/home/Banner";
import FeaturedPacks from "@/components/home/FeaturedPacks";
import PullAPack from "@/components/home/Pull-a-Pack";
import PullStatistics from "@/components/home/PullStatistics";
import RecentPulls from "@/components/home/RecentPulls";
import RecentSales from "@/components/home/RecentSales";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Pull Culture",
  description: "description",
};


export default function Home() {
  return (
    <div>
      <Banner />
      <PullAPack />
      <RecentPulls />
      <PullStatistics />
      <FeaturedPacks />
      <RecentSales />
    </div>
  );
}
