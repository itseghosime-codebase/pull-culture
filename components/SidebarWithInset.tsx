"use client"

import React, { useState, useEffect } from "react"
import { SidebarInset, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import Footer from "@/components/Footer"
import { useAnnouncementStore } from "@/lib/store/announcement-store"

interface SidebarWithInsetProps {
  children: React.ReactNode
}

export default function SidebarWithInset({ children }: SidebarWithInsetProps) {
  const { open } = useSidebar()
  const { isVisible } = useAnnouncementStore()
  const [isOpen, setIsOpen] = useState(open)

  // ✅ Sync sidebar open/close state
  useEffect(() => {
    setIsOpen(open)
  }, [open])

  return (
    <SidebarInset
      className={`
        flex flex-col h-screen text-white rounded-none !shadow-none transition-all duration-300
        overflow-hidden !m-0 md:pt-2.5
        ${isVisible ? '!pt-[50px] lg:!pt-[55px]' : ''}
      `}
    >
      <div
        data-scroll-container
        className={`
          overflow-y-auto scroll-smooth flex-1 bg-dark transition-all duration-300
          ${isOpen ? "!rounded-br-none md:!rounded-tl-4xl" : "!rounded-none"}
        `}
      >
        {/* ✅ Mobile Top Bar */}
        <div className="sticky top-0 z-[50] flex items-center justify-between bg-dark/80 backdrop-blur-md px-4 py-3 xl:hidden border-b border-gray-700">
          <SidebarTrigger className="text-white" />
        </div>

        {/* ✅ Main Content */}
        <div className="flex-1 w-full h-full pb-6">
          {children}
          <Footer />
        </div>
      </div>
    </SidebarInset>
  )
}
