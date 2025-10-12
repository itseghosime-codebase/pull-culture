'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../sharedUi/SectionHeader'
import ArticlesCard from './ArticlesCard'
import 'swiper/css'
import { NewsMockData } from '@/context/Content'


interface SimilarArticlesProps {
    type: string
}

export default function SimilarArticles({ type }: SimilarArticlesProps) {
    // Filter news data by type
    const similarArticles = NewsMockData.filter(
        (article) => article.type.toLowerCase() === type.toLowerCase()
    )

    // Optional: handle empty result
    if (similarArticles.length === 0) {
        return null
    }

    return (
        <section className='space-y-4 pt-4'>
            <SectionHeader headerTitle="Similar News" />
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {similarArticles.map((article, index) => (
                    <SwiperSlide
                        className='overflow-hidden !max-w-[360px] !w-full'
                        key={index}
                    >
                        <ArticlesCard news={article} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
