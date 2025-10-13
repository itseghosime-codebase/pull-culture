'use client'

import React, { Suspense } from 'react'
import { RecentsTab } from '@/components/recents/Recents'
import PullsCard from '@/components/sharedUi/Cards/PullsCard'
import RecentCard from '@/components/sharedUi/Cards/RecentCard'
import { RecentPacks, Recents } from '@/context/Content'
 
export default function RecentsPage() {
    return (
        <Suspense fallback={<div className="text-center py-10 text-white">Loading...</div>}>
            <div>
                <RecentsTab
                    tabs={[
                        { title: 'RECENT PULLS', renderItem: RecentPulls },
                        { title: 'RECENT SALES', renderItem: RecentSales },
                    ]}
                    defaultTab="RECENT PULLS"
                />
            </div>
        </Suspense>
    )
}

// ✅ Component showing recent pulls
function RecentPulls() {
    return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
            {RecentPacks.length > 0 ? (
                RecentPacks.map((item, index) => (
                    <div key={index} className="bg-card rounded-xl overflow-hidden">
                        <PullsCard {...item} provablyFair />
                    </div>
                ))
            ) : (
                <p className="text-muted-foreground text-center col-span-full py-6">
                    No cards found...
                </p>
            )}
        </div>
    )
}

// ✅ Component showing recent sales
function RecentSales() {
    return (
        <div className="grid gap-4 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
            {Recents.length > 0 ? (
                Recents.map((item, index) => (
                    <div
                        key={index}
                        className="bg-card rounded-xl overflow-hidden transition-all duration-300"
                    >
                        <RecentCard {...item} provablyFair />
                    </div>
                ))
            ) : (
                <p className="text-muted-foreground text-center col-span-full py-6">
                    No cards found...
                </p>
            )}
        </div>
    )
}
