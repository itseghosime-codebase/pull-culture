import React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { NewsMockData } from "@/context/Content"
import { Section } from "lucide-react"
import SectionHeader from "@/components/sharedUi/SectionHeader"
import { FaChevronLeft } from "react-icons/fa"

// Import your mock data 

interface Props {
    params: {
        newscat: string
    }
}

export default function NewsCategoryPage({ params }: Props) {
    const { newscat } = params

    // Match the category ignoring case
    const filteredPosts = NewsMockData.filter(
        (post) => post.type.toLowerCase() === decodeURIComponent(newscat).toLowerCase()
    )

    // Handle unknown category
    if (filteredPosts.length === 0) {
        notFound()
    }

    return (
        <div className='pb-10 pt-4 px-4 md:px-10'>
            <Link href="/news" className="text-brand font-semibold hover:opacity-80 transition flex items-center gap-1 w-full">
                <FaChevronLeft />
                <SectionHeader headerTitle='Back to News' />
            </Link>
            <h3 className="font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand text-center my-8">
                {decodeURIComponent(newscat)} News
            </h3>
            <div className="h-0.5 w-full bg-brand mb-6" />
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
                            <Link href={`/news/${post.title}`} className="hover:opacity-80 transition block"><h3 className="text-base lg:text-lg font-black text-brand">{post.title}</h3></Link>
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
