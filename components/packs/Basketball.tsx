'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PackCard from '../sharedUi/Cards/PackCard'
import SectionHeader from '../sharedUi/SectionHeader'
import { Packs } from '@/context/Content'

export default function Basketball() {
    // Filter only Basketball packs
    const basketballPacks = Packs.filter((pack) =>
        pack.type?.toLowerCase() === 'basketball'
    )

    return (
        <section className='px-4 space-y-4'>
            {/* Section Title */}
            <SectionHeader headerTitle='Basketball Packs' />

            {/* Swiper Carousel */}
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {basketballPacks.map((pack, index) => (
                    <SwiperSlide className='rounded-xl overflow-hidden !w-fit' key={index}>
                        <PackCard {...pack} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
