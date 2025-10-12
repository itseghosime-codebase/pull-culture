"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useSearchParams, useRouter } from "next/navigation"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface TabSectionProps {
    tabs: {
        title: string
        renderItem: () => React.ReactNode
    }[]
    defaultTab?: string
}

export function SettingsTabs({ tabs, defaultTab }: TabSectionProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const urlTab = searchParams.get("tab")
    const [activeTab, setActiveTab] = React.useState(urlTab || defaultTab || tabs[0]?.title)
    const tabRefs = React.useRef<Record<string, HTMLButtonElement | null>>({})
    const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 })

    // ✅ Sync URL param -> tab
    React.useEffect(() => {
        if (urlTab && urlTab !== activeTab) {
            setActiveTab(urlTab)
        }
    }, [urlTab, activeTab])

    // ✅ Only scroll when the URL actually includes a tab query param
    React.useEffect(() => {
        if (!urlTab) return

        const activeContent = document.querySelector(`[data-state="active"]`)
        if (activeContent) {
            activeContent.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [activeTab, urlTab])


    // ✅ Update underline animation
    React.useEffect(() => {
        const updateIndicator = () => {
            const el = tabRefs.current[activeTab || ""]
            if (el) {
                const { offsetLeft, offsetWidth } = el
                setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
            }
        }

        updateIndicator()
        window.addEventListener("resize", updateIndicator)
        return () => window.removeEventListener("resize", updateIndicator)
    }, [activeTab, tabs])

    // ✅ Update URL when switching tabs manually
    const handleTabChange = (val: string) => {
        setActiveTab(val)
        const params = new URLSearchParams(window.location.search)
        params.set("tab", val)
        router.replace(`?${params.toString()}`, { scroll: false })
    }

    return (
        <Tabs
            defaultValue={activeTab}
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full pb-6 space-y-5"
        >
            <div className="relative border-b border-white/30 overflow-x-auto overflow-y-hidden scrollbar-none">
                <TabsList className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 h-auto rounded-none bg-transparent px-2 sm:px-0 min-w-max">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.title}
                            ref={(el) => { tabRefs.current[tab.title] = el }}
                            value={tab.title}
                            className={cn(
                                "relative px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-bold whitespace-nowrap",
                                "rounded-none text-white transition-all data-[state=active]:bg-transparent data-[state=active]:text-brand"
                            )}
                        >
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute z-10 -bottom-[2px] h-1 bg-brand rounded-full"
                    style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                />
            </div>

            <div className="px-2 sm:px-4 md:px-0">
                {tabs.map((tab) => (
                    <TabsContent key={tab.title} value={tab.title}>
                        {tab.renderItem()}
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    )
}
