'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import PackCard from '../sharedUi/Cards/PackCard';
import SectionHeader from '../sharedUi/SectionHeader';
import { Packs } from '@/context/Content';

export default function PullAPack() {
    return (
        <section className='px-4 space-y-4 pt-4'>
            <SectionHeader headerTitle='Pull a Pack' SeeAllLink='/pack' />
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {Packs.map((pulls, index) => (
                    <SwiperSlide className='bg-card rounded-xl overflow-hidden !w-fit' key={index}>
                        <PackCard {...pulls} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
