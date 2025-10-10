"use client"

import React, { useState } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDownIcon } from "lucide-react"

const noSpinnerStyles = {
    appearance: "textfield",
    MozAppearance: "textfield",
    WebkitAppearance: "none",
} as React.CSSProperties

// ✅ Unified schema (all fields optional at base level)
const baseSchema = z.object({
    starting_price: z.string().optional(),
    reserve_price: z.string().optional(),
    fixed_price: z.string().optional(),
    listing_price: z.string().optional(),
    auction_duration: z.string().optional(),
})

type FormValues = z.infer<typeof baseSchema>
type ListingTypeOption = "Auction" | "Fixed Price" | "Both"

export default function ListingType() {
    const [listType, setListType] = useState<ListingTypeOption>("Auction")

    const form = useForm<FormValues>({
        resolver: zodResolver(baseSchema),
        defaultValues: {
            starting_price: "",
            reserve_price: "",
            fixed_price: "",
            listing_price: "",
            auction_duration: "24 HRS",
        },
        mode: "onChange",
    })

    const durationOptions = ["24 HRS", "2 DAYS", "3 DAYS", "4 DAYS", "5 DAYS", "7 DAYS"]

    const onSubmit = (values: FormValues) => {
        // Manual validation logic based on listType
        const requiredFields: Record<ListingTypeOption, (keyof FormValues)[]> = {
            Auction: ["starting_price", "auction_duration"],
            "Fixed Price": ["listing_price", "auction_duration"],
            Both: ["starting_price", "fixed_price", "auction_duration"],
        }

        const missing = requiredFields[listType].filter((f) => !values[f])

        if (missing.length > 0) {
            alert(`Please fill all required fields: ${missing.join(", ")}`)
            return
        }

        alert(JSON.stringify({ listType, ...values }, null, 2))
    }

    return (
        <div className="max-w-md">
            <h4 className="text-sm md:text-base font-bold">Listing Type:</h4>

            <div className="flex items-center gap-4 mt-3 flex-wrap">
                {["Auction", "Fixed Price", "Both"].map((item) => (
                    <Button
                        key={item}
                        size="lg"
                        type="button"
                        onClick={() => {
                            setListType(item as ListingTypeOption)
                            form.reset()
                        }}
                        className={cn(
                            "!h-12 !text-sm md:!text-base font-bold border-2 transition-all",
                            listType === item
                                ? "bg-brand text-dark border-brand hover:bg-brand"
                                : "bg-transparent border-brand hover:text-brand"
                        )}
                    >
                        {item}
                    </Button>
                ))}
            </div>

            <div className="mt-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        {/* Auction / Both fields */}
                        {(listType === "Auction" || listType === "Both") && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="starting_price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold">Starting Price:</FormLabel>
                                            <FormControl>
                                                <div className="flex items-center bg-white rounded-lg overflow-hidden px-4 max-w-3xs">
                                                    <span className="text-xl font-bold text-dark">$</span>
                                                    <Input
                                                        type="number"
                                                        style={noSpinnerStyles}
                                                        className="border-0 bg-white px-2 focus-visible:ring-0 text-dark !text-xl h-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-semibold"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex items-baseline-last gap-3">
                                    <FormField
                                        control={form.control}
                                        name="reserve_price"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-bold">Reserve Price:</FormLabel>
                                                <FormControl>
                                                    <div className="flex items-center bg-white rounded-lg overflow-hidden px-4 max-w-3xs">
                                                        <span className="text-xl font-bold text-dark">$</span>
                                                        <Input
                                                            type="number"
                                                            style={noSpinnerStyles}
                                                            className="border-0 bg-white px-2 focus-visible:ring-0 text-dark !text-xl h-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-semibold"
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <p className="text-xs md:text-sm font-bold">
                                        Leave blank <br />
                                        for no reserve.
                                    </p>
                                </div>

                            </>
                        )}

                        <div className={listType === "Both" ? 'flex items-center justify-between gap-5' : 'flex flex-col gap-5'}>
                            {/* Fixed Price (for Fixed Price or Both) */}
                            {(listType === "Fixed Price" || listType === "Both") && (
                                <FormField
                                    control={form.control}
                                    name={listType === "Fixed Price" ? "listing_price" : "fixed_price"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold">
                                                {listType === "Fixed Price" ? "Listing Price:" : "Fixed Price:"}
                                            </FormLabel>
                                            <FormControl>
                                                <div className="flex items-center bg-white rounded-lg overflow-hidden px-4 max-w-3xs">
                                                    <span className="text-xl font-bold text-dark">$</span>
                                                    <Input
                                                        type="number"
                                                        style={noSpinnerStyles}
                                                        className="border-0 bg-white px-2 focus-visible:ring-0 text-dark !text-xl h-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-semibold"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}

                            {/* Auction Duration (always visible) */}
                            <FormField
                                control={form.control}
                                name="auction_duration"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-bold">Auction Duration:</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value || "24 HRS"}>
                                                <SelectTrigger className="w-full min-w-32 max-w-40 !h-12 bg-white text-dark text-base">
                                                    <SelectValue />
                                                    <ChevronDownIcon className="size-6 text-dark" />
                                                </SelectTrigger>
                                                <SelectContent className="font-bold">
                                                    {durationOptions.map((dur) => (
                                                        <SelectItem key={dur} value={dur}>
                                                            {dur}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="w-full bg-brand text-dark text-base h-auto py-3.5 font-bold hover:bg-brand/80 transition disabled:opacity-50"
                        >
                            {form.formState.isSubmitting ? "Listing..." : "List On Marketplace"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
