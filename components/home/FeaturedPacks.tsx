'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../sharedUi/SectionHeader'
import AuctionsCard from '../sharedUi/Cards/AuctionsCard'
import { AuctionsDb } from '@/context/Content'

export default function FeaturedPacks() {
    return (
        <section className='px-4 space-y-4 pt-4'>
            <SectionHeader headerTitle='Featured Auctions' SeeAllLink='/featured_auctions' />
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {
                    AuctionsDb.slice(0, 10).map((auctions, index) => (
                        <SwiperSlide className='bg-card rounded-xl overflow-hidden !w-full max-w-[280px]' key={index}>
                            <AuctionsCard {...auctions} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    )
}
