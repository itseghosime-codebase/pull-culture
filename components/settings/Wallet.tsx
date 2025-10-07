import React from 'react'
import { Button } from '../ui/button'
import { UnionIcon } from '@/Icons/Index'

export default function Wallet() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
            <div className="space-y-3">
                <h5 className="text-white text-lg font-bold">
                    Saved Payment Methods
                </h5>
                <p className="text-[#A9A9A9] font-semibold">
                    No payment methods currently added
                </p>
            </div>
            <Button
                className="border-2 !h-auto gap-3 px-5 border-brand bg-transparent hover:bg-transparent text-white hover:text-brand self-start md:self-auto"
                variant={'outline'}
            >
                <UnionIcon className={'![&>svg]:size-5'} />
                Add Payment Method
            </Button>
        </div>
    )
}
