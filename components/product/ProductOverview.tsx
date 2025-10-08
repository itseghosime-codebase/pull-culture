"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useSidebar } from "../ui/sidebar"

interface ProductOverviewProps {
  product: {
    name: string
    category: string
    price: number
    description: string
    image: string
  }
}

export default function ProductOverview({ product }: ProductOverviewProps) {
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const { open: isSidebarOpen } = useSidebar()

  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]') || window

    const handleScroll = () => {
      const productSection = document.getElementById("product-overview")
      if (!productSection) return
      const { bottom } = productSection.getBoundingClientRect()
      setShowStickyBar(bottom < 150)
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])


  const handleQuantity = (type: "add" | "subtract") => {
    setQuantity((prev) => (type === "add" ? prev + 1 : Math.max(1, prev - 1)))
  }

  return (
    <>
      {/* --- MAIN PRODUCT SECTION --- */}
      <div
        id="product-overview"
        className={cn(
          "bg-brand px-4 sm:px-6 md:px-12 py-12 md:py-16 grid items-center gap-8 md:gap-10",
          isSidebarOpen ? "grid-cols-1 xl:grid-cols-2" :
            "md:!grid-cols-2 xl:grid-cols-2"

        )}
      >
        {/* Product Image */}
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src={product.image}
            alt={product.name}
            width={430}
            height={720}
            className="rounded-lg w-ful max-w-3xs mx-auto lg:max-w-[400px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6 md:space-y-8">
          <div className="bg-white font-black text-dark p-6 sm:p-8 md:p-9 drop-shadow-md rounded-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">{product.category}</h2>
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2">{product.name}</h4>
            <h3 className="text-3xl sm:text-4xl md:text-5xl mt-4">${product.price.toFixed(2)}</h3>
            <div className="my-4 md:my-5 bg-brand h-0.5 w-full" />
            <p className="font-semibold text-sm lg:text-base xl:text-lg">{product.description}</p>
          </div>

          <Button className="border-[3px] border-dark !h-auto py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold text-dark bg-white w-full hover:bg-white/80">
            Buy Now
          </Button>
        </div>
      </div>

      {/* --- STICKY BUY BAR --- */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className={`
              fixed bottom-0 right-0 z-40 
              bg-card text-white shadow-md
              w-full ${isSidebarOpen && 'md:w-[calc(100%-18rem)] md:left-[18rem]'
              }
            `}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between px-4 sm:px-6 md:px-10 py-3 gap-3 md:gap-0">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-4">
                <h2 className="text-xl sm:text-2xl md:text-2xl font-black text-brand">
                  ${product.price.toFixed(2)}
                </h2>
                <h3 className="text-lg sm:text-xl md:text-xl font-bold">
                  {product.category} {product.name}
                </h3>
              </div>

              <div className="flex flex-col lg:flex-row md:items-end lg:items-center  gap-2 sm:gap-4 w-full md:w-auto">
                <div className="flex items-center rounded-md overflow-hidden text-dark font-bold">
                  <button
                    onClick={() => handleQuantity("subtract")}
                    className="px-3 py-1 rounded-l-md bg-brand hover:bg-brand/80 text-xl sm:text-2xl"
                  >
                    −
                  </button>
                  <span className="py-2 px-6 text-xl sm:text-2xl border-2 border-dark bg-white">{quantity}</span>
                  <button
                    onClick={() => handleQuantity("add")}
                    className="px-3 py-1 rounded-r-md bg-brand text-xl sm:text-2xl"
                  >
                    +
                  </button>
                </div>

                <Button size={'lg'} className="bg-brand !h-auto !px-8 sm:!px-10 text-dark font-bold text-lg sm:text-xl md:text-xl py-2 sm:py-3 hover:bg-brand/90 w-full sm:w-auto">
                  Buy Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
