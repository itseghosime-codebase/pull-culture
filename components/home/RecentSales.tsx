"use client"

import React from "react"
import SectionHeader from "../sharedUi/SectionHeader"
import RecentCard from "../sharedUi/Cards/RecentCard"
import { Recents } from "@/context/Content"
import { useSidebar } from "@/components/ui/sidebar"

export default function RecentSales() {
  const { open } = useSidebar() // Detect sidebar open/closed

  // Define responsive width classes based on sidebar state
  const cardWidth = open
    ? // When sidebar is OPEN
      "w-full md:w-[calc(100%-1rem)] lg:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1rem)]"
    : // When sidebar is CLOSED
      "w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(33.333%-1rem)]"

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
