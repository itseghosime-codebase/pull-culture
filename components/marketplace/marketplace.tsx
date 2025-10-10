'use client'
import AuctionsCard from "@/components/sharedUi/Cards/AuctionsCard"
import SearchFilterBar from "@/components/sharedUi/SearchFilterBar"
import { TabsSection } from "@/components/sharedUi/TabsSection"
import { AuctionsDb } from "@/context/Content"

export default function Marketplace() {
    const categories = ["Football", "Basketball", "Baseball", "Pokémon"]

    const handleFilterChange = ({
        search,
        category,
        sort,
    }: {
        search: string
        category: string[]
        sort: string
    }) => {
        console.log({ search, category, sort })
        // Call your filtering logic or API here
    }

    return (
        <section>
            <div className="p-3 sm:p-4">
                <SearchFilterBar categories={categories} onChange={handleFilterChange} />
            </div>
            <TabsSection
                tabs={[
                    {
                        title: "ALL CARDS",
                        data: AuctionsDb,
                        renderItem: (item, index) => (
                            <div key={index} className="bg-card rounded-xl overflow-hidden">
                                <AuctionsCard {...item} />
                            </div>
                        ),
                    },
                    {
                        title: "AUCTIONS",
                        data: AuctionsDb,
                        renderItem: (item, index) => (
                            <div key={index} className="bg-card rounded-xl overflow-hidden">
                                <AuctionsCard {...item} />
                            </div>
                        ),
                    },
                    {
                        title: "FIXED PRICE",
                        data: AuctionsDb,
                        renderItem: (item, index) => (
                            <div key={index} className="bg-card rounded-xl overflow-hidden">
                                <AuctionsCard {...item} />
                            </div>
                        ),
                    },
                ]}
                defaultTab="ALL CARDS"
            />
        </section>
    )
}
