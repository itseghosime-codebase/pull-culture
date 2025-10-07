'use client'
import UserDetails from '@/components/profile/UserDetails'
import ProfileCard from '@/components/sharedUi/Cards/ProfileCard'
import { ProfileTabs } from '@/components/sharedUi/ProfileTabs'
import { AuctionsDb } from '@/context/Content'
import React from 'react'

export default function ProfilePage() {
  return (
    <div>
      <UserDetails />
      <ProfileTabs
        tabs={[
          {
            title: "Collection",
            data: AuctionsDb,
            renderItem: (item, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden">
                <ProfileCard {...item} />
              </div>
            ),
          },
          {
            title: "Favorites",
            data: AuctionsDb,
            renderItem: (item, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden">
                <ProfileCard {...item} />
              </div>
            ),
          },
          {
            title: "Offers Received",
            data: AuctionsDb,
            renderItem: (item, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden">
                <ProfileCard {...item} />
              </div>
            ),
          },
           {
            title: "Offers Sent",
            data: AuctionsDb,
            renderItem: (item, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden">
                <ProfileCard {...item} />
              </div>
            ),
          }, {
            title: "Redeemed",
            data: AuctionsDb,
            renderItem: (item, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden">
                <ProfileCard {...item} />
              </div>
            ),
          },
           {
            title: "Recent Activity",
            data: AuctionsDb,
            renderItem: (item, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden">
                <ProfileCard {...item} />
              </div>
            ),
          },
        ]}
        defaultTab="Collection"
      />
    </div>
  )
}
