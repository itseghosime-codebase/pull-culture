'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PackCard from '../sharedUi/Cards/PackCard'
import SectionHeader from '../sharedUi/SectionHeader'
import { Packs } from '@/context/Content'

export default function Pokemon() {
    // Filter Pokémon packs only
    const pokemonPacks = Packs.filter(
        (pack) => pack.type?.toLowerCase() === 'pokemon'
    )

    return (
        <section className='px-4 space-y-4'>
            {/* Section Header */}
            <SectionHeader headerTitle='Pokémon Packs' />

            {/* Swiper Carousel */}
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                grabCursor={true}
                className="mySwiper"
            >
                {pokemonPacks.map((pack, index) => (
                    <SwiperSlide
                        className='rounded-xl overflow-hidden !w-fit'
                        key={index}
                    >
                        <PackCard {...pack} />
                    </SwiperSlide>
                ))}

                {/* Optional: Message if no Pokémon packs found */}
                {pokemonPacks.length === 0 && (
                    <p className="text-center text-muted-foreground text-sm font-medium py-6">
                        No Pokémon packs available right now.
                    </p>
                )}
            </Swiper>
        </section>
    )
}
