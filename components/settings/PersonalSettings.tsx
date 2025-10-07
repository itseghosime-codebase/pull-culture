"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { UnionIcon } from "@/Icons/Index"

const profileSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    phone: z
        .string()
        .regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number"),
})

type ProfileFormValues = z.infer<typeof profileSchema>

export default function PersonalSettings() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            phone: "",
        },
    })

    function onSubmit(values: ProfileFormValues) {
        console.log(values)
    }

    return (
        <div className="space-y-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-lg font-bold">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="!text-base font-semibold text-white bg-card border-0 focus-visible:ring-0 !h-auto p-3"
                                            placeholder="you@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-lg font-bold">
                                        Username
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="!text-base font-semibold text-white bg-card border-0 focus-visible:ring-0 !h-auto p-3"
                                            placeholder="Your Username"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-lg font-bold">
                                        First Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="!text-base font-semibold text-white bg-card border-0 focus-visible:ring-0 !h-auto p-3"
                                            placeholder="First Name Here"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-lg font-bold">
                                        Last Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="!text-base font-semibold text-white bg-card border-0 focus-visible:ring-0 !h-auto p-3"
                                            placeholder="Last Name Here"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-lg font-bold">
                                        Phone Number
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="!text-base font-semibold text-white bg-card border-0 focus-visible:ring-0 !h-auto p-3"
                                            placeholder="Enter Phone Number Here"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <Button
                            type="submit"
                            className="bg-brand text-dark text-sm h-auto px-8 py-3 font-bold hover:bg-brand/80 transition"
                        >
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Form>

            <div className="border-t-2 border-white pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
                <div className="space-y-3">
                    <h5 className="text-white text-lg font-bold">Saved Addresses</h5>
                    <p className="text-[#A9A9A9] font-semibold">No addresses currently added</p>
                </div>
                <Button
                    className="border-2 !h-auto gap-3 px-5 border-brand bg-transparent hover:bg-transparent text-white hover:text-brand self-start md:self-auto"
                    variant={"outline"}
                >
                    <UnionIcon className={"![&>svg]:size-5"} />
                    Add New Address
                </Button>
            </div>
        </div>

    )
}
