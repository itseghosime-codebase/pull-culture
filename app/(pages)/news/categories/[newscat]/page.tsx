"use client"

import React, { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa"
import { NewsMockData } from "@/context/Content"
import SectionHeader from "@/components/sharedUi/SectionHeader"
import { Skeleton } from "@/components/ui/skeleton"


interface Props {
    params: Promise<{
        newscat: string
    }>
}

export default function NewsCategoryPage({ params }: Props) {
    const { newscat } = React.use(params)
    const [loading, setLoading] = useState(true)
    const [filteredPosts, setFilteredPosts] = useState<typeof NewsMockData>([])

    useEffect(() => {
        // Simulate fetch delay
        const timer = setTimeout(() => {
            const filtered = NewsMockData.filter(
                (post) =>
                    post.type.toLowerCase() === decodeURIComponent(newscat).toLowerCase()
            )
            setFilteredPosts(filtered)
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [newscat])

    if (loading) return <NewsCategorySkeleton />

    if (filteredPosts.length === 0) {
        notFound()
    }

    return (
        <div className="pb-10 pt-4 px-4 md:px-10">
            {/* Back Link */}
            <Link
                href="/news"
                className="text-brand font-semibold hover:opacity-80 transition flex items-center gap-1 w-full"
            >
                <FaChevronLeft />
                <SectionHeader headerTitle="Back to News" />
            </Link>

            {/* Page Title */}
            <h3 className="font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand text-center my-8">
                {decodeURIComponent(newscat)} News
            </h3>
            <div className="h-0.5 w-full bg-brand mb-6" />

            {/* News Grid */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
                {filteredPosts.map((post, index) => (
                    <div key={index} className="overflow-hidden">
                        <Image
                            src={post.imgUrl}
                            alt={post.imgalt}
                            width={400}
                            height={250}
                            className="w-full h-56 object-cover"
                        />
                        <div className="pt-3 space-y-3">
                            <Link
                                href={`/news/${post.title}`}
                                className="hover:opacity-80 transition block"
                            >
                                <h3 className="text-base lg:text-lg font-black text-brand">
                                    {post.title}
                                </h3>
                            </Link>
                            <div className="flex items-center justify-start text-xs gap-2 font-semibold text-white flex-wrap">
                                <span className="text-brand">{post.type}</span>
                                <span>| {post.date}</span>
                                <span>| {post.timeToRead}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ================================
   Skeleton Loader for NewsCategoryPage
================================ */
function NewsCategorySkeleton() {
    return (
        <div className="pb-10 pt-4 px-4 md:px-10 animate-pulse">
            {/* Back Link Skeleton */}
            <div className="flex items-center gap-2 mb-6">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-6 w-32 rounded" />
            </div>

            {/* Title Skeleton */}
            <div className="flex flex-col items-center mb-8">
                <Skeleton className="h-10 w-2/3 rounded" />
            </div>
            <Skeleton className="h-0.5 w-full bg-brand mb-6" />

            {/* News Cards Skeleton */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="overflow-hidden space-y-3">
                        <Skeleton className="w-full h-56 rounded-none" />
                        <Skeleton className="h-5 w-3/4 rounded" />
                        <div className="flex gap-3">
                            <Skeleton className="h-4 w-12 rounded" />
                            <Skeleton className="h-4 w-12 rounded" />
                            <Skeleton className="h-4 w-12 rounded" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
