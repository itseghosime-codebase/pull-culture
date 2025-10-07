import Marketplace from "@/components/marketplace/marketplace"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace - Pull Culture",
  description: "description",
};


export default function MarketplacePage() {
    return (
        <Marketplace />
    )
}
