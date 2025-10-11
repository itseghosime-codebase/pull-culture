"use client";

import dynamic from "next/dynamic";
import * as React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export interface TabSection<T> {
  title: string;
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  searchFilter?: React.ReactNode;
}

interface TabSectionProps<T> {
  tabs: TabSection<T>[];
  defaultTab?: string;
}

function ProfileTabsInner<T>({ tabs, defaultTab }: TabSectionProps<T>) {
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get("tab"); // read from ?tab=TabName

  const [activeTab, setActiveTab] = React.useState(
    tabParam || defaultTab || tabs[0]?.title
  );

  const tabRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 });

  React.useEffect(() => {
    const el = tabRefs.current[activeTab || ""];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab, tabs]);

  // ✅ Only scroll when the URL actually includes a tab query param
  React.useEffect(() => {
    if (!tabParam) return

    const activeContent = document.querySelector(`[data-state="active"]`)
    if (activeContent) {
      activeContent.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [activeTab, tabParam])

  // update active tab if query param changes
  React.useEffect(() => {
    if (tabParam && tabParam !== activeTab) {
      setActiveTab(tabParam);
    }
  }, [tabParam, activeTab]);

  return (
    <Tabs
      value={activeTab}
      onValueChange={(val) => setActiveTab(val)}
      className="w-full px-4 pb-8 space-y-5"
    >
      {/* Tab Nav */}
      <div className="relative border-b-2 border-white/50 overflow-x-auto overflow-y-hidden scrollbar-hide">
        <TabsList className="flex min-w-max items-center gap-4 h-auto rounded-none bg-transparent px-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.title}
              ref={(el) => {
                tabRefs.current[tab.title] = el;
              }}
              value={tab.title}
              className={cn(
                "relative px-3 py-3 text-sm md:text-base font-bold rounded-none text-white whitespace-nowrap transition-all data-[state=active]:bg-transparent data-[state=active]:text-brand"
              )}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Indicator */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute z-10 -bottom-0.5 h-1 bg-brand rounded-full"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>

      {/* Tab Contents */}
      {tabs.map((tab) => (
        <TabsContent key={tab.title} value={tab.title}>
          {tab.searchFilter && <div className="mb-4">{tab.searchFilter}</div>}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
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
  );
}

// ✅ Preserve generic typing
export const ProfileTabs = dynamic(async () => ProfileTabsInner, { ssr: false }) as <
  T,
>(
  props: TabSectionProps<T>
) => React.JSX.Element;
