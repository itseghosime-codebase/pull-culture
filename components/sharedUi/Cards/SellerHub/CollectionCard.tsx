"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { useSessionStore } from '@/lib/store/useSessionStore'

interface CollectionCardProps {
    imageSrc: string
    title?: string
}

export default function CollectionCard({ imageSrc, title }: CollectionCardProps) {
    const [loading, setLoading] = useState(true)
    const { user } = useSessionStore()

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000) // simulate loading delay
        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className="w-full space-y-4">
                <div className="flex items-center justify-center py-6">
                    <Skeleton className="h-48 w-36 md:w-44 lg:w-48 rounded-lg" />
                </div>
                <Skeleton className="h-10 w-full rounded-lg" />
            </div>
        )
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-center py-6">
                <Image
                    src={imageSrc}
                    alt="Collection Card Image"
                    width={180}
                    height={300}
                    className="object-contain object-center"
                />
            </div>
            <Button
                size={'lg'}
                asChild
                variant={'link'}
                className="w-full hover:no-underline bg-brand rounded-lg h-auto py-3.5 text-xs md:text-sm px-2 text-dark font-medium hover:bg-brand/80"
            >
                <Link href={`/profile/${user?.username}/sellerhub/${title}`}>
                    List on Marketplace
                </Link>
            </Button>
        </div>
    )
}
