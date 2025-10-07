'use client'
import { LucideClock3 } from 'lucide-react'
import React from 'react'

// 🕒 Utility to format countdown
function formatTimeLeft(ms: number): string {
  if (ms <= 0) return "00d 00h 00m 00s"

  const totalSeconds = Math.floor(ms / 1000)
  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

export default function Summary() {
  const [timeLeft, setTimeLeft] = React.useState("")

  React.useEffect(() => {
    // Calculate end of this month
    const now = new Date()
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
    endOfMonth.setHours(0, 0, 0, 0)

    const updateTimer = () => {
      const diff = endOfMonth.getTime() - new Date().getTime()
      setTimeLeft(formatTimeLeft(diff))
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  const totalPoints = 12425
  const rank = 1401
  const pointsToday = 2510

  return (
    <div className="text-center text-white font-semibold text-base sm:text-lg w-full px-4">
      {/* ⏱ Header */}
      <p className="text-sm sm:text-base md:text-lg">Time Left</p>
      <div className="flex items-center justify-center gap-2 sm:gap-3 text-brand text-base sm:text-lg md:text-xl mb-4">
        <LucideClock3 className="w-5 h-5 sm:w-6 sm:h-6" />
        <h5>{timeLeft}</h5>
      </div>

      {/* 🧾 Stats Container */}
      <div
        className="
          mt-2 border-[3px] border-brand rounded-xl 
          flex flex-col sm:flex-row flex-wrap
          items-center justify-between text-center
          gap-4 sm:gap-6 md:gap-8 py-4 sm:py-0 bg-card md:bg-transparent
          text-sm sm:text-base md:text-lg
        "
      >
        <p className="flex-1 w-full sm:w-auto sm:py-2 py-0">
          You have:{" "}
          <span className="text-brand font-black">
            {totalPoints.toLocaleString()} Points
          </span>
        </p>

        <p className="flex-1 sm:border-x-[3px] sm:py-2 py-0 border-brand w-full sm:w-auto">
          Your current rank:{" "}
          <span className="text-brand font-black">#{rank}</span>
        </p>

        <p className="flex-1 w-full sm:w-auto sm:py-2 py-0">
          Points Earned Today:{" "}
          <span className="text-brand font-black">
            {pointsToday.toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  )
}
