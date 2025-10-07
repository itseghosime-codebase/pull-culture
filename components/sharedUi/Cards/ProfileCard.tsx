"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface ProfileCardProps {
  imageSrc: string
}

export default function ProfileCard({ imageSrc }: ProfileCardProps) {
  const [loading, setLoading] = useState(true)

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
          alt="Profile Card Image"
          width={180}
          height={300}
          className="object-contain object-center"
        />
      </div>
      <Button
        size={'lg'}
        className="w-full bg-brand rounded-lg h-auto py-3.5 text-xs md:text-sm px-3 text-dark font-medium hover:bg-brand/80"
      >
        Redeem From Vault
      </Button>
    </div>
  )
}
