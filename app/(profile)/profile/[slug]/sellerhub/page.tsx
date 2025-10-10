'use client'
import CollectionCard from '@/components/sharedUi/Cards/SellerHub/CollectionCard'
import MyAuctionsCard from '@/components/sharedUi/Cards/SellerHub/MyAuctionsCard'
import MyFixedPriceCard from '@/components/sharedUi/Cards/SellerHub/MyFixedPriceCards'
import { ProfileTabs } from '@/components/sharedUi/ProfileTabs'
import SearchFilterBar from '@/components/sharedUi/SearchFilterBar'
import { AuctionsDb } from '@/context/Content'
import React from 'react'

export default function SellerPage() {

    const categories = ["Football", "Basketball", "Baseball", "Pokémon"]

    const handleFilterChange = ({
        search,
        category,
        sort,
    }: {
        search: string
        category: string[]
        sort: string
    }) => {
        console.log({ search, category, sort })
        // Call your filtering logic or API here
    }

    return (
        <div className='py-10 px-4 space-y-6'>
            <div className="px-4">
                <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline decoration-[3px] underline-offset-8 font-black text-brand'>SELLER HUB</h2>
            </div>
            <ProfileTabs
                tabs={[{
                    title: 'Collection',
                    data: AuctionsDb,
                    renderItem: (item, index) => (
                        <div key={index} className="bg-card rounded-xl overflow-hidden">
                            <CollectionCard {...item} />
                        </div>
                    ),
                }, {
                    title: 'My Auctions',
                    data: AuctionsDb,
                    renderItem: (item, index) => (
                        <div key={index} className="bg-card rounded-xl overflow-hidden">
                            <MyAuctionsCard {...item} />
                        </div>
                    ),
                    searchFilter: <SearchFilterBar categories={categories} onChange={handleFilterChange} />
                }, {
                    title: 'My Fixed Price',
                    data: AuctionsDb,
                    renderItem: (item, index) => (
                        <div key={index} className="bg-card rounded-xl overflow-hidden">
                            <MyFixedPriceCard {...item} />
                        </div>
                    ),
                    searchFilter: <SearchFilterBar categories={categories} onChange={handleFilterChange} />
                }]}
            />
        </div>
    )
}
