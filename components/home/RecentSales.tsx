import React from "react"
import SectionHeader from "../sharedUi/SectionHeader"
import RecentCard from "../sharedUi/Cards/RecentCard"
import { Recents } from "@/context/Content"

export default function RecentSales() {

  return (
    <section className="px-4 space-y-4 pt-4 pb-8">
      <SectionHeader headerTitle="Recent Sales" SeeAllLink="/packs" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-between gap-6">
        {Recents.slice(0, 9).map((recent, index) => (
          <div
            key={index}
            className={`bg-card rounded-xl overflow-hidden transition-all duration-300`}
          >
            <RecentCard {...recent} />
          </div>
        ))}
      </div>
    </section>
  )
}
