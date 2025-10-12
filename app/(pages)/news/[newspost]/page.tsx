import React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { NewsMockData } from "@/context/Content"
import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa"
import SectionHeader from "@/components/sharedUi/SectionHeader"
import SimilarArticles from "@/components/news/SimilarArticle"


export default function NewsPostPage({ params }: { params: { newspost: string } }) {
    const decodedTitle = decodeURIComponent(params.newspost)
    const post = NewsMockData.find(news => news.title === decodedTitle)

    if (!post) return notFound()

    return (
        <section className="pb-10 px-4 md:px-10">
            <article className="pb-5 pt-4 space-y-8">
                {/* Back Link */}
                <Link
                    href="/news"
                    className="text-brand font-semibold hover:opacity-80 transition flex items-center gap-1 w-full"
                >
                    <FaChevronLeft />
                    <SectionHeader headerTitle="Back to News" />
                </Link>

                {/* Page Title */}
                <div className="text-center lg:px-10 space-y-3">
                    <h3 className="font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand">
                        {post.title || decodedTitle}
                    </h3>
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">{post.description}</p>
                    <div className="flex items-center justify-center text-sm gap-2 font-semibold text-white flex-wrap">
                        <Link href={`/news/categories/${encodeURIComponent(post.type)}`} className="hover:opacity-80 transition block"><span className="text-brand">{post.type}</span></Link>
                        <span>| {post.date}</span>
                        <span>| {post.timeToRead}</span>
                    </div>
                </div>
                <div className="h-0.5 w-full bg-brand" />
                <header className="space-y-2">
                    <div className="h-[400px] w-full">
                        <Image
                            src={post.imgUrl}
                            alt={post.imgalt}
                            width={1150}
                            height={416}
                            className="h-full w-full object-cover object-top"
                        />
                    </div>
                    <p className="text-xs font-semibold">{post.imgalt}</p>
                </header>

                <section className="space-y-3 max-w-6xl">
                    {post.body.paragraphs.map((p, i) => (
                        <p key={i} className="font-semibold text-sm">{p}</p>
                    ))}
                </section>

                {post.body.lists?.length > 0 && (
                    <section className="grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-7">
                        {post.body.lists.map((list, i) => (
                            <div key={i} className="grid xl:grid-cols-2 gap-3">
                                {list.imgUrl && (
                                    <div>
                                        <Image
                                            src={list.imgUrl}
                                            alt={list.title}
                                            width={800}
                                            height={500}
                                            className="rounded-lg w-full h-full object-contain object-center"
                                        />
                                    </div>
                                )}
                                <div>
                                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-brand mb-2">{list.title}</h2>
                                    <p className="text-xs font-semibold">{list.description}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                )}
            </article>
            <SimilarArticles type={post.type} />
        </section>
    )
}
