import React from 'react'
import { Button } from '../ui/button'

export default function Security() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
            {/* Two Factor Authentication */}
            <div className="space-y-3">
                <h5 className="text-white text-lg font-bold">
                    Two Factor Authentication (2FA)
                </h5>
                <Button
                    className="border-2 !h-auto gap-3 px-5 border-brand bg-transparent hover:bg-transparent text-white hover:text-brand"
                    variant={'outline'}
                >
                    Use Authenticator App
                </Button>
            </div>

            {/* Account Security + Delete Account */}
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6">
                <div className="space-y-3">
                    <h5 className="text-white text-lg font-bold">Account Security</h5>
                    <Button
                        className="border-2 !h-auto gap-3 px-5 border-brand bg-transparent hover:bg-transparent text-white hover:text-brand"
                        variant={'outline'}
                    >
                        Change Password
                    </Button>
                </div>
                <Button
                    className="border-2 mt-5 md:mt-0 !h-auto gap-3 px-5 border-[#EA4335] bg-transparent hover:bg-transparent text-white hover:text-[#EA4335]"
                    variant={'outline'}
                >
                    Delete Account
                </Button>
            </div>
        </div>
    )
}
