"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const feedbackSchema = z.object({
    feedback: z
        .string()
        .min(10, "Please enter at least 10 characters of feedback."),
})

const emailSchema = z.object({
    email: z.string().email("Please enter a valid email address."),
})

export default function FeedbackForm({ setOpen }: { setOpen: (open: boolean) => void }) {
    const [step, setStep] = useState<1 | 2>(1)
    const [feedbackValue, setFeedbackValue] = useState<string>("")

    const feedbackForm = useForm<z.infer<typeof feedbackSchema>>({
        resolver: zodResolver(feedbackSchema),
        defaultValues: { feedback: "" },
    })

    const emailForm = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: { email: "" },
    })

    const handleNext = (values: z.infer<typeof feedbackSchema>) => {
        setFeedbackValue(values.feedback)
        setStep(2)
    }

    const handleSubmit = (values: z.infer<typeof emailSchema>) => {
        const payload = {
            feedback: feedbackValue,
            email: values.email,
        }

        console.log("Feedback submitted:", payload)

        feedbackForm.reset()
        emailForm.reset()
        setStep(1)
        setOpen(false) // ✅ closes modal
    }


    return (
        <div>
            <div className="space-y-8">
                {step === 1 && (
                    <Form {...feedbackForm}>
                        <form
                            onSubmit={feedbackForm.handleSubmit(handleNext)}
                            className="space-y-6"
                        >
                            <div className="max-w-3xl">
                                <h5 className="font-bold text-lg md:text-xl lg:text-2xl">
                                    1. Share your feedback with us!
                                </h5>
                                <p className="text-sm md:text-base lg:text-lg font-semibold">
                                    Have any feedback about the website, ideas for new platform features,
                                    or bugs you have run into? We want to hear from you!
                                </p>
                            </div>

                            <FormField
                                control={feedbackForm.control}
                                name="feedback"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Type your feedback here..."
                                                className="font-bold p-5 resize-none border-white/30 max-w-4xl text-dark bg-white min-h-[140px] text-base focus-visible:ring-0"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-brand text-sm" />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                size="lg"
                                disabled={feedbackForm.formState.isSubmitting}
                                className="w-fit bg-brand text-dark text-base font-bold h-12 hover:bg-brand/80 transition disabled:opacity-50"
                            >
                                Send Message
                            </Button>
                        </form>
                    </Form>
                )}

                {step === 2 && (
                    <Form {...emailForm}>
                        <form
                            onSubmit={emailForm.handleSubmit(handleSubmit)}
                            className="space-y-6"
                        >

                            <div className="max-w-3xl">
                                <h5 className="font-bold text-lg md:text-xl lg:text-2xl">
                                    2. What is your email?
                                </h5>
                                <p className="text-sm md:text-base lg:text-lg font-semibold">
                                    Where should we contact you back?
                                </p>
                            </div>

                            <FormField
                                control={emailForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="name@email.com"
                                                className="bg-white font-bold text-dark h-12 max-w-4xl text-base focus-visible:ring-0"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-brand text-sm" />
                                    </FormItem>
                                )}
                            />


                            <Button
                                type="submit"
                                disabled={emailForm.formState.isSubmitting}
                                className="w-fit bg-brand text-dark text-base font-bold h-12 hover:bg-brand/80 transition disabled:opacity-50"
                            >
                                {emailForm.formState.isSubmitting ? "Submitting..." : "Submit"}
                            </Button>

                        </form>
                    </Form>
                )}
            </div>

            {/* 🔽 ARROW BUTTONS NOW WORK */}
            <div className="mt-40 flex items-center justify-end gap-3">
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => {
                        if (step === 2) setStep(1)
                    }}
                    disabled={step === 1}
                    className={step === 1 ? 'border-brand text-brand bg-transparent transition' : 'border-brand text-dark bg-brand transition'}
                >
                    <FaChevronLeft />
                </Button>

                <Button
                    size="icon"
                    onClick={() => {
                        if (step === 1) {
                            // Trigger form validation before moving next
                            feedbackForm.handleSubmit(handleNext)()
                        } else if (step === 2) {
                            // Trigger final submit
                            emailForm.handleSubmit(handleSubmit)()
                        }
                    }}
                    className={step !== 1 ? 'border-brand border text-brand bg-transparent transition' : 'border-brand text-dark bg-brand transition hover:bg-brand'}
                >
                    <FaChevronRight />
                </Button>
            </div>
        </div>
    )
}
