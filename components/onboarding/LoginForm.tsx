"use client"

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
import { useSessionStore } from "@/lib/store/useSessionStore"

// 🧩 Zod Schema
const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

export default function LoginForm() {
    const { login } = useSessionStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 🧠 Submit Handler
    async function onSubmit(values: z.infer<typeof formSchema>) {
        await login(values.email, values.password);
    }


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
            >
                {/* Email Field */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    className="border-0 text-center bg-white focus-visible:ring-0 text-dark !text-lg h-auto py-3 font-semibold"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password Field */}
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


                <div className="space-y-1">
                    {/* Login Button */}
                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-full bg-brand text-dark text-lg h-auto py-3.5 font-bold hover:bg-brand/80 transition disabled:opacity-50"
                    >
                        {form.formState.isSubmitting ? "Logging in..." : "Log In"}
                    </Button>
                    {/* Forgot Password */}
                    <div className="text-right">
                        <Button
                            type="button"
                            variant="link"
                            className="text-brand text-base md:text-lg font-semibold underline hover:text-white underline-offset-4 transition"
                            onClick={() => console.log("Forgot password clicked")}
                        >
                            Forgot password?
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}
