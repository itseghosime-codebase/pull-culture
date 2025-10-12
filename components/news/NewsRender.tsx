'use client'
import { NewsMockData } from '@/context/Content'
import Image from 'next/image'
import React from 'react'
import { useSidebar } from '../ui/sidebar'
import SectionHeader from '../sharedUi/SectionHeader'

export default function NewsRender() {
    const featured = NewsMockData.find(item => item.featured)
    const others = NewsMockData.filter(item => !item.featured)
    const { open: sidebarOpen } = useSidebar()

    return (
        <section className="w-full pt-6 space-y-10">
            {/* Featured Article */}
            {featured && (
                <div className={`grid ${sidebarOpen ? '' : 'md:grid-cols-3'} xl:grid-cols-3 gap-8 items-start max-w-[1700px]`}>
                    <Image
                        src={featured.imgUrl}
                        alt={featured.imgalt}
                        width={800}
                        height={500}
                        className={`w-full h-full ${sidebarOpen ? '' : 'md:col-span-2'} xl:col-span-2 object-cover`}
                    />
                    <div className=" text-brand space-y-4">
                        <h2 className="text-4xl lg:text-[40px] 2xl:text-6xl font-black">{featured.title}</h2>
                        <div className="flex items-center justify-start text-xs gap-2 font-semibold text-white flex-wrap">
                            <span className='text-brand'>{featured.type}</span>
                            <span>| {featured.date}</span>
                            <span>| {featured.timeToRead}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Other Articles */}
            <div className="space-y-3">
                <SectionHeader headerTitle='Recent News' />
                <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">
                    {others.map((news, i) => (
                        <div
                            key={i}
                            className="overflow-hidden "
                        >
                            <Image
                                src={news.imgUrl}
                                alt={news.imgalt}
                                width={400}
                                height={250}
                                className="w-full h-56 object-cover"
                            />
                            <div className="pt-3 space-y-3">
                                <h3 className="text-base lg:text-lg font-black text-brand">
                                    {news.title}
                                </h3>
                                <div className="flex items-center justify-start text-xs gap-2 font-semibold text-white flex-wrap">
                                    <span className='text-brand'>{news.type}</span>
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
