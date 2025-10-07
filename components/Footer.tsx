import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Newsletter from './sharedUi/Newsletter'
import { BsInstagram, BsTiktok, BsTwitterX } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="border-t-2 border-white bg-dark">
      {/* Top Section */}
      <div className="pt-8 pb-10 max-w-5xl mx-auto px-4 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 text-center md:text-left">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/logo/pull_culture.svg"
            alt="Logo"
            width={210}
            height={50}
            priority
            className="mx-auto md:mx-0"
          />
        </Link>

        {/* Newsletter */}
          <Newsletter />

        {/* Socials */}
        <div className="flex flex-col gap-3 items-center md:items-end">
          <h3 className="text-brand text-xl sm:text-2xl font-bold">
            Follow Our Socials
          </h3>
          <div className="flex items-center gap-6 text-white text-2xl">
            <Link href="#" className="hover:text-brand transition-colors">
              <BsInstagram />
            </Link>
            <Link href="#" className="hover:text-brand transition-colors">
              <BsTwitterX />
            </Link>
            <Link href="#" className="hover:text-brand transition-colors">
              <BsTiktok />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-brand max-w-6xl mx-auto" />

      {/* Bottom Section */}
      <div className="py-6 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          {FooterLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="text-sm text-white font-medium hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm font-bold text-gray-300 text-center md:text-right">
          © 2025 Pull Culture. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

const FooterLinks = [
  { label: 'Home', href: '' },
  { label: 'About', href: '' },
  { label: 'News', href: '' },
  { label: 'Contact', href: '' },
  { label: 'Feedback', href: '' },
  { label: 'FAQ', href: '' },
  { label: 'Provably Fair', href: '' },
  { label: 'Terms', href: '' },
  { label: 'Privacy', href: '' },
]
