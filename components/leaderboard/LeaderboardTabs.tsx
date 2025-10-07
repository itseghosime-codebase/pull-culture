import * as React from "react"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import LeaderboardDisplay from "./LeaderboardDisplay"

const leaderboardData = {
    thisMonth: [
        { name: "Steezy", points: 25125, prize: "2017-18 Panini Prizm Patrick Mahomes Blue /49 PSA 10", image: "/assets/users/user-01.png" },
        { name: "Steezy", points: 23125, prize: "2017-18 Panini Prizm Patrick Mahomes Blue /49 PSA 10", image: "/assets/users/user-01.png" },
        { name: "Steezy", points: 21125, prize: "2017-18 Panini Prizm Patrick Mahomes Blue /49 PSA 10", image: "/assets/users/user-01.png" },
    ],
    lastMonth: [
        { name: "JohnDoe", points: 20125, prize: "2023 Panini Prizm Luka Doncic Silver PSA 9", image: "/assets/users/user-01.png" },
        { name: "Mamba", points: 19125, prize: "2023 Panini Select Zion Williamson Holo", image: "/assets/users/user-01.png" },
        { name: "CardKing", points: 17125, prize: "2022 Topps Chrome Refractor PSA 10", image: "/assets/users/user-01.png" },
    ],
}


export default function LeaderboardTabs() {

    return (
        <section className="w-full mx-auto">
            <Tabs defaultValue="This Month" className="w-full">
                {/* Tabs Header */}
                <TabsList className="bg-transparent rounded-none flex gap-4 h-auto mb-11 mx-auto">
                    {["This Month", "Last Month"].map((title) => (
                        <TabsTrigger
                            key={title}
                            value={title}
                            className={cn(
                                "relative px-6 py-3 h-auto text-sm font-semibold border border-white text-white transition-colors data-[state=active]:text-dark data-[state=active]:border-brand data-[state=active]:bg-brand"
                            )}
                        >
                            {title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* === This Month === */}
                <TabsContent value="This Month" className="space-y-8">
                    <LeaderboardDisplay
                        data={leaderboardData.thisMonth}
                    />
                </TabsContent>

                {/* === Last Month === */}
                <TabsContent value="Last Month" className="space-y-8">
                    <LeaderboardDisplay
                        data={leaderboardData.lastMonth}
                    />
                </TabsContent>
            </Tabs>
        </section>
    )
}
