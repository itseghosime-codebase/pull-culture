'use client';

import React from "react";
import { categories } from "../AppSidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CovertIcon } from "@/Icons/Index";

export default function SharedTabs() {
  const pathname = usePathname();

  return (
    <section className="w-full">
      <ul
        className={`
          flex flex-nowrap md:flex-wrap 
          gap-3 md:gap-4 
          p-3 md:p-4 pb-2 
          overflow-x-auto md:overflow-visible
          scrollbar-thin scrollbar-thumb-[#666]/40 scrollbar-track-transparent
          snap-x snap-mandatory
        `}
      >
        {/* All Packs */}
        <li className="list-none flex-1 snap-start">
          <Link
            href="/pack"
            className={`
              flex items-center justify-center gap-1 md:gap-4 
              px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl 
              font-semibold md:font-bold text-dark text-center transition-all duration-300
              ${pathname === "/pack"
                ? "bg-brand shadow-[0_4px_12px_rgba(255,255,255,0.2)] scale-[1.03]"
                : "bg-white hover:bg-brand/80 hover:scale-[1.02]"
              }
            `}
          >
            <CovertIcon className="[&<svg]:size-5 scale-75 md:scale-100 shrink-0" />
            <span className="whitespace-nowrap text-sm md:text-base">All Packs</span>
          </Link>
        </li>

        {/* Dynamic Categories */}
        {Array.isArray(categories) &&
          categories.map((navLink) => {
            const Icon = navLink.icon;
            const isActive = pathname === navLink.url;

            return (
              <li key={navLink.title} className="list-none flex-1 snap-start">
                <Link
                  href={navLink.url}
                  className={`
                    flex items-center justify-center gap-1 md:gap-4
                    px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl 
                    font-semibold md:font-bold text-dark text-center transition-all duration-300
                    ${isActive
                      ? "bg-brand shadow-[0_4px_12px_rgba(255,255,255,0.2)] scale-[1.03]"
                      : "bg-white hover:bg-brand/80 hover:scale-[1.02]"
                    }
                  `}
                >
                  <Icon className="[&<svg]:size-5 shrink-0" />
                  <span className="whitespace-nowrap text-sm md:text-base">{navLink.title}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
