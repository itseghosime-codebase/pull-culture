"use client"

import React from "react"
import SectionHeader from "../sharedUi/SectionHeader"
import RecentCard from "../sharedUi/Cards/RecentCard"
import { Recents } from "@/context/Content"
import { useSidebar } from "@/components/ui/sidebar"

export default function RecentSales() {
  const { open } = useSidebar()

  // Responsive widths depending on sidebar state
  const cardWidth = open
    ? // Sidebar open → slightly fewer columns
    "w-full md:w-[calc(100%-1rem)] lg:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1rem)] 3xl:w-[calc(24%-1rem)]"
    : // Sidebar closed → more room for cards
    "w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)]"

  return (
    <section className="px-4 space-y-4 pt-4 pb-8">
      <SectionHeader headerTitle="Recent Sales" SeeAllLink="/packs" />
      <div className="flex flex-wrap justify-between gap-6">
        {Recents.slice(0, 9).map((recent, index) => (
          <div
            key={index}
            className={`bg-card rounded-xl overflow-hidden transition-all duration-300 ${cardWidth}`}
          >
            <RecentCard {...recent} />
          </div>
        ))}
      </div>
    </section>
  )
}
