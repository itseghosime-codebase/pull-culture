'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from 'lucide-react'
import { ArrowDownIcon, EqualizerIcon } from '@/Icons/Index'
import { Check } from 'lucide-react'

interface SearchFilterBarProps {
  categories?: string[]
  onChange?: (params: {
    search: string
    category: string[]
    sort: 'asc' | 'desc'
  }) => void
}

export default function SearchFilterBar({
  categories = [],
  onChange,
}: SearchFilterBarProps) {
  const [search, setSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sort, setSort] = useState<'asc' | 'desc'>('desc')
  const [open, setOpen] = useState(false)

  // Notify parent of changes
  const triggerChange = (updates: Partial<{ search: string; category: string[]; sort: 'asc' | 'desc' }>) => {
    const newState = {
      search,
      category: selectedCategories,
      sort,
      ...updates,
    }
    setSearch(newState.search)
    setSort(newState.sort)
    onChange?.(newState)
  }

  const toggleCategory = (cat: string) => {
    let updated: string[]
    if (selectedCategories.includes(cat)) {
      updated = selectedCategories.filter((c) => c !== cat)
    } else {
      updated = [...selectedCategories, cat]
    }
    setSelectedCategories(updated)
    triggerChange({ category: updated })
  }

  return (
    <div className="w-full flex items-center gap-3 sm:gap-4">
      {/* Search Input */}
      <div
        className="
          flex items-center w-full gap-2 rounded-3xl border-2 border-white/30
          pl-3 pr-5 transition-all duration-300
          focus-within:border-brand hover:border-brand/70
        "
      >
        <Input
          placeholder="Search Cards"
          value={search}
          onChange={(e) => triggerChange({ search: e.target.value })}
          className="
            w-full font-bold !text-base h-12 sm:h-14
            bg-transparent border-0 focus-visible:ring-0 text-white
            placeholder:text-white/60
          "
        />
        <Search className="text-2xl text-brand transition-transform duration-200 hover:scale-110" />
      </div>

      {/* Multi-Select Category Filter */}
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="
            group flex items-center justify-center gap-3
            rounded-3xl border-2 border-white/30 px-5 sm:px-8
            !h-12 sm:!h-14 min-w-12 sm:min-w-32
            hover:border-brand/80 focus-visible:ring-0 
            bg-transparent text-white font-bold
            transition-all duration-300
          "
        >
          <EqualizerIcon className="[&svg]:size-5 text-brand group-hover:rotate-90 transition-transform duration-300" />
          <span className="hidden sm:inline">
            {selectedCategories.length > 0
              ? `${selectedCategories.length}`
              : 'Filters'}
          </span>
        </button>

        {open && (
          <div
            className="
              absolute right-0 mt-2 w-48 sm:w-60 bg-dark border-2 border-white/20 rounded-xl shadow-lg
              p-2 z-50 text-white font-semibold backdrop-blur-md
              animate-in fade-in-0 zoom-in-95 space-y-2
            "
          >
            {categories.length > 0 ? (
              categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-lg text-left
                    hover:bg-brand/20 transition-colors duration-200
                    ${selectedCategories.includes(cat) ? 'bg-white text-dark' : ''}
                  `}
                >
                  {cat}
                  {selectedCategories.includes(cat) && (
                    <Check className="w-4 h-4 text-dark" />
                  )}
                </button>
              ))
            ) : (
              <p className="px-3 py-2 text-sm text-gray-400">No categories</p>
            )}
          </div>
        )}
      </div>

      {/* Sort Options */}
      <Select
        value={sort}
        defaultValue="desc"
        onValueChange={(value) => triggerChange({ sort: value as 'asc' | 'desc' })}
      >
        <SelectTrigger
          className="
            group flex items-center justify-center gap-3 
            rounded-3xl border-2 border-white/30 px-5 sm:px-8
            !h-12 sm:!h-14 min-w-12 sm:min-w-40
            hover:border-brand/80 focus-visible:ring-0 
            bg-transparent text-white font-bold
            transition-all duration-300
          "
        >
          <ArrowDownIcon
            className="
              [&svg]:size-4 text-brand transition-transform duration-300
              md:group-hover:translate-y-0.5
            "
          />
          <span className="hidden sm:inline">
            <SelectValue placeholder="Sort by price" />
          </span>
        </SelectTrigger>
        <SelectContent
          className="
            bg-dark text-white border-2 border-white/20 !rounded-xl 
            text-base sm:text-lg font-semibold shadow-lg
            backdrop-blur-xl
          "
        >
          <SelectItem value="asc">Low to High</SelectItem>
          <SelectItem value="desc">High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
