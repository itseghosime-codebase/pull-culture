"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// 🧩 Zod Schema
const newsletterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
})

export default function Newsletter() {
    const [submitted, setSubmitted] = useState(false)

    const form = useForm<z.infer<typeof newsletterSchema>>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit(values: z.infer<typeof newsletterSchema>) {
        // You can replace this with an API call
        console.log("Newsletter signup:", values)
        setSubmitted(true)
        form.reset()
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <div className='max-w-sm font-bold text-center'>
            <h3 className='text-brand text-2xl'>Get Updated</h3>
            <p className='text-xs text-white text-pretty'>Sign-Up to get notified and be the first in line for rare pack drops, new marketplace cards, and members-only offers.</p>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col sm:flex-row items-center gap-3 mt-5"
                >
                    {/* Email Input */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex-1 w-full">
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-white text-dark !py-2 !h-auto font-medium border-0 !text-xl focus-visible:ring-0 px-4 rounded-lg placeholder:text-gray-400"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-xs text-red-400" />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        size={'lg'}
                        disabled={form.formState.isSubmitting}
                        className="bg-brand text-dark font-bold px-6 !py-3 !h-auto rounded-lg hover:bg-brand/80 transition w-full sm:w-auto"
                    >
                        {submitted
                            ? "Subscribed ✓"
                            : form.formState.isSubmitting
                                ? "Subscribing..."
                                : "Sign Up"}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

