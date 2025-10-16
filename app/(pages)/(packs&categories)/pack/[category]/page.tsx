'use client'
import React from 'react'
import { useParams } from "next/navigation";
import Football from '@/components/packs/Football';
import Basketball from '@/components/packs/Basketball';
import Baseball from '@/components/packs/Baseball';
import Pokemon from '@/components/packs/Pokemon';
import MultiSport from '@/components/packs/Multisport';
import SectionHeader from '@/components/sharedUi/SectionHeader';
import Marketplace from '@/components/marketplace/marketplace';
import SharedTabs from '@/components/sharedUi/SharedTabs';

export default function CategoryPage() {
    const { category } = useParams();

    const categoryComponents: Record<string, React.ReactNode> = {
        football: <Football />,
        basketball: <Basketball />,
        baseball: <Baseball />,
        pokemon: <Pokemon />,
        'multi-sport': <MultiSport />,
    };

    const SelectedCategory = categoryComponents[category as string];

    return (
        <div>
            <SharedTabs />
            {SelectedCategory || (
                <div className="text-center text-white py-20 text-lg">
                    Category &quot;<span className='capitalize'>{category}</span>&quot; not found.
                </div>
            )}
            <div className='px-4 mt-5'>
                <SectionHeader headerTitle={`${category === 'pokemon' ? 'pokémon' : category} Marketplace`} />
            </div>
            <Marketplace />
        </div>
    );
}
