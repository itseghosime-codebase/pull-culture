"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import Newsletter from "./sharedUi/Newsletter"
import { BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs"
import FeedbackDialog from "./feedback/FeedbackDialog"


export default function Footer() {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Packs", href: "/pack" },
    { label: "News", href: "/news" },
    { label: "FAQ", href: "/how-it-works#faq" },
    { label: "Support", href: "#" },
    { label: "Feedback", href: "" }, // placeholder, replaced below
    { label: "Shipping", href: "/shipping" },
    { label: "Provably Fair", href: "#" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "Privacy", href: "/privacy-policy" },
  ]

  return (
    <footer className="border-t-2 border-white bg-dark">
      {/* Top Section */}
      <div className="pt-8 pb-10 max-w-5xl mx-auto px-4 flex flex-col lg:flex-row flex-wrap items-center justify-between gap-8 text-center md:text-left">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 grow">
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
        <div className="flex flex-col gap-3 items-center grow">
          <h3 className="text-brand text-xl sm:text-2xl font-bold">
            Follow Our Socials
          </h3>
          <div className="flex items-center gap-6 text-white text-2xl">
            <SocialLink icon={<BsInstagram />} />
            <SocialLink icon={<BsTwitterX />} />
            <SocialLink icon={<BsTiktok />} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-brand max-w-6xl mx-auto" />

      {/* Bottom Section */}
      <div className="py-6 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          {footerLinks.map((link, index) =>
            link.label === "Feedback" ? (
              <FeedbackDialog key={index} />
            ) : (
              <FooterLink key={index} {...link} />
            )
          )}
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm font-bold text-gray-300 text-center md:text-right">
          Copyright © {new Date().getFullYear()} HYP3. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

// ===================
// Helper Components
// ===================

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <Link href="#" className="hover:text-brand transition-colors">
      {icon}
    </Link>
  )
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href || "#"}
      className="text-sm text-white font-medium hover:text-brand transition-colors"
    >
      {label}
    </Link>
  )
}

