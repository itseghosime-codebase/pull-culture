'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PackCard from '../sharedUi/Cards/PackCard'
import SectionHeader from '../sharedUi/SectionHeader'
import { Packs } from '@/context/Content'

export default function MultiSport() {
    // Filter Multi-Sport packs only
    const multiSportPacks = Packs.filter(
        (pack) => pack.type?.toLowerCase() === 'multi-sport'
    )

    return (
        <section className='px-4 space-y-4'>
            {/* Section Header */}
            <SectionHeader headerTitle='Multi-Sport Packs' />

            {/* Swiper Carousel */}
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {multiSportPacks.map((pack, index) => (
                    <SwiperSlide
                        className='rounded-xl overflow-hidden !w-fit'
                        key={index}
                    >
                        <PackCard {...pack} />
                    </SwiperSlide>
                ))}

                {/* Optional: fallback if no packs found */}
                {multiSportPacks.length === 0 && (
                    <p className="text-center text-muted-foreground text-sm font-medium py-6">
                        No Multi-Sport packs available right now.
                    </p>
                )}
            </Swiper>
        </section>
    )
}
