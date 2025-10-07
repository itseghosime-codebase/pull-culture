"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface PackCardProps {
  imageSrc: string
  title: string
  price: number
}

export default function PackCard({ imageSrc, title, price }: PackCardProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000) // simulate API delay
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div
        className="w-fit rounded-2xl border border-white/10 bg-dark/40 p-4 space-y-3
        animate-pulse"
      >
        <Skeleton className="h-40 w-56 lg:w-60 xl:w-[280px] rounded-xl" />
        <Skeleton className="h-4 w-3/4 rounded-md" />
        <Skeleton className="h-6 w-1/2 rounded-md" />
      </div>
    )
  }

  return (
    <Link href={`/pack/product/${title}`}>
      <div
        className="group relative w-fit overflow-hidden rounded-2xl border border-white/10 bg-dark/40
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-brand/80 
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-t-2xl">
          <Image
            src={imageSrc}
            alt="Pack Card Image"
            width={280}
            height={280}
            className="object-cover object-center rounded-t-2xl transform
            transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            group-hover:scale-110 h-auto w-56 lg:w-60 xl:w-[280px]"
          />
        </div>

        {/* Glow Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 
          bg-gradient-to-t from-brand/20 via-transparent to-transparent
          transition-opacity duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none"
        />

        {/* Content */}
        <div className="p-4 space-y-1 text-white transition-colors duration-500 ease-in-out">
          <h5 className="text-sm font-bold tracking-wide group-hover:text-brand transition-colors duration-500 ease-in-out">
            {title}
          </h5>
          <h4 className="font-black text-xl text-brand">${price.toFixed(2)}</h4>
        </div>
      </div>
    </Link>
  )
}
