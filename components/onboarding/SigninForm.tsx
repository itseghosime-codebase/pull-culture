"use client"

import React, { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RxCaretDown } from "react-icons/rx"

// 🧩 Zod Schema
const formSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    username: z.string().min(3, { message: "Username must be at least 3 characters" }),
    phoneNumber: z.string().min(6, { message: "Please enter a valid phone number" }),
    countryCode: z.string().min(1, { message: "Country code is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    agreeToTerms: z.boolean().refine((val) => val, { message: "You must agree to the Terms & Privacy Policy" }),
    emailUpdates: z.boolean().optional(),
})

export default function SignupForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            phoneNumber: "",
            countryCode: "+234",
            email: "",
            password: "",
            agreeToTerms: false,
            emailUpdates: false,
        },
    })

    const [countryCodes, setCountryCodes] = useState<{ name: string; code: string }[]>([])

    // 🌍 Fetch country codes from REST API 
    useEffect(() => {
        async function fetchCountryCodes() {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2")
                const data = await res.json()

                if (!Array.isArray(data)) throw new Error("Invalid data")

                // ✅ Extract short country codes (cca2) + phone codes
                const formatted = data
                    .filter(
                        (country) =>
                            country?.idd?.root && Array.isArray(country?.idd?.suffixes) && country?.idd?.suffixes[0]
                    )
                    .map((country) => ({
                        name: country.cca2, // short code (e.g. NG, US)
                        code: `${country.idd.root}${country.idd.suffixes[0]}`,
                    }))
                    .filter((v, i, a) => a.findIndex((t) => t.code === v.code) === i)
                    .sort((a, b) => a.name.localeCompare(b.name))

                setCountryCodes(formatted)
            } catch (err) {
                console.error("Failed to fetch from API, using fallback:", err)
                setCountryCodes([
                    { name: "NG", code: "+234" },
                    { name: "US", code: "+1" },
                    { name: "GB", code: "+44" },
                ])
            }
        }
        fetchCountryCodes()
    }, [])



    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Fields */}
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="First Name"
                                    className="border-0 text-center bg-white focus-visible:ring-0 text-dark !text-lg h-auto py-3 font-semibold"
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
                            <FormControl>
                                <Input
                                    placeholder="Last Name"
                                    className="border-0 text-center bg-white focus-visible:ring-0 text-dark !text-lg h-auto py-3 font-semibold"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Username */}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Username"
                                    className="border-0 text-center bg-white focus-visible:ring-0 text-dark !text-lg h-auto py-3 font-semibold"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Country Code + Phone */}
                <div className="flex gap-2">
                    <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                            <FormItem className="max-w-[150px]">
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="border-2 !bg-transparent w-full !text-white !text-lg !h-auto !py-3 font-semibold focus-visible:ring-0">
                                            <SelectValue placeholder="Code" />
                                            <RxCaretDown className="text-brand" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-[250px] overflow-y-auto">
                                            {countryCodes.length > 0 ? (
                                                countryCodes.map((c) => (
                                                    <SelectItem key={c.code} value={c.code}>
                                                        {c.name} {c.code}
                                                    </SelectItem>
                                                ))
                                            ) : (
                                                <SelectItem value="loading">Loading...</SelectItem>
                                            )}
                                        </SelectContent>

                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input
                                        placeholder="Phone Number"
                                        className="border-0 text-center bg-white focus-visible:ring-0 text-dark !text-lg h-auto py-3 font-semibold"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="border-0 text-center bg-white focus-visible:ring-0 text-dark !text-lg h-auto py-3 font-semibold"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    className="border-0 text-center bg-white focus-visible:ring-0 text-dark !text-lg h-auto py-3 font-semibold"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Checkboxes */}
                <div className="space-y-2 pt-2">
                    <FormField
                        control={form.control}
                        name="agreeToTerms"
                        render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="data-[state=checked]:bg-brand data-[state=checked]:text-dark border-brand"
                                    />
                                </FormControl>
                                <label className="text-base font-semibold text-white">
                                    I agree to the{" "}
                                    <span className="text-brand underline hover:text-brand/80 transition underline-offset-4">
                                        Terms & Privacy Policy
                                    </span>
                                </label>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="emailUpdates"
                        render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="data-[state=checked]:bg-brand data-[state=checked]:text-dark border-brand"
                                    />
                                </FormControl>
                                <label className="text-base font-semibold text-white">
                                    Sign me up for email updates!
                                </label>
                            </FormItem>
                        )}
                    />
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-brand text-dark text-lg h-auto py-3.5 font-bold hover:bg-brand/80 transition disabled:opacity-50"
                >
                    {form.formState.isSubmitting ? "Signing up..." : "Sign Up"}
                </Button>
            </form>
        </Form>
    )
}
