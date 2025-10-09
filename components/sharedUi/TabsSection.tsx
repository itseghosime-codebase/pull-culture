"use client"

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

interface TabSectionProps<T> {
  tabs: {
    title: string
    data: T[]
    renderItem: (item: T, index: number) => React.ReactNode
  }[]
  defaultTab?: string
}

export function TabsSection<T>({
  tabs,
  defaultTab
}: TabSectionProps<T>) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.title)
  const tabRefs = React.useRef<Record<string, HTMLButtonElement | null>>({})
  const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 })
  const { open: sidebarOpen } = useSidebar()

  // Helper: Recalculate the underline position
  const updateIndicator = React.useCallback(() => {
    const el = tabRefs.current[activeTab || ""]
    if (el) {
      const { offsetLeft, offsetWidth } = el
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
    }
  }, [activeTab])

  // Recalculate when tab, sidebar, or layout changes
  React.useEffect(() => {
    // Wait until DOM layout settles after sidebar toggle
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
      defaultValue={defaultTab || tabs[0]?.title}
      onValueChange={(val) => setActiveTab(val)}
      className="w-full px-4 pb-8 space-y-5"
    >
      {/* Tab Headers */}
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

        {/* Animated Active Line */}
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

      {/* Tab Content */}
      {tabs.map((tab) => (
        <TabsContent key={tab.title} value={tab.title}>
          <div className={'grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]'}>
            {tab.data.length > 0 ? (
              tab.data.map((item, index) => tab.renderItem(item, index))
            ) : (
              <p className="text-muted-foreground text-center col-span-full py-6">
                No cards found...
              </p>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
