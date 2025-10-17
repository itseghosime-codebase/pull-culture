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
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  BallIcon,
  BaseBallIcon,
  BasketBallIcon,
  BoltCircleIcon,
  CheckIcon,
  CovertIcon,
  DiamondIcon,
  HomeIcon,
  ShopIcon,
  TrophyIcon,
  EnvelopIcon,
  EyeIcon,
  OfferIcon,
  TicketIcon,
  TransactionIcon,
  SellerIcon,
  SettingsIcon,
  UserIcon,
  WalletIcon,
  LogoutIcon,
} from "@/Icons/Index"
import { useSessionStore } from "@/lib/store/useSessionStore"
import Authenticated from "./Authenticated"
import Authentication from "./Authentication"
import { useAnnouncementStore } from "@/lib/store/announcement-store"
import SubmitDialog from "./submitCards/SubmitDialog"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"

// -------------------- MAIN COMPONENT --------------------
export function AppSidebar() {
  const { user, checkSession, logout } = useSessionStore()
  const { isVisible } = useAnnouncementStore()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [showProfileNav, setShowProfileNav] = React.useState(false)

  const tabParam = searchParams?.get("tab") || ""

  React.useEffect(() => {
    checkSession()
  }, [checkSession])

  const handleLogout = async () => {
    try {
      setLoading(true)
      await new Promise(res => setTimeout(res, 1000))
      await logout()
      router.push("/")
    } catch (err) {
      console.error("Logout failed:", err)
    } finally {
      setLoading(false)
    }
  }

  const isActive = (href: string, tab?: string) => {
    if (tab) return pathname === href && tabParam === tab
    return pathname === href
  }

  // Profile navigation (dropdown content)
  const profileNavigation = [
    { title: "View Profile", href: `/profile/${user?.username}`, icon: UserIcon },
    { title: "Wallet", href: `/profile/${user?.username}/settings`, tab: "Wallet", icon: WalletIcon },
    { title: "Recent Orders", href: `/profile/${user?.username}`, tab: "Recent Activity", icon: TransactionIcon }
  ]

  const profileCategories = [
    { title: "Favorites", href: `/profile/${user?.username}`, tab: "Favorites", icon: EyeIcon },
    { title: "Offers", href: `/profile/${user?.username}`, tab: "Offers Received", icon: OfferIcon },
    { title: "Redemptions", href: `/profile/${user?.username}`, tab: "Redeemed", icon: TicketIcon }
  ]

  // Default navigation (home, pack, etc.)
  const defaultNavigation = [
    { title: "Home", url: "/", icon: HomeIcon },
    { title: "Pack", url: "/pack", icon: CovertIcon },
    { title: "Marketplace", url: "/marketplace", icon: ShopIcon },
    { title: "Leaderboard", url: "/leaderboard", icon: DiamondIcon },
  ]

  const categories = [
    { title: "Football", url: "/pack/football", icon: BallIcon },
    { title: "Basketball", url: "/pack/basketball", icon: BasketBallIcon },
    { title: "Baseball", url: "/pack/baseball", icon: BaseBallIcon },
    { title: "Pokémon", url: "/pack/pokemon", icon: BoltCircleIcon },
    { title: "Multi-Sport", url: "/pack/multi-sport", icon: TrophyIcon },
  ]

  return (
    <Sidebar variant="inset" className={`${isVisible && '!pt-[50px] lg:!pt-[55px]'} transition-all pl-0 duration-300 pr-2.5 pb-0 !border-r-0`}>
      <div className="bg-dark rounded-tr-4xl py-4 px-5 space-y-4 h-full flex flex-col">
        {/* LOGO */}
        <SidebarHeader className="items-start">
          <Link href={'/'}>
            <Image
              src={"/assets/logo/pull_culture.svg"}
              alt="Logo"
              width={210}
              height={50}
              priority
              className="h-auto w-full"
            />
          </Link>
        </SidebarHeader>
        {/* AUTH SECTION (CLICKABLE USER) */}
        <div className="border-y border-brand py-4 px-0 relative">
          {user ? (
            <Authenticated user={user}
              showProfileNav={showProfileNav}
              toggleProfileNav={() => setShowProfileNav(prev => !prev)} />
          ) : (
            <Authentication />
          )}

        </div>
        {/* MAIN NAVIGATION (HIDDEN WHEN PROFILE NAV IS OPEN) */}
        {!showProfileNav && (
          <>
            <SidebarContent>
              <SidebarGroup className="text-white px-0 border-b pb-4 border-brand">
                <SidebarMenu>
                  {defaultNavigation.map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url}
                        size="lg"
                        className="h-10 [&>svg]:size-7 [&>svg]:h-fit hover:bg-transparent hover:text-brand transition px-0 py-2"
                      >
                        <Link href={item.url} className="flex gap-3 items-center">
                          <item.icon />
                          <span className="font-bold text-base">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>

              <SidebarGroup className="text-white px-0 border-b pb-5 border-brand">
                <SidebarMenu>
                  {categories.map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url}
                        size="lg"
                        className="h-10 [&>svg]:size-7 [&>svg]:h-fit hover:bg-transparent hover:text-brand transition px-0"
                      >
                        <Link href={item.url} className="flex gap-3 items-center">
                          <item.icon />
                          <span className="font-bold text-base">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>

              <SidebarGroup className="text-white px-0 border-b pb-5 border-brand">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === '/how-it-works'}
                      size="lg"
                      className="h-10 [&>svg]:size-7 [&>svg]:h-fit hover:bg-transparent hover:text-brand px-0"
                    >
                      <Link href={'/how-it-works'} className="flex gap-3 items-center">
                        <CheckIcon />
                        <span className="font-bold text-base">How It Works?</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
              <SubmitDialog />
            </SidebarFooter>
          </>
        )}
        {/* Profile dropdown */}
        {showProfileNav && user && (
          <>
            <SidebarContent>
              {/* MAIN NAVIGATION */}
              <SidebarGroup className="text-white px-0 border-b pb-4 border-brand">
                <SidebarMenu>
                  {profileNavigation.map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive(item.href, item.tab)}
                        size="lg"
                        className="h-10 [&>svg]:size-7 [&>svg]:h-fit hover:bg-transparent hover:text-brand transition px-0 py-2"
                      >
                        <Link
                          href={{
                            pathname: item.href,
                            query: item.tab ? { tab: item.tab } : undefined
                          }} className="flex gap-3 items-center">
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
                  {profileCategories.map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive(item.href, item.tab)}
                        size="lg"
                        className="h-10 [&>svg]:size-7 [&>svg]:h-fit hover:bg-transparent hover:text-brand transition px-0 py-2"
                      >
                        <Link
                          href={{
                            pathname: item.href,
                            query: item.tab ? { tab: item.tab } : undefined
                          }} className="flex gap-3 items-center">
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
                      isActive={isActive(`/profile/${user?.username}/sellerhub`)}
                      size="lg"
                      className="h-10 [&>svg]:size-7 [&>svg]:h-fit hover:bg-transparent hover:text-brand transition px-0 py-2"
                    >
                      <Link href={`/profile/${user?.username}/sellerhub`} className="flex gap-3 items-center">
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
                      className="h-10 [&>svg]:size-7 [&>svg]:h-fit hover:bg-transparent hover:text-brand transition px-0 py-2"
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
                      className="h-10 [&>svg]:size-7 [&>svg]:h-fit hover:bg-transparent hover:text-brand transition px-0 py-2"
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
          </>
        )}
      </div>
    </Sidebar>
  )
}
