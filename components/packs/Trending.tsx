'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PackCard from '../sharedUi/Cards/PackCard'
import SectionHeader from '../sharedUi/SectionHeader'
import { Packs } from '@/context/Content'

export default function Trending() {
    // Filter trending packs (title includes 'Silver')
    const trendingPacks = Packs.filter(
        (pack) => pack.title?.toLowerCase().includes('silver')
    )

    return (
        <section className='px-4 space-y-4'>
            {/* Section Header */}
            <SectionHeader headerTitle='Trending Packs' />

            {/* Swiper Carousel */}
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {trendingPacks.map((pack, index) => (
                    <SwiperSlide
                        className='rounded-xl overflow-hidden !w-fit'
                        key={index}
                    >
                        <PackCard {...pack} />
                    </SwiperSlide>
                ))}

                {/* Optional: fallback if no trending packs found */}
                {trendingPacks.length === 0 && (
                    <p className="text-center text-muted-foreground text-sm font-medium py-6">
                        No trending packs available right now.
                    </p>
                )}
            </Swiper>
        </section>
    )
}
