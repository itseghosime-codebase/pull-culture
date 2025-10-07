"use client"

import { SidebarWithInset } from "@/app/(pages)/layout";
import { ProfileSidebar } from "@/components/ProfileSidebar"
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SidebarProvider>
            <ProfileSidebar />
                <SidebarWithInset>{children}</SidebarWithInset>
        </SidebarProvider>
    )
}