"use client"

import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Marquee } from "../ui/marquee"
import { useAnnouncementStore } from "@/lib/store/announcement-store"
import React from "react"

const messages = [
  "🎉 Free shipping on orders above $100!",
  "⚡ Flash Sale: Up to 50% off today only!",
  "💳 Secure payments with Stripe — shop confidently!",
  "🕒 New arrivals drop every Friday — stay tuned!",
]

export default function Announcement() {
  const { isVisible, hideAnnouncement } = useAnnouncementStore()

  if (!isVisible) return null

  // Compute duration dynamically based on number of messages
  const baseSpeedPerItem = 12 // seconds per message
  const durationSeconds = messages.length * baseSpeedPerItem

  // Type-safe CSS variable
  const marqueeStyle: React.CSSProperties = {
    ["--duration" as unknown as keyof React.CSSProperties]: `${durationSeconds}s`,
  }

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 z-[100] h-11 flex items-center justify-between px-4 sm:px-6 bg-dark text-brand font-bold",
        "border-b border-brand/20"
      )}
    >
      {/* Marquee Section */}
      <div className="flex-1 overflow-hidden">
        <Marquee
          pauseOnHover
          className="flex gap-8 text-sm sm:text-base"
          style={marqueeStyle}
        >
          {messages.map((msg, i) => (
            <span key={i} className="whitespace-nowrap">
              {msg}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Close Button */}
      <button
        onClick={hideAnnouncement}
        className="ml-4 flex items-center justify-center text-brand hover:text-brand/80 transition-colors"
        aria-label="Close announcement"
      >
        <X size={20} />
      </button>
    </div>
  )
}
