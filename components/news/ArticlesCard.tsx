"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

// Define prop types
interface ArticleCardProps {
    news: {
        title: string
        imgUrl: string
        imgalt: string
        type: string
        date: string
        timeToRead: string
    }
}

export default function ArticlesCard({ news }: ArticleCardProps) {
    return (
        <div className="overflow-hidden">
            {/* Thumbnail image */}
            <Image
                src={news.imgUrl}
                alt={news.imgalt}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
            />

            {/* Content section */}
            <div className="pt-3 space-y-3">
                {/* Title (links to news post) */}
                <Link
                    href={`/news/${encodeURIComponent(news.title)}`}
                    className="hover:opacity-80 transition block"
                >
                    <h3 className="text-base lg:text-lg font-black text-brand">
                        {news.title}
                    </h3>
                </Link>

                {/* Meta info: category, date, read time */}
                <div className="flex items-center justify-start text-xs gap-2 font-semibold text-white flex-wrap">
                    <Link
                        href={`/news/categories/${encodeURIComponent(news.type)}`}
                        className="hover:opacity-80 transition block"
                    >
                        <span className="text-brand">{news.type}</span>
                    </Link>
                    <span>| {news.date}</span>
                    <span>| {news.timeToRead}</span>
                </div>
            </div>
        </div>
    )
}
