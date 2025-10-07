"use client"

import Image from "next/image"
import React, { useState } from "react"
import CardPopup from "./CardPopup"

interface Card {
  id: string | number
  name: string
  imageSrc: string
  player?: string
  card?: string
}

interface HitListCatProps {
  title: string
  chance: string
  cards: Card[]
}

export default function HitListCat({ title, chance, cards }: HitListCatProps) {
  const [open, setOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  // Determine grid columns dynamically
  const gridCols =
    cards.length < 5
      ? "grid-cols-3 md:grid-cols-4"
      : cards.length < 8
        ? "grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        : "grid-cols-3 md:grid-cols-4 lg:grid-cols-8"

  const handleCardClick = (card: Card) => {
    setSelectedCard(card)
    setOpen(true)
  }

  return (
    <div className="border-t-2 border-brand pt-6">
      {/* Header */}
      <div className="text-white">
        <h3 className="font-black text-2xl md:text-3xl lg:text-4xl uppercase">{title}</h3>
        <h5 className="font-bold text-xl md:text-2xl lg:text-3xl">Pull Chance {chance}</h5>
      </div>

      {/* Cards grid */}
      <div className={`grid mt-6 gap-3 ${gridCols}`}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src={card.imageSrc || "/assets/cards/placeholder.png"}
              alt={card.name}
              width={250}
              height={400}
              className="h-full w-full object-cover rounded-md"
            />
            <p className="text-white text-center mt-2 text-sm font-medium">
              {card.name}
            </p>
          </div>
        ))}
      </div>

      {/* Popup */}
      <CardPopup open={open} onOpenChange={setOpen} row={selectedCard} />
    </div>
  )
}
