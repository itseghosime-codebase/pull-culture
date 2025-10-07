import Baseball from '@/components/packs/Baseball'
import Basketball from '@/components/packs/Basketball'
import Football from '@/components/packs/Football'
import MultiSport from '@/components/packs/Multisport'
import Pokemon from '@/components/packs/Pokemon'
import Trending from '@/components/packs/Trending'
import SharedTabs from '@/components/sharedUi/SharedTabs'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Pack - Pull Culture",
  description: "description",
};


export default function PacksPage() {
    return (
        <div className='pb-5 space-y-5'>
            <SharedTabs />
            <Trending />
            <Football />
            <Basketball />
            <Baseball />
            <Pokemon />
            <MultiSport />
        </div>
    )
}
