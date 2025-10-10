'use client'

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
import Authentication from "./Authentication"
import Link from "next/link"
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
  TrophyIcon
} from "@/Icons/Index"
import { usePathname } from "next/navigation"
import React from "react"
import { useSessionStore } from "@/lib/store/useSessionStore"
import Authenticated from "./Authenticated"
import { Button } from "./ui/button"
import { useAnnouncementStore } from "@/lib/store/announcement-store"

// Navigation links
const Navigation = [
  { title: "Home", url: "/", icon: HomeIcon },
  { title: "Pack", url: "/pack", icon: CovertIcon },
  { title: "Marketplace", url: "/marketplace", icon: ShopIcon },
  { title: "Leaderboard", url: "/leaderboard", icon: DiamondIcon },
]

// Categories
export const Categories = [
  { title: "Football", url: "/pack/football", icon: BallIcon },
  { title: "Basketball", url: "/pack/basketball", icon: BasketBallIcon },
  { title: "Baseball", url: "/pack/baseball", icon: BaseBallIcon },
  { title: "Pokémon", url: "/pack/pokemon", icon: BoltCircleIcon },
  { title: "Multi-Sport", url: "/pack/multi-sport", icon: TrophyIcon },
]

export function AppSidebar() {
  const { user, checkSession } = useSessionStore();
  const { isVisible } = useAnnouncementStore()
  const pathname = usePathname()

  React.useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <Sidebar variant="inset" className={`${isVisible && '!pt-[50px] lg:!pt-[55px]'} transition-all pl-0 duration-300 pr-2.5 pb-0 !border-r-0`}>
      <div className="bg-dark rounded-tr-4xl py-4 px-5 space-y-4 h-full flex flex-col">
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

        <SidebarContent >
          <SidebarGroup className="border-y border-brand py-4 px-0">
            {
              user ? <Authenticated user={user} /> : <Authentication />
            }
          </SidebarGroup>

          {/* MAIN NAVIGATION */}
          <SidebarGroup className="text-white px-0 border-b pb-4 border-brand">
            <SidebarMenu>
              {Navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    size="lg"
                    className="h-10 [&>svg]:size-7 hover:bg-transparent hover:text-brand transition px-0 py-2"
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

          {/* CATEGORY LINKS */}
          <SidebarGroup className="text-white px-0 border-b pb-5 border-brand">
            <SidebarMenu>
              {Categories.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    size="lg"
                    className="h-10 [&>svg]:size-7 hover:bg-transparent transition hover:text-brand px-0"
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

          {/* HOW IT WORKS LINK */}
          <SidebarGroup className="text-white px-0 border-b pb-5 border-brand">
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === 'how-it-works'}
                  size="lg"
                  className="h-10 [&>svg]:size-7 hover:bg-transparent transition hover:text-brand px-0"
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
        {/* ✅ SUBMIT BUTTON */}
        <SidebarFooter>
          <Button
            className="mt-auto rounded-full gap-4 bg-brand transition hover:bg-brand/80 text-dark h-12 font-bold text-base flex items-center justify-center"
          >
            Submit Cards
          </Button>
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}
