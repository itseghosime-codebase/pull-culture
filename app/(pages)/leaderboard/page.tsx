import LeaderboardList from '@/components/leaderboard/LeaderboardList'
import LeaderboardTabs from '@/components/leaderboard/LeaderboardTabs'
import Summary from '@/components/leaderboard/Summary'
import { leaderboardDemoData } from '@/context/Content'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Leaderboard - Pull Culture",
  description: "description",
};

export default function LeaderboardPage() {
    return (
        <div className='px-4 md:px-8 pt-12 space-y-5'>
            <LeaderboardTabs />
            <Summary />
            <div className='bg-card py-6 space-y-1 px-6 md:px-10 text-center text-white font-semibold rounded-lg'>
                <h5 className='text-base md:text-lg lg:text-xl'>Pull Packs, Rank Up, and Win Prizes</h5>
                <p className='text-xs md:text-sm lg:text-base'>Every pull counts! Earn points all month, track your live progress, and rise up the ranks. Bigger packs mean bigger points. Points and prizes reset monthly. It’s time to compete for some monthly prizes!</p>
            </div>
            <div className='w-1/2 h-0.5 bg-brand mx-auto' />
            <LeaderboardList data={leaderboardDemoData} />
        </div>
    )
}
