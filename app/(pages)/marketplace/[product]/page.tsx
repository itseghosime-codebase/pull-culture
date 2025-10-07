'use client'

import Activity from '@/components/marketplace/Activity'
import Comp from '@/components/marketplace/Comp'
import MarketOverview from '@/components/marketplace/MarketOverview'
import SimilarAuctions from '@/components/marketplace/SimilarAuctions'
import { MarketingTabs } from '@/components/sharedUi/MarketingTab'
import React from 'react'

export default function page() {
  return (
    <div className='px-4 md:px-6 lg:px-8 space-y-5'>
      <MarketOverview />
      <MarketingTabs
        tabs={[
          {
            title: 'Comps',
            renderItem: Comp
          },
          {
            title: 'Activity',
            renderItem: Activity
          }
        ]}
      />      <SimilarAuctions />
    </div>
  )
}
