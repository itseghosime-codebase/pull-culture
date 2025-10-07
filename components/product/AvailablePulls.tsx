import React from 'react'
import { HitList } from './HitList'
import HitListCat from './HitListCat'
import { mergedList } from '@/context/Content'

export default function AvailablePulls() {
    return (
        <div className='px-4 py-6 space-y-6'>
            <div className='space-y-4'>
                <h4 className='font-black text-3xl md:text-4xl lg:text-5xl underline underline-offset-4 text-brand'>AVAILABLE PULLS</h4>
                <HitList />
            </div>
            <HitListCat
                cards={mergedList.slice(0, 1)}
                chance='0.1%'
                title='GRAIL'
            />
            <HitListCat
                cards={mergedList.slice(0, 5)}
                chance='0.5%'
                title='CHASERS'
            />
            <HitListCat
                cards={mergedList}
                chance='2%'
                title='SERIES'
            />
        </div>
    )
}
