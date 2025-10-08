import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <section className='h-52 md:h-64 lg:h-80 relative'>
            <Image
                src={'/assets/banners/Banner-img-01.png'}
                alt='Banner Image'
                sizes='100%'
                priority
                fill
                className='object-cover object-center'
            /> 
        </section>
    )
}
