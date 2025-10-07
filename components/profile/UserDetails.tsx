'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsTiktok, BsTwitterX } from 'react-icons/bs'
import { PenIcon } from '@/Icons/Index'
import { useSessionStore } from '@/lib/store/useSessionStore'

export default function UserDetails() {
    const { user } = useSessionStore();

    return (
        <section className="mb-10 w-full transition-all duration-300 ease-in-out">
            {/* Banner */}
            <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center overflow-hidden rounded-xl">
                <Image
                    src="/assets/banners/Banner-img-01.png"
                    alt="User Banner"
                    sizes="100%"
                    draggable={false}
                    fill
                    className="absolute inset-0 object-cover object-center z-0"
                />
                <button className="relative flex flex-col items-center justify-center gap-1 hover:opacity-80 transition-transform hover:scale-[0.98]">
                    <Image
                        src="/assets/logo/camera.svg"
                        alt="camera icon"
                        width={100}
                        height={100}
                        className="h-20 w-auto sm:h-24 md:h-28"
                        draggable={false}
                    />
                    <h4 className="font-semibold text-sm sm:text-base md:text-xl text-white">
                        1250PX x 350PX
                    </h4>
                </button>
            </div>

            {/* Profile Info */}
            <div className="relative z-20 flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap lg:items-end xl:justify-between gap-6 sm:gap-10 px-4 sm:px-6 md:px-10 mt-5 md:-mt-10 lg:-mt-16 transition-all duration-300 ease-in-out">
                <div className='flex justify-between lg:justify-start items-center gap-5 flex-col md:flex-row shrink-0 max-w-lg w-full md:w-fit md:items-end mx-auto md:mx-0'>
                    {/* User Avatar */}
                    <div className="flex justify-center sm:justify-start shrink-0">
                        <Image
                            draggable={false}
                            alt="User Image"
                            src="/assets/users/user-01.png"
                            sizes="100%"
                            height={140}
                            width={140}
                            className="h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-xl border-2 border-brand object-cover object-center"
                        />
                    </div>
                    {/* Name & Socials */}
                    <div className="flex flex-col items-center gap-3 text-left shrink-0">
                        <h5 className="text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
                            Steezy
                        </h5>
                        <div className="flex items-center gap-4 text-lg sm:text-xl">
                            <Link href="#" className="hover:text-brand transition">
                                <BsInstagram />
                            </Link>
                            <Link href="#" className="hover:text-brand transition">
                                <BsTwitterX />
                            </Link>
                            <Link href="#" className="hover:text-brand transition">
                                <BsTiktok />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* User Info + Socials + Bio + Edit */}
                <div className="flex flex-col md:flex-row md:flex-wrap xl:min-w-1/2 items-center lg:items-end justify-between xl:justify-between w-full xl:w-auto gap-6 xl:gap-20 xl:items-start sm:gap-8 text-white transition-all duration-300 ease-in-out">
                    {/* Bio */}
                    <div className="flex-1 text-center md:text-left border-t md:border-l-2 md:border-t-0 border-brand pt-4 md:pt-0 md:pl-6 xl:pl-10 text-sm md:text-base font-medium leading-relaxed max-w-xs min-w-xs mx-auto sm:mx-0">
                        <p>
                            Pokémon Card Collector | Creative. Check out my collection and make me some offers if
                            interested!
                        </p>
                    </div>

                    {/* Edit Button */}
                    <div className="flex justify-center lg:justify-end shrink-0">
                        <Link
                            href={`/profile/${user?.username || ''}/settings`}
                            className="border-2 flex items-center gap-2 border-brand rounded-lg font-semibold text-xs sm:text-sm px-5 py-2.5 hover:text-brand transition"
                        >
                            <PenIcon className="[&>size]:size-5" />
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
