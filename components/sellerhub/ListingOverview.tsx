'use client'

import React, { useEffect, useState } from 'react'
import { useSidebar } from '../ui/sidebar'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import ListingType from './ListingType'

interface CardInfo {
  id: string
  name: string
  number: string
  collection: string
  grade: string
  imageFront: string
  imageBack: string
}

export default function ListingOverview() {
  const [card, setCard] = useState<CardInfo | null>(null)
  const { open: sidebarOpen } = useSidebar()
  const [loading, setLoading] = useState(true)
  const [viewSide, setViewSide] = useState<'front' | 'back'>('front') // 👈 state for image side

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        setLoading(true)
        const mockData: CardInfo = {
          id: '1',
          name: 'LeBron James',
          number: '#78',
          collection: '2003 UD Exquisite Collection Rookie Patch Auto /23',
          grade: '8.5',
          imageFront: '/assets/cards/Pack-03.png',
          imageBack: '/assets/cards/Pack-02.png',
        }

        setTimeout(() => {
          setCard(mockData)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error('Failed to fetch card data', error)
        setLoading(false)
      }
    }

    fetchCardData()
  }, [])

  if (loading) return <SkeletonCard />

  if (!card) {
    return <div className="text-center text-red-500">Failed to load card data.</div>
  }

  const currentImage = viewSide === 'front' ? card.imageFront : card.imageBack

  return (
    <div className="border-b-2 border-brand pb-12 text-white">
      <h3 className="font-bold text-2xl lg:text-3xl mb-7">List On Marketplace</h3>

      <div
        className={cn(
          'grid gap-8 transition-all duration-300 w-full',
          sidebarOpen ? 'grid-cols-1 xl:grid-cols-5' : 'md:grid-cols-5 items-center'
        )}
      >
        {/* Left: Card Image */}
        <div
          className={`${!sidebarOpen && 'md:col-span-2'} xl:col-span-2 flex flex-col items-center gap-5`}
        >
          <div className="bg-card rounded-lg border-2 border-brand py-12 px-12 flex items-center justify-center w-full max-w-md">
            <Image
              src={currentImage}
              alt={card.name}
              width={295.7}
              height={496.97}
              priority
              className="h-auto w-full max-w-xs rounded-xl object-contain"
            />
          </div>

          {/* Front/Back Toggle Buttons */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={() => setViewSide('front')}
              className={cn(
                '!text-base px-5 !h-14 font-bold border-2',
                viewSide === 'front'
                  ? 'bg-brand text-dark border-brand hover:bg-brand/80'
                  : 'bg-transparent border-brand text-white hover:border-brand/80 hover:text-brand/80'
              )}
            >
              View Front
            </Button>

            <Button
              onClick={() => setViewSide('back')}
              className={cn(
                '!text-base px-5 !h-14 font-bold border-2',
                viewSide === 'back'
                  ? 'bg-brand text-dark border-brand hover:bg-brand/80'
                  : 'bg-transparent border-brand text-white hover:border-brand/80 hover:text-brand/80'
              )}
            >
              View Back
            </Button>
          </div>
        </div>

        {/* Right: Card Info */}
        <div
          className={`${!sidebarOpen && 'md:col-span-3'} xl:col-span-3 font-bold space-y-5`}
        >
          <div className="max-w-md space-y-2 border-b-2 border-brand pb-5 w-fit">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              {card.name}{' '}
              <span className="text-brand ml-4 font-semibold">{card.number}</span>
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl">
              {card.collection}
              <span className="block text-brand">PSA {card.grade} Auto 10</span>
            </h3>
          </div>

          <ListingType />
        </div>
      </div>
    </div>
  )
}

/* ================================
   Skeleton Loader
================================ */
function SkeletonCard() {
  return (
    <div className="border-b-2 border-brand pb-12 text-white animate-pulse">
      <h3 className="font-bold text-2xl lg:text-3xl mb-7">
        <Skeleton className="h-8 w-64 rounded-md" />
      </h3>

      <div className="grid md:grid-cols-5 items-center gap-8">
        {/* Skeleton Image Section */}
        <div className="col-span-2 flex flex-col items-center gap-5">
          <div className="bg-card rounded-lg border-2 border-brand py-12 px-12 flex items-center justify-center max-w-md w-full">
            <Skeleton className="w-72 h-[400px] rounded-xl" />
          </div>

          <div className="flex gap-3">
            <Skeleton className="w-28 h-12 rounded-lg" />
            <Skeleton className="w-28 h-12 rounded-lg" />
          </div>
        </div>

        {/* Skeleton Text Section */}
        <div className="col-span-3 space-y-5">
          <Skeleton className="h-10 w-2/3 rounded-md" />
          <Skeleton className="h-6 w-1/2 rounded-md" />
          <Skeleton className="h-12 w-1/3 rounded-md" />
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
