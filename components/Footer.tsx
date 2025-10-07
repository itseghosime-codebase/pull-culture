import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Newsletter from './sharedUi/Newsletter'
import { BsInstagram, BsTiktok, BsTwitterX } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className='border-t-2 border-white bg-dark'>
            <div className='pt-6 pb-9 max-w-5xl mx-auto flex items-center justify-between'>
                <Link href={'/'}>
                    <Image
                        src={'/assets/logo/pull_culture.svg'}
                        alt="Logo"
                        sizes="100%"
                        width={210}
                        height={50}
                        priority
                    />
                </Link>
                <Newsletter />
                <div className='flex flex-col gap-2 items-center'>
                    <h3 className='text-brand text-2xl font-bold'>Follow Our Socials</h3>
                    <div className='flex items-center gap-6 text-white text-2xl'>
                        <Link href={''} className='hover:text-brand'>
                            <BsInstagram />
                        </Link>
                        <Link href={''} className='hover:text-brand'>
                            <BsTwitterX />
                        </Link>
                        <Link href={''} className='hover:text-brand'>
                            <BsTiktok />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-brand max-w-5xl mx-auto'>
                <div className='py-6 flex flex-wrap items-center justify-between'>
                    <div className='flex flex-wrap items-center justify-center gap-6'>
                        {FooterLinks.map((link, index) => (
                            <Link href={link.href} key={index} className='text-sm text-white font-medium hover:text-brand'>{link.label}</Link>
                        ))}
                    </div>
                    <p className='text-sm font-bold text-white'>Copyright © 2025 Pull Culture. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}


const FooterLinks = [
    {
        label: 'Home',
        href: ''
    },
    {
        label: 'About',
        href: ''
    },
    {
        label: 'News',
        href: ''
    },
    {
        label: 'Contact',
        href: ''
    },
    {
        label: 'Feedback',
        href: ''
    },
    {
        label: 'Terms',
        href: ''
    },
    {
        label: 'Privacy',
        href: ''
    },
    {
        label: 'Docs',
        href: ''
    }
]