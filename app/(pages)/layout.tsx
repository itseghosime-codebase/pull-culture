"use client"

import { useState, useEffect } from "react"
import { SidebarInset, SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import Footer from "@/components/Footer"

export default function PageLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarWithInset>{children}</SidebarWithInset>
        </SidebarProvider>
    )
}

export function SidebarWithInset({ children }: { children: React.ReactNode }) {
    const { open } = useSidebar() // ← Hook to access sidebar open state
    const [isOpen, setIsOpen] = useState(open)

    // Sync internal state whenever sidebar open state changes
    useEffect(() => {
        setIsOpen(open)
    }, [open])

    return (
        <SidebarInset
            className={`
        flex flex-col h-screen text-white rounded-none !shadow-none transition-all duration-300
        overflow-hidden !m-0 pt-[50px] lg:pt-[55px]
        
      `}
        >
            <div className={`overflow-y-scroll bg-dark ${isOpen ? "!rounded-br-none md:!rounded-tl-4xl" : "!rounded-none "}`}>
                {/* Mobile Top Bar */}
                <div className="sticky top-0 z-[50] flex items-center justify-between bg-dark/80 backdrop-blur-md px-4 py-3 xl:hidden border-b border-gray-700">
                    <SidebarTrigger className="text-white" />
                </div>

                {/* Main Content */}
                <div className={`flex-1 w-full h-full overflow-y-auto pb-6`}>
                    {children}
                    {/* Footer */}
                    <Footer />
                </div>
            </div>


        </SidebarInset>
    )
}
