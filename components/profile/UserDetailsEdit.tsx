"use client"

import Image from "next/image"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs"
import { useSessionStore } from "@/lib/store/useSessionStore"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form"

// 🧩 Zod Schema
const formSchema = z.object({
    instagram: z.string().optional(),
    twitter: z.string().optional(),
    tiktok: z.string().optional(),
    bio: z.string().max(200, "Bio must be less than 200 characters").optional(),
    banner: z.instanceof(File).optional(),
    avatar: z.instanceof(File).optional(),
})

export default function UserDetailsEdit() {
    const { user } = useSessionStore()

    // State for previews
    const [bannerPreview, setBannerPreview] = useState<string>("/assets/banners/Banner-img-01.png")
    const [avatarPreview, setAvatarPreview] = useState<string>(user?.image || "/assets/users/user-01.png")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            instagram: "",
            twitter: "",
            tiktok: "",
            bio: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Updated Profile Data:", values)
        // Integrate with Zustand or API later
    }

    const isDirty = form.formState.isDirty

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-10">
                {/* === Banner Upload === */}
                <div className="relative flex items-center justify-center h-48 sm:h-64 md:h-80">
                    <Image
                        src={bannerPreview}
                        alt="User Banner"
                        fill
                        sizes="100%"
                        className="absolute inset-0 object-cover object-center"
                    />
                    <label className="relative flex flex-col items-center justify-center gap-1 hover:opacity-80 transition hover:scale-[98%] cursor-pointer text-center">
                        <Image
                            src="/assets/logo/camera.svg"
                            alt="camera icon"
                            width={100}
                            height={80}
                            draggable={false}
                            className="h-16 sm:h-20 w-auto"
                        />
                        <h4 className="font-bold text-sm sm:text-lg md:text-xl text-white">1250PX x 350PX</h4>
                        <FormField
                            control={form.control}
                            name="banner"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            id="banner-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0]
                                                if (file) {
                                                    setBannerPreview(URL.createObjectURL(file))
                                                    field.onChange(file)
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </label>
                </div>

                {/* === Avatar Upload === */}
                <div className="-mt-16 sm:-mt-20 md:-mt-24 w-fit relative z-20 mx-auto sm:ml-10 flex items-end border-2 border-brand rounded-xl overflow-hidden">
                    <div className="relative">
                        <Image
                            draggable={false}
                            alt="User Image"
                            src={avatarPreview}
                            height={120}
                            width={120}
                            className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 grayscale object-cover"
                        />

                        <label className="flex items-center justify-center inset-0 absolute bg-black/85 hover:opacity-80 transition hover:scale-[98%] cursor-pointer">
                            <Image
                                src="/assets/logo/camera.svg"
                                alt="camera icon"
                                width={50}
                                height={50}
                                className="h-10 sm:h-12 w-auto"
                            />
                            <FormField
                                control={form.control}
                                name="avatar"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                type="file"
                                                id="avatar-upload"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0]
                                                    if (file) {
                                                        setAvatarPreview(URL.createObjectURL(file))
                                                        field.onChange(file)
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </label>
                    </div>
                </div>

                {/* === Socials === */}
                <div className="text-white space-y-1 md:space-y-3 px-2 sm:px-6">
                    <h5 className="text-lg sm:text-xl font-bold">Socials</h5>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                        {[
                            { icon: BsInstagram, name: "instagram", placeholder: "@Instagram" },
                            { icon: BsTwitterX, name: "twitter", placeholder: "@Twitter-X" },
                            { icon: BsTiktok, name: "tiktok", placeholder: "@TikTok" },
                        ].map(({ icon: Icon, name, placeholder }) => (
                            <FormField
                                key={name}
                                control={form.control}
                                name={name as "instagram" | "twitter" | "tiktok"}
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-2 flex-1 min-w-[240px]">
                                        <Icon size={22} className="shrink-0" />
                                        <FormControl>
                                            <Input
                                                placeholder={placeholder}
                                                className="text-sm sm:text-base font-semibold text-white bg-card border-0 focus-visible:ring-0 h-10 sm:h-11"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                    </div>
                </div>

                {/* === Bio === */}
                <div className="px-2 sm:px-6">
                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter your bio here..."
                                        className="text-sm sm:text-base font-semibold text-white bg-card border-0 focus-visible:ring-0 h-24 resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* === Animated Save Button === */}
                <AnimatePresence>
                    {isDirty && (
                        <motion.div
                            key="save-button"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="flex justify-end px-2 sm:px-6"
                        >
                            <Button
                                type="submit"
                                className="bg-brand text-dark text-sm h-auto px-6 sm:px-8 py-3 font-bold hover:bg-brand/80 transition w-full sm:w-auto"
                            >
                                Save Changes
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </Form>
    )
}
