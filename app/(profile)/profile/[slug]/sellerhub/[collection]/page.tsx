import Comp from '@/components/marketplace/Comp'
import ListingOverview from '@/components/sellerhub/ListingOverview'
import React from 'react'

export default function page() {
    return (
        <div className='py-10 px-4 md:px-10 space-y-6'>
            <div className='space-y-3'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline decoration-[3px] underline-offset-8 font-black text-brand'>SELLER HUB</h2>
                <ListingOverview />
            </div>
            <Comp />
        </div>
    )
}
