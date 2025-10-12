'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../sharedUi/SectionHeader'
import PullsCard from '../sharedUi/Cards/PullsCard'
import { RecentPacks } from '@/context/Content'

export default function RecentPulls() {
    return (
        <section className='px-4 space-y-4 pt-4 w-full overflow-hidden'>
            <SectionHeader headerTitle='Recent Pulls' SeeAllLink='/recent_pulls' />
            <div className='w-full overflow-hidden'>

                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    grabCursor={true}
                    className="mySwiper"
                >
                    {RecentPacks.map((recents, index) => (
                        <SwiperSlide className='bg-card rounded-xl overflow-hidden !w-full max-w-[270px]' key={index}>
                            <PullsCard {...recents} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    )
}
