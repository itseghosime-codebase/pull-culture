import Link from 'next/link'
import React from 'react'

interface SectionHeaderProps {
    headerTitle: string;
    SeeAllLink?: string;
}

export default function SectionHeader({ headerTitle, SeeAllLink }: SectionHeaderProps) {
    return (
        <div className='flex items-center gap-6 text-white'>
            <h3 className='text-base md:text-lg lg:text-xl font-bold capitalize'>{headerTitle}</h3>
            <div className='grow h-0.5 bg-brand' />
            {
                SeeAllLink && (
                    <Link href={SeeAllLink} className='text-sm font-bold inline-block border-2 border-brand py-1 px-2.5 hover:text-brand' >See All</Link>
                )
            }
        </div>
    )
}
