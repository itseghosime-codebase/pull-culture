'use client'
import UserDetailsEdit from '@/components/profile/UserDetailsEdit'
import Notification from '@/components/settings/Notification'
import PersonalSettings from '@/components/settings/PersonalSettings'
import Security from '@/components/settings/Security'
import Wallet from '@/components/settings/Wallet'
import { SettingsTabs } from '@/components/sharedUi/SettingsTab'
import React from 'react'

export default function SettingsPage() {
    return (
        <div className='px-4 md:px-10 py-5'>
            <UserDetailsEdit />
            <SettingsTabs
                tabs={[
                    {
                        title: 'Personal Settings',
                        renderItem: PersonalSettings
                    },
                    {
                        title: 'Wallet',
                        renderItem: Wallet
                    },
                    {
                        title: 'Security',
                        renderItem: Security
                    },
                    {
                        title: 'Notifications',
                        renderItem: Notification
                    }
                ]}
            />
        </div>
    )
}
