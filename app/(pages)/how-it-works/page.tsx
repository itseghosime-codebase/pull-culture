import Faq from '@/components/how-it-works.tsx/Faq'
import { GiftIcon, OpenPack, PackPulledIcon, ShippingIcon } from '@/Icons/Index'
import Image from 'next/image'
import React from 'react'

export default function HowItWorksPage() {
  // =========================
  // SECTION DATA
  // =========================

  const introParagraphs = [
    `HYP3 transforms the way you collect! Experience the rush of opening packs filled with rare sports and trading cards — from Pokémon to NFL, NBA, and more. At HYP3, we’re serious about cutting the clutter. No bulk. No filler. Trade your unwanted pulls in our Marketplace for the cards you actually want — or sell them back instantly for cash and keep ripping.`,
    `Our provably fair drops, clear odds, and available hit tracker put you fully in control. No bulk, no guessing... Just pure HYP3 chase energy and real rewards. When you hit something big, we ship it straight to you.`,
    `Got cards you’d rather pass on? Trade them back for instant cash and keep the excitement going with more openings. Every rip brings you closer to your dream lineup.`,
    `Backed by a team of lifelong collectors and industry pros, HYP3 is built to deliver transparency, excitement, and the next evolution of the collectible experience.`,
  ]

  const howItWorksSteps = [
    {
      title: 'PICK A PACK',
      text: 'Pick a curated pack from our different tiers and different categories!',
      Icon: PackPulledIcon,
    },
    {
      title: 'OPEN PACK',
      text: 'Open your pack to see what card you have received!',
      Icon: OpenPack,
    },
    {
      title: 'SELL OR SHIP',
      text: 'Choose to instantly sell your card back to HYP3, sell on our market or get your cards shipped to you!',
      Icon: ShippingIcon,
    },
    {
      title: 'GET HYP3',
      text: 'Every card ships safely in a tracked, protective bubble mailer — handled with care from our vault to your door!',
      Icon: GiftIcon,
    },
  ]

  const getCardsParagraphs = [
    `HYP3 makes collecting clean and exciting — no piles of commons, no wasted packs. Don’t love your pulls? Sell them back instantly for cash and keep ripping for the ones you want.`,
    `Our Marketplace lets you flip your extras into the graded cards you’ve been chasing. Real hits. Real value.`,
  ]

  const shippingParagraphs = [
    `All orders are processed and shipped from our U.S.-based fulfillment center, where we also maintain an immense inventory of raw and graded trading cards and sports card.`,
    `Shipping typically takes 2–4 weeks from withdrawal, and we’re continuously optimizing our logistics to deliver faster and more efficiently.`,
    `Each order is handled with industry-leading care — every card is sleeved and packed securely in a bubble mailer. With hundreds of thousands of cards shipped to collectors worldwide, ensuring safe and timely delivery remains our top priority.`,
    `We currently ship to the U.S. and Canada.`,
  ]

  // =========================
  // RENDER
  // =========================
  return (
    <div className='px-4 md:px-10 xl:px-14 py-10 space-y-14'>

      {/* HEADER */}
      <div>
        <h2 className='text-center font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>WHAT IS</h2>
        <Image
          src={'/assets/logo/how-it-works.svg'}
          alt='HYP3?'
          draggable={false}
          width={667.09}
          height={148.31}
          className='mx-auto h-16 md:h-24 lg:h-32 xl:h-36 w-auto'
        />
      </div>

      {/* INTRO SECTION */}
      <div className='text-sm md:text-base lg:text-lg font-semibold space-y-5 pt-10'>
        {introParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Divider />

      {/* HOW IT WORKS */}
      <SectionTitle text='HOW DOES HYP3 WORK?' />
      <div className='text-sm md:text-base lg:text-lg font-semibold'>
        <p>
          HYP3 redefines collecting! Explore curated packs from premier TCGs and sports lines like Pokémon, NFL, NBA, and more. Each pack offers real value: cash out your hits for cash, sell them on our marketplace or redeem them for shipment directly to your doorstep.
        </p>
      </div>

      <div className='overflow-hidden grid grid-cols-2 lg:grid-cols-4 gap-3 items-start'>
        {howItWorksSteps.map(({ Icon, title, text }, i) => (
          <div key={i} className='flex flex-col items-center text-center space-y-1.5'>
            <Icon className='text-brand' />
            <h4 className='font-black text-lg md:text-xl lg:text-2xl xl:text-3xl'>{title}</h4>
            <p className='text-sm md:text-base font-semibold'>{text}</p>
          </div>
        ))}
      </div>

      <Divider />

      {/* GET CARDS */}
      <SectionTitle text='GET THE CARDS YOU WANT' />
      <div className='text-sm md:text-base lg:text-lg font-semibold space-y-5'>
        {getCardsParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Divider />

      {/* SHIPPING */}
      <SectionTitle text='SHIPPING' />
      <div className='text-sm md:text-base lg:text-lg font-semibold space-y-5'>
        {shippingParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Divider />

      {/* Faq */}
      <Faq />
    </div>
  )
}

// =========================
// SMALL HELPER COMPONENTS
// =========================

function Divider() {
  return <div className='w-[90%] h-0.5 bg-brand mx-auto' />
}

function SectionTitle({ text }: { text: string }) {
  return (
    <h3 className='text-center text-2xl md:text-4xl xl:text-6xl font-black'>
      {text}
    </h3>
  )
}
