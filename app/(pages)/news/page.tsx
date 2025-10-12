import NewsRender from '@/components/news/NewsRender';
import SectionHeader from '@/components/sharedUi/SectionHeader'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "News - Pull Culture",
    description: "description",
};

export default function NewsPage() {



    return (
        <div className='py-10 px-4 md:px-10'>
            <h3 className='text-2xl md:text-4xl xl:text-6xl text-brand font-black'>HYP3 NEWS</h3>
            <SectionHeader headerTitle='Featured News' />
            <NewsRender />
        </div>
    )
}
