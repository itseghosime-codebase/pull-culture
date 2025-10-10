"use client"

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface MyFixedPriceCardProps {
    imageSrc: string
    title: string
    createdAt: string
    packId: number
    price: number
    bids: number
    closeTime: string
}

export default function MyFixedPriceCard({
    imageSrc,
    title,
    createdAt,
    packId,
    price,
    bids,
    closeTime
}: MyFixedPriceCardProps) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800) // Simulate API delay
        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className={'w-full'}>
                <div className="flex flex-col gap-3 p-4">
                    <Skeleton className="h-40 w-full rounded-lg" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                    <div className="h-0.5 bg-brand/40 my-2" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-10 w-full rounded-lg mt-2" />
                </div>
            </div>
        )
    }

    return (
        <div className={'w-full'}>
            <div className='flex items-center justify-center pt-6'>
                <Image
                    src={imageSrc}
                    alt='Pack Card Image'
                    width={150}
                    height={250}
                    className='object-contain object-center'
                />
            </div>
            <div className='p-4 text-xs text-white font-medium'>
                <h5 className='font-bold'>{title}</h5>
                <h6>{createdAt}</h6>
                <h6>#{packId}</h6>
                <div className='h-0.5 bg-brand my-2' />
                <div className='text-xs'>
                    <p className='text-brand text-xl font-bold'>${price}</p>
                    <p>{bids} {bids > 1 ? 'bids' : 'bid'} - {closeTime}</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Button
                    asChild
                    variant={'link'}
                    size={'lg'}
                    className='grow hover:no-underline bg-brand rounded-lg h-auto py-4 text-sm text-dark font-medium hover:bg-brand/80'
                >
                    <Link href={`/`}>View Listing</Link>
                </Button>
                <Button
                    asChild
                    variant={'link'}
                    size={'lg'}
                    className='grow hover:no-underline bg-brand rounded-lg h-auto py-4 text-sm text-dark font-medium hover:bg-brand/80'
                >
                    <Link href={`/`}>Edit Listing</Link>
                </Button>
            </div>
        </div>
    )
}
