"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { NewsMockData } from "@/context/Content"
import { useSidebar } from "../ui/sidebar"
import SectionHeader from "../sharedUi/SectionHeader"
import { Skeleton } from "../ui/skeleton"
import Link from "next/link"

export default function NewsRender() {
    const [loading, setLoading] = useState(true)
    const [newsData, setNewsData] = useState<typeof NewsMockData | null>(null)
    const { open: sidebarOpen } = useSidebar()

    useEffect(() => {
        // Simulate fetch delay
        const timer = setTimeout(() => {
            setNewsData(NewsMockData)
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) return <NewsSkeleton />

    if (!newsData) return <div className="text-center text-red-500">Failed to load news.</div>

    const featured = newsData.find((item) => item.featured)
    const others = newsData.filter((item) => !item.featured)

    return (
        <section className="w-full pt-6 space-y-10">
            {/* Featured Article */}
            {featured && (
                <div
                    className={`grid ${sidebarOpen ? "" : "md:grid-cols-3"} xl:grid-cols-3 gap-8 items-start max-w-[1700px]`}
                >
                    <Image
                        src={featured.imgUrl}
                        alt={featured.imgalt}
                        width={800}
                        height={500}
                        className={`w-full h-full ${sidebarOpen ? "" : "md:col-span-2"} xl:col-span-2 object-cover`}
                    />
                    <div className="text-brand space-y-4">
                        <Link href={`/news/${featured.title}`} className="hover:opacity-80 transition block"><h2 className="text-4xl lg:text-[40px] 2xl:text-6xl font-black">{featured.title}</h2></Link>
                        <div className="flex items-center justify-start text-xs gap-2 font-semibold text-white flex-wrap">
                            <Link href={`/news/categories/${featured.type}`} className="hover:opacity-80 transition block"><span className="text-brand">{featured.type}</span></Link>
                            <span>| {featured.date}</span>
                            <span>| {featured.timeToRead}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Other Articles */}
            <div className="space-y-3">
                <SectionHeader headerTitle="Recent News" />
                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
                    {others.map((news, i) => (
                        <div key={i} className="overflow-hidden">
                            <Image
                                src={news.imgUrl}
                                alt={news.imgalt}
                                width={400}
                                height={250}
                                className="w-full h-56 object-cover"
                            />
                            <div className="pt-3 space-y-3">
                                <Link href={`/news/${news.title}`} className="hover:opacity-80 transition block"><h3 className="text-base lg:text-lg font-black text-brand">{news.title}</h3></Link>
                                <div className="flex items-center justify-start text-xs gap-2 font-semibold text-white flex-wrap">
                                    <Link href={`/news/categories/${news.type}`} className="hover:opacity-80 transition block"><span className="text-brand">{news.type}</span></Link>
                                    <span>| {news.date}</span>
                                    <span>| {news.timeToRead}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ================================
   Skeleton Loader for NewsRender
================================ */
function NewsSkeleton() {
    return (
        <section className="w-full pt-6 space-y-10 animate-pulse">
            {/* Featured Skeleton */}
            <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-8 items-start max-w-[1700px]">
                <div className="md:col-span-2 xl:col-span-2">
                    <Skeleton className="w-full h-[400px] rounded-none" />
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-10 w-3/4 rounded" />
                    <div className="flex gap-3">
                        <Skeleton className="h-4 w-16 rounded" />
                        <Skeleton className="h-4 w-16 rounded" />
                        <Skeleton className="h-4 w-16 rounded" />
                    </div>
                </div>
            </div>

            {/* Recent News Skeleton */}
            <div className="space-y-3">
                <Skeleton className="h-8 w-48 rounded" />
                <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="space-y-3">
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
        </section>
    )
}
