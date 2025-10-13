'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PackCard from '../sharedUi/Cards/PackCard'
import SectionHeader from '../sharedUi/SectionHeader'
import { Packs } from '@/context/Content'

export default function Baseball() {
    // Filter only baseball packs
    const baseballPacks = Packs.filter((pack) =>
        pack.type?.toLowerCase() === 'baseball'
    )

    return (
        <section className='px-4 space-y-4'>
            {/* Section Title */}
            <SectionHeader headerTitle='Baseball Packs' />

            {/* Swiper Carousel */}
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {baseballPacks.map((pack, index) => (
                    <SwiperSlide className='rounded-xl overflow-hidden !w-fit' key={index}>
                        <PackCard {...pack} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
