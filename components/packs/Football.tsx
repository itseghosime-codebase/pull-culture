'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import PackCard from '../sharedUi/Cards/PackCard';
import SectionHeader from '../sharedUi/SectionHeader';
import { Packs } from '@/context/Content';

export default function Football() {
    return (
        <section className='px-4 space-y-4'>
            <SectionHeader headerTitle='Football Packs' />
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {Packs.slice(0, 10).map((pulls, index) => (
                    <SwiperSlide className='rounded-xl overflow-hidden !w-fit' key={index}>
                        <PackCard {...pulls} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
