import { Button } from '@/components/ui/button'
import { AppleIcon } from '@/Icons/Index'
import React from 'react'

export default function Apple() {
    return (
        <Button size={'lg'} className='bg-white h-fit py-3 gap-4 hover:ring-0 focus-visible:border-0 hover:bg-white/80 transition'>
            <AppleIcon className='[&>svg]:size-2' />
            <span className='text-dark text-lg font-medium'>Apple</span>
        </Button>
    )
}
