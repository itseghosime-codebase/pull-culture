"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HiDotsHorizontal } from "react-icons/hi"
import { FaRegEye } from "react-icons/fa"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils" // Optional helper for conditional classes
import { useSidebar } from "../ui/sidebar"
import { Skeleton } from "../ui/skeleton"

interface CardInfo {
    id: string
    name: string
    number: string
    collection: string
    year: number
    grader: string
    grade: string
    cert: string
    type: string
    player: string
    set: string
    language: string
    auto: boolean
    numbered: boolean
    outOf: string
    parallel: string
    owner: {
        name: string
        image: string
    }
    auction: {
        price: string
        bids: number
        ends: string
        timeLeft: {
            days: number
            hours: number
            minutes: number
            seconds: number
        }
    }
    imageFront: string
    imageBack: string
    views: number
}

export default function MarketOverview() {
    const [card, setCard] = useState<CardInfo | null>(null)
    const { open: sidebarOpen } = useSidebar()
    const [loading, setLoading] = useState(true)

    // 👇 Add this state for tracking which side is shown
    const [viewSide, setViewSide] = useState<"front" | "back">("front")

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                setLoading(true)
                const mockData: CardInfo = {
                    id: "1",
                    name: "LeBron James",
                    number: "#78",
                    collection: "2003 UD Exquisite Collection Rookie Patch Auto /23",
                    year: 2003,
                    grader: "PSA",
                    grade: "8.5",
                    cert: "63140708",
                    type: "Basketball",
                    player: "LeBron James",
                    set: "UD Exquisite",
                    language: "English",
                    auto: true,
                    numbered: true,
                    outOf: "/23",
                    parallel: "Exquisite Rookie Patch",
                    owner: {
                        name: "Steezy",
                        image: "/assets/users/user-01.png",
                    },
                    auction: {
                        price: "$25,215",
                        bids: 15,
                        ends: "Oct. 6",
                        timeLeft: { days: 4, hours: 7, minutes: 21, seconds: 44 },
                    },
                    imageFront: "/assets/cards/Pack-03.png",
                    imageBack: "/assets/cards/Pack-02.png",
                    views: 12,
                }

                setTimeout(() => {
                    setCard(mockData)
                    setLoading(false)
                }, 1000)
            } catch (error) {
                console.error("Failed to fetch card data", error)
                setLoading(false)
            }
        }

        fetchCardData()
    }, [])

    if (loading) return <SkeletonCard />
    if (!card) return <div className="text-center text-red-500">Failed to load card data.</div>

    // 👇 Compute current image based on selected side
    const currentImage = viewSide === "front" ? card.imageFront : card.imageBack

    return (
        <div className="py-7 md:pr-10 space-y-7 text-white">
            {/* Header */}
            <div className="flex items-center justify-end text-lg font-medium gap-3">
                <FaRegEye />
                <span>{card.views}</span>
                <HiDotsHorizontal />
            </div>

            {/* Layout */}
            <div
                className={cn(
                    "grid gap-8 transition-all duration-300 w-full",
                    sidebarOpen ? "grid-cols-1 xl:grid-cols-5" : "md:grid-cols-5 items-center"
                )}
            >
                {/* Left: Card Image */}
                <div className={`${!sidebarOpen && 'md:col-span-2'} xl:col-span-2 flex flex-col items-center gap-5`}>
                    <Image
                        src={currentImage}
                        alt={card.name}
                        width={350}
                        height={600}
                        priority
                        className="mx-auto h-auto w-full max-w-xs sm:max-w-sm rounded-xl object-contain"
                    />

                    {/* 👇 Interactive buttons */}
                    <div className="flex items-center justify-center gap-3">
                        <Button
                            onClick={() => setViewSide("front")}
                            className={cn(
                                "!text-base px-5 !h-14 font-bold border-2",
                                viewSide === "front"
                                    ? "bg-brand text-dark border-brand hover:bg-brand/80"
                                    : "bg-transparent border-brand text-white hover:border-brand/80 hover:text-brand/80"
                            )}
                        >
                            View Front
                        </Button>
                        <Button
                            onClick={() => setViewSide("back")}
                            className={cn(
                                "!text-base px-5 !h-14 font-bold border-2",
                                viewSide === "back"
                                    ? "bg-brand text-dark border-brand hover:bg-brand/80"
                                    : "bg-transparent border-brand text-white hover:border-brand/80 hover:text-brand/80"
                            )}
                        >
                            View Back
                        </Button>
                    </div>
                </div>

                {/* Right: Card Info */}
                <div className={`${!sidebarOpen && 'md:col-span-3'} xl:md:col-span-3 font-bold space-y-5`}>
                    <div className="max-w-lg space-y-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl">
                            {card.name}{" "}
                            <span className="text-brand ml-4 font-semibold">{card.number}</span>
                        </h2>
                        <h3 className="text-xl md:text-2xl lg:text-3xl">
                            {card.collection}
                            <span className="block text-brand">PSA {card.grade} Auto 10</span>
                        </h3>
                    </div>

                    {/* Owner */}
                    <div className="max-w-sm border-y-2 border-brand flex items-center gap-4 text-sm py-2">
                        <span>Card Owner:</span>
                        <div className="flex items-center gap-2 text-brand font-semibold">
                            <Image
                                src={card.owner.image}
                                alt={card.owner.name}
                                width={28}
                                height={28}
                                className="w-7 h-7 rounded-md"
                            />
                            <p>{card.owner.name}</p>
                        </div>
                    </div>

                    {/* Card Information */}
                    <div className="space-y-2">
                        <p>Card Information:</p>
                        <div className="bg-card px-5 py-4 rounded-lg flex flex-wrap justify-start gap-5">
                            {[
                                { label: "Grader", value: card.grader },
                                { label: "Grade", value: card.grade },
                                { label: "Cert", value: card.cert },
                                { label: "Type", value: card.type },
                                { label: "Year", value: card.year },
                                { label: "Card #", value: card.number },
                                { label: "Player", value: card.player },
                                { label: "Card Set", value: card.set },
                                { label: "Language", value: card.language },
                                { label: "Auto", value: card.auto ? "Yes" : "No" },
                                { label: "#’D", value: card.numbered ? "Yes" : "No" },
                                { label: "Out of", value: card.outOf },
                                { label: "Parallel", value: card.parallel },
                            ].map((info) => (
                                <div key={info.label} className="text-sm space-y-2 flex flex-col items-center">
                                    <p className="font-medium">{info.label}</p>
                                    <span className="font-bold border-[3px] rounded-3xl px-4 py-2 border-brand">
                                        {info.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="max-w-sm h-0.5 w-full bg-brand mt-4" />
                    </div>

                    {/* Auction Info */}
                    <div className="space-y-2">
                        <p className="text-lg md:text-xl lg:text-2xl">Auction</p>
                        <div className="bg-card rounded-lg">
                            <div className="flex items-center px-5 justify-between py-4 flex-wrap gap-4">
                                <div className="space-y-2">
                                    <h4 className="text-lg md:text-xl lg:text-2xl">{card.auction.price}</h4>
                                    <div className="text-sm font-semibold flex items-center gap-5">
                                        <p>{card.auction.bids} Bids</p>
                                        <p>Ends {card.auction.ends}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 text-center">
                                    {Object.entries(card.auction.timeLeft).map(([key, val]) => (
                                        <div key={key}>
                                            <p className="text-xs capitalize">{key}</p>
                                            <h3 className="text-lg">{val}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button
                                asChild
                                variant="link"
                                size="lg"
                                className="w-full bg-brand rounded-lg h-auto py-4 text-sm text-dark font-medium hover:no-underline hover:bg-brand/80"
                            >
                                <Link href={`/bid/${card.id}`}>Bid Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ================================
   Skeleton Component
================================ */
function SkeletonCard() {
    return (
        <div className="py-7 md:pr-10 space-y-7 text-white animate-pulse">
            <div className="flex items-center justify-end gap-3">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-8 rounded" />
            </div>

            <div className="grid md:grid-cols-5 items-center gap-8">
                {/* Skeleton image */}
                <div className="col-span-2 flex flex-col items-center gap-5">
                    <Skeleton className="w-72 h-[400px] rounded-xl" />
                    <div className="flex gap-3">
                        <Skeleton className="w-28 h-12 rounded-lg" />
                        <Skeleton className="w-28 h-12 rounded-lg" />
                    </div>
                </div>

                {/* Skeleton details */}
                <div className="col-span-3 space-y-5">
                    <Skeleton className="h-8 w-2/3 rounded" />
                    <Skeleton className="h-6 w-1/2 rounded" />
                    <Skeleton className="h-32 w-full rounded-lg" />
                    <Skeleton className="h-40 w-full rounded-lg" />
                </div>
            </div>
        </div>
    )
}
