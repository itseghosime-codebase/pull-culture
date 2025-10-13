import Link from 'next/link'
import React from 'react'

interface SectionHeaderProps {
    headerTitle: string;
    SeeAllLink?: string;
    queryParams?: string;
}

export default function SectionHeader({ headerTitle, SeeAllLink, queryParams }: SectionHeaderProps) {
    return (
        <div className='flex items-center gap-6 text-white grow'>
            <h3 className='text-base md:text-lg lg:text-xl font-bold capitalize'>{headerTitle}</h3>
            <div className='grow h-0.5 bg-brand' />
            {
                SeeAllLink && !queryParams && (
                    <Link href={SeeAllLink} className='text-sm font-bold inline-block border-2 border-brand py-1 px-2.5 hover:text-brand' >See All</Link>
                )
            }
            {
                SeeAllLink && queryParams && (
                    <Link href={{
                        pathname: SeeAllLink,
                        query: { tab: queryParams }
                    }} className='text-sm font-bold inline-block border-2 border-brand py-1 px-2.5 hover:text-brand' >See All</Link>
                )
            }
        </div>
    )
}
