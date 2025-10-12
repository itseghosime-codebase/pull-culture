"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface PullCardProps {
  imageSrc: string
  title: string
  createdAt: string
  packName: string
  hitChance: number
  timeStamp: string
  owner?: string
  provablyFair?: boolean
}

export default function PullsCard({
  imageSrc,
  title,
  createdAt,
  packName,
  hitChance,
  timeStamp,
  owner,
  provablyFair
}: PullCardProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="h-auto w-full space-y-3">
        <div className="flex items-center justify-center pt-6">
          <Skeleton className="h-48 w-36 md:w-44 lg:w-48 rounded-lg" />
        </div>
        <div className="p-4 space-y-2">
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <Skeleton className="h-3 w-1/2 rounded-md" />
          <Skeleton className="h-0.5 w-full bg-brand/20 rounded-full" />
          <Skeleton className="h-3 w-1/2 rounded-md" />
          <Skeleton className="h-3 w-2/3 rounded-md" />
          <Skeleton className="h-3 w-1/3 rounded-md" />
        </div>
      </div>
    )
  }

  return (
    <div className="h-auto w-full">
      <div className="flex items-center justify-center pt-6">
        <Image
          src={imageSrc}
          alt="Pack Card Image"
          width={150}
          height={250}
          className="object-contain object-center"
        />
      </div>
      <div className="p-4 text-white font-medium">
        <h5 className="text-sm font-bold">{title}</h5>
        <h6 className="text-sm">{createdAt}</h6>
        <div className="mt-2">
          {
            provablyFair && (
              <div className="border-t-2 border-brand text-xs py-1">
                <p>Pulled By: <strong className="text-brand">@{owner}</strong></p>
              </div>
            )
          }
        </div>

        <div className="h-0.5 bg-brand mb-2 rounded-full" />
        <div className="text-xs space-y-1">
          <h5>{packName}</h5>
          <p className="text-brand">{hitChance}% Hit Chance</p>
          <p>{timeStamp}</p>
        </div>
      </div>
    </div>
  )
}
