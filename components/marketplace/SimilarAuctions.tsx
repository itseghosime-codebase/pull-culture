'use client'
import { AuctionsDb } from '@/context/Content'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import AuctionsCard from '../sharedUi/Cards/AuctionsCard'

export default function SimilarAuctions() {
    return (
        <section className='space-y-4 pt-4 pb-20 border-t-2 border-white'>
            <h3 className='text-lg md:text-xl lg:text-2xl font-bold capitalize text-brand'>Similar Auctions</h3>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {
                    AuctionsDb.slice(0, 10).map((auctions, index) => (
                        <SwiperSlide className='bg-card rounded-xl overflow-hidden !w-auto' key={index}>
                            <AuctionsCard {...auctions} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    )
}

