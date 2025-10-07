import { PackPulledIcon, ShippingIcon, UserBold } from '@/Icons/Index'
import React from 'react'

export default function PullStatistics() {
    return (
        <div className="px-4 pt-4">
            <div className="
                border-2 border-brand rounded-xl overflow-hidden 
                grid grid-cols-2 lg:grid-cols-4 items-center
                divide-x-2 divide-y-2 lg:divide-y-0 divide-brand
                bg-dark/5
            ">
                {/* Header */}
                <div className="flex flex-col justify-center items-center p-6 text-center bg-dark/10">
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                        Pull
                        <span className="block text-brand">Culture</span>
                        Stats
                    </h3>
                </div>

                {/* Stat 1 */}
                <div className="flex flex-col items-center text-center p-6 space-y-1.5">
                    <PackPulledIcon className="text-brand text-4xl" />
                    <h4 className="border-b-2 border-brand pb-1.5 text-lg md:text-xl lg:text-2xl font-bold">
                        Packs Pulled
                    </h4>
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-brand">27,102</h3>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center p-6 space-y-1.5">
                    <ShippingIcon className="text-brand text-4xl" />
                    <h4 className="border-b-2 border-brand pb-1.5 text-lg md:text-xl lg:text-2xl font-bold">
                        Cards Shipped
                    </h4>
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-brand">27,102</h3>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center p-6 space-y-1.5">
                    <UserBold className="text-brand text-4xl" />
                    <h4 className="border-b-2 border-brand pb-1.5 text-lg md:text-xl lg:text-2xl font-bold">
                        Users
                    </h4>
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-brand">27,102</h3>
                </div>
            </div>
        </div>
    )
}
