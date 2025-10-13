'use client'

import * as React from "react"
import { motion } from "framer-motion"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { useSidebar } from "../ui/sidebar"
import { useSearchParams, useRouter } from "next/navigation"

interface TabSectionProps {
    tabs: {
        title: string
        renderItem: () => React.ReactNode
    }[]
    defaultTab?: string
}

export function RecentsTab({ tabs, defaultTab }: TabSectionProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const urlTab = searchParams.get("tab")
    const initialTab = urlTab
        ? decodeURIComponent(urlTab)
        : defaultTab || tabs[0]?.title

    const [activeTab, setActiveTab] = React.useState(initialTab)
    const tabRefs = React.useRef<Record<string, HTMLButtonElement | null>>({})
    const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 })
    const { open: sidebarOpen } = useSidebar()

    // Update active tab if URL changes
    React.useEffect(() => {
        if (urlTab && decodeURIComponent(urlTab) !== activeTab) {
            setActiveTab(decodeURIComponent(urlTab))
        }
    }, [urlTab])

    // Update URL when tab changes
    const handleTabChange = (val: string) => {
        setActiveTab(val)
        const encoded = encodeURIComponent(val)
        const newUrl = `?tab=${encoded}`
        router.replace(newUrl) // or router.push(newUrl) if you want history
    }

    // Helper: Recalculate the underline position
    const updateIndicator = React.useCallback(() => {
        const el = tabRefs.current[activeTab || ""]
        if (el) {
            const { offsetLeft, offsetWidth } = el
            setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
        }
    }, [activeTab])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            requestAnimationFrame(updateIndicator)
        }, 150)
        return () => clearTimeout(timer)
    }, [activeTab, tabs, sidebarOpen, updateIndicator])

    React.useEffect(() => {
        window.addEventListener("resize", updateIndicator)
        return () => window.removeEventListener("resize", updateIndicator)
    }, [updateIndicator])

    return (
        <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full px-4 pb-8 space-y-5"
        >
            <div className="relative border-b-2 border-white/50">
                <TabsList className="flex justify-evenly items-center gap-2 h-auto rounded-none bg-transparent w-full px-0">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.title}
                            ref={(el) => { tabRefs.current[tab.title] = el }}
                            value={tab.title}
                            className={cn(
                                "relative px-4 py-3 text-sm md:text-base lg:text-xl font-black rounded-none text-white transition-all data-[state=active]:bg-transparent data-[state=active]:text-brand"
                            )}
                        >
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute z-10 -bottom-0.5 h-[2px] bg-brand rounded-full"
                    style={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                    }}
                />
            </div>

            {tabs.map((tab) => (
                <TabsContent key={tab.title} value={tab.title}>
                    {tab.renderItem()}
                </TabsContent>
            ))}
        </Tabs>
    )
}
