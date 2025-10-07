'use client'

import React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import {
    EnvelopIcon,
    EyeIcon,
    LogoutIcon,
    OfferIcon,
    SellerIcon,
    SettingsIcon,
    TicketIcon,
    TransactionIcon,
    UserIcon,
    WalletIcon
} from "@/Icons/Index"
import { useSessionStore } from "@/lib/store/useSessionStore"
import Authenticated from "./Authenticated"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"

export function ProfileSidebar() {
    const { user, checkSession, logout } = useSessionStore()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    const [loading, setLoading] = React.useState(false)

    const tabParam = searchParams?.get("tab") || ""

    // Navigation links
    const Navigation = [
        { title: "View Profile", href: `/profile/${user?.username}`, icon: UserIcon },
        { title: "Wallet", href: "/", icon: WalletIcon },
        { title: "Recent Orders", href: `/profile/${user?.username}`, tab: "Recent Activity", icon: TransactionIcon }
    ]

    const Categories = [
        { title: "Favorites", href: `/profile/${user?.username}`, tab: "Favorites", icon: EyeIcon },
        { title: "Offers", href: `/profile/${user?.username}`, tab: "Offers Received", icon: OfferIcon },
        { title: "Redemptions", href: `/profile/${user?.username}`, tab: "Redeemed", icon: TicketIcon }
    ]

    React.useEffect(() => {
        checkSession()
    }, [checkSession])

    const handleLogout = async () => {
        try {
            setLoading(true)
            await new Promise(res => setTimeout(res, 2000))
            await logout()
            router.push("/")
        } catch (err) {
            console.error("Logout failed:", err)
        } finally {
            setLoading(false)
        }
    }

    // helper to check active state
    const isActive = (href: string, tab?: string) => {
        if (tab) {
            return pathname === href && tabParam === tab
        }
        return pathname === href
    }

    return (
        <Sidebar variant="inset" className="py-2.5 pr-2.5 !border-r-0">
            <div className="bg-dark rounded-r-4xl py-6 px-5 space-y-4 h-full overflow-scroll flex flex-col">
                <SidebarHeader className="items-start">
                    <Image
                        src={"/assets/logo/pull_culture.svg"}
                        alt="Logo"
                        width={210}
                        height={50}
                        priority
                        className="h-auto w-full"
                    />
                </SidebarHeader>

                <SidebarContent>
                    {user && (
                        <SidebarGroup className="border-y border-brand py-4 px-0">
                            <Authenticated user={user} />
                        </SidebarGroup>
                    )}

                    {/* MAIN NAVIGATION */}
                    <SidebarGroup className="text-white px-0 border-b pb-4 border-brand">
                        <SidebarMenu>
                            {Navigation.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive(item.href, item.tab)}
                                        size="lg"
                                        className="h-10 [&>svg]:w-6 [&>svg]:h-auto transition hover:bg-transparent hover:text-brand px-0 py-2"
                                    >
                                        <Link
                                            href={{
                                                pathname: item.href,
                                                query: item.tab ? { tab: item.tab } : undefined
                                            }}
                                            className="flex gap-3 items-center"
                                        >
                                            <item.icon />
                                            <span className="font-bold text-base">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>

                    {/* CATEGORY LINKS */}
                    <SidebarGroup className="text-white px-0 border-b pb-5 border-brand">
                        <SidebarMenu>
                            {Categories.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive(item.href, item.tab)}
                                        size="lg"
                                        className="h-10 [&>svg]:w-6 [&>svg]:h-auto transition hover:bg-transparent hover:text-brand px-0"
                                    >
                                        <Link
                                            href={{
                                                pathname: item.href,
                                                query: item.tab ? { tab: item.tab } : undefined
                                            }}
                                            className="flex gap-3 items-center"
                                        >
                                            <item.icon />
                                            <span className="font-bold text-base">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>

                    {/* OTHERS */}
                    <SidebarGroup className="text-white px-0 border-b pb-5 border-brand">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    size="lg"
                                    className="h-10 [&>svg]:w-6 [&>svg]:h-auto transition hover:bg-transparent hover:text-brand px-0"
                                >
                                    <Link href="/" className="flex gap-3 items-center">
                                        <SellerIcon />
                                        <span className="font-bold text-base">Seller Hub</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>

                    <SidebarGroup className="text-white px-0 border-b pb-5 border-brand">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={isActive(`/profile/${user?.username}/settings`)}
                                    size="lg"
                                    className="h-10 [&>svg]:w-6 [&>svg]:h-auto transition hover:bg-transparent hover:text-brand px-0"
                                >
                                    <Link href={`/profile/${user?.username}/settings`} className="flex gap-3 items-center">
                                        <SettingsIcon />
                                        <span className="font-bold text-base">Settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>

                    <SidebarGroup className="text-white px-0 pb-5">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={isActive("/contact")}
                                    size="lg"
                                    className="h-10 [&>svg]:w-6 [&>svg]:h-auto transition hover:bg-transparent hover:text-brand px-0"
                                >
                                    <Link href="/contact" className="flex gap-3 items-center">
                                        <EnvelopIcon />
                                        <span className="font-bold text-base">Contact</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>

                {/* ✅ LOGOUT BUTTON */}
                <SidebarFooter>
                    <Button
                        onClick={handleLogout}
                        disabled={loading}
                        className="mt-auto rounded-full gap-4 bg-brand transition hover:bg-brand/80 text-dark h-12 font-bold text-base flex items-center justify-center"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin size-5" />
                                Logging out...
                            </>
                        ) : (
                            <>
                                <LogoutIcon className="[&>svg]:size-5" />
                                Log Out
                            </>
                        )}
                    </Button>
                </SidebarFooter>
            </div>
        </Sidebar>
    )
}
