"use client"

import React, { useState } from "react"
import { z } from "zod"
import { useFieldArray, useForm } from "react-hook-form"
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
import { FiPlus } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { RxCaretDown } from "react-icons/rx"
import { Dashboard } from "@/Icons/Index"
import AddressForm from "./AddressForm"

const CardSchema = z.object({
    cards: z.array(
        z.object({
            cardDetails: z
                .string()
                .min(3, "Card details must be at least 3 characters long")
                .max(200, "Card details must not exceed 200 characters"),
            cardType: z.enum(["PSA", "CGC", "BGS", "SGC"], {
                message: "Please select a card type",
            }),
        })
    ),
})

export const addressSchema = z.object({
    firstName: z
        .string()
        .min(1, "First Name is required"),

    lastName: z
        .string()
        .min(1, "Last Name is required"),

    address: z
        .string()
        .min(1, "Address is required"),

    address2: z
        .string()
        .optional(),

    city: z
        .string()
        .min(1, "City is required"),

    state: z
        .string()
        .min(1, "State / Province is required").optional(),

    zip: z
        .string()
        .min(1, "ZIP / Postal Code is required"),

    country: z
        .string()
        .min(1, "Country / Region is required"),
})




export default function SubmitForm({ setOpen }: { setOpen: (open: boolean) => void }) {
    const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1)
    const [quantity, setQuantity] = useState(1)
    const [showAddressForm, setShowAddressForm] = useState(false)
    const [addressData, setAddressData] = useState<z.infer<typeof addressSchema> | null>(null)
    const [submittedCards, setSubmittedCards] = useState<
        z.infer<typeof CardSchema>["cards"]
    >([])



    const CardType = ['PSA', 'CGC', 'BGS', 'SGC']

    const handleQuantity = (type: "add" | "subtract") => {
        setQuantity((prev) => (type === "add" ? prev + 1 : Math.max(1, prev - 1)))
    }

    const form = useForm<z.infer<typeof CardSchema>>({
        resolver: zodResolver(CardSchema),
        defaultValues: {
            cards: [{ cardDetails: "", cardType: "PSA" }],
        },
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "cards",
    })

    const addressForm = useForm<z.infer<typeof addressSchema>>({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
            country: "",
        },
    })


    const handleFinalSubmit = () => {
        // ✅ Get the full address data
        const addressDatas = addressData || addressForm.getValues()


        // ✅ Simple validation check
        if (!submittedCards.length) {
            alert("Please add at least one card before submitting.")
            return
        }

        if (!addressDatas.firstName || !addressDatas.lastName || !addressDatas.address || !addressDatas.city || !addressDatas.state || !addressDatas.zip || !addressDatas.country) {
            alert("Please complete your return address before submitting.")
            return
        }

        // ✅ Build final submission payload
        const submissionData = {
            cards: submittedCards,
            address: addressDatas,
            quantity,
        }

        console.log("✅ Final submission:", submissionData)

        // TODO: send this to your backend if needed
        // await fetch('/api/submit', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(submissionData),
        // })


        // Close modal or reset
        setOpen(false)
        setStep(1)
        form.reset()
        addressForm.reset()
        setSubmittedCards([])
        setQuantity(1)
    }



    return (
        <div>
            <div className="space-y-8">
                {step === 1 && (
                    <div
                        className="space-y-6"
                    >
                        <div className="max-w-3xl">
                            <h5 className="font-bold text-lg md:text-xl lg:text-2xl text-brand">
                                1. Accepted Grading Companies
                            </h5>
                            <p className="text-sm md:text-base lg:text-lg font-semibold">
                                We are currently only accepting cards from the following grading companies:
                            </p>
                        </div>

                        <ul className="list-disc font-black text-xl md:text-2xl lg:text-3xl list-inside">
                            {
                                CardType.map((item, index) => (
                                    <li key={index}> {item}</li>
                                ))
                            }
                        </ul>


                        <Button
                            onClick={() => setStep(2)}
                            size="lg"
                            className="w-fit bg-brand text-dark text-base font-bold h-12 hover:bg-brand/80 transition disabled:opacity-50"
                        >
                            I UNDERSTAND
                        </Button>
                    </div>
                )}

                {step === 2 && (
                    <div
                        className="space-y-6"
                    >

                        <div className="max-w-3xl">
                            <h5 className="font-bold text-lg md:text-xl lg:text-2xl text-brand">
                                2. Shipping Your Cards
                            </h5>
                            <p className="text-sm md:text-base lg:text-lg font-semibold">
                                Ship us your cards to sell to us directly, list in our marketplace or showcase in your collection!
                            </p>
                            <div className="bg-brand h-0.5 my-1.5" />
                            <p className="text-sm md:text-base lg:text-lg font-semibold">
                                Use this address when shipping your cards to us:

                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-black">
                                HYP3 INTAKE <br />
                                1234 N. HYP3 Rd. <br />
                                STE 123 <br />
                                San Antonio, TX <br />
                                78254
                            </h3>
                        </div>

                        <Button
                            onClick={() => setStep(3)}
                            className="w-fit bg-brand text-dark text-base font-bold h-12 hover:bg-brand/80 transition disabled:opacity-50"
                        >
                            CONTINUE
                        </Button>

                    </div>
                )}
                {step === 3 && (
                    <div className="space-y-6">
                        <div className="max-w-3xl">
                            <h5 className="font-bold text-lg md:text-xl lg:text-2xl text-brand">
                                3. How Many Graded Cards Are You Submitting & Vaulting?
                            </h5>
                            <p className="text-sm md:text-base lg:text-lg font-semibold">
                                We are currently only accepting cards from PSA, CGC, BGS & SGC.
                            </p>
                            <div className="bg-brand h-0.5 my-1.5" />
                        </div>

                        <div className="flex items-center rounded-md overflow-hidden text-dark font-bold mb-10">
                            <button
                                onClick={() => handleQuantity("subtract")}
                                className="px-2 flex items-center justify-center h-9 rounded-l-md bg-brand hover:bg-brand/80 text-xl sm:text-2xl"
                            >
                                −
                            </button>
                            <span className="py-3 px-6 text-xl sm:text-2xl border-[3px] rounded-lg flex items-center justify-center border-dark bg-white w-36">{quantity}</span>
                            <button
                                onClick={() => handleQuantity("add")}
                                className="px-2 flex items-center justify-center h-9 rounded-r-md bg-brand text-xl sm:text-2xl"
                            >
                                +
                            </button>
                        </div>

                        <Button
                            onClick={() => setStep(4)}
                            className="w-fit bg-brand text-dark text-base font-bold h-12 hover:bg-brand/80 transition disabled:opacity-50"
                        >
                            CONTINUE
                        </Button>
                    </div>
                )
                }

                {
                    step === 4 && (
                        <div className="space-y-6">
                            <div className="max-w-3xl">
                                <h5 className="font-bold text-lg md:text-xl lg:text-2xl text-brand">
                                    4. Enter Information About Your Graded Cards Being Submitted
                                </h5>
                                <p className="text-sm md:text-base lg:text-lg font-semibold">
                                    Please provide as much information as possible.
                                </p>
                                <div className="bg-brand h-0.5 my-1.5" />
                            </div>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit((data) => {
                                        setSubmittedCards(data.cards) // ✅ store cards in state
                                        setStep(5) // go to next step
                                    })}
                                    className="space-y-6"
                                >
                                    {fields.map((field, index) => (
                                        <div key={field.id} className="space-y-2">
                                            <p className="text-sm md:text-base font-semibold">
                                                Card {index + 1}
                                            </p>

                                            <div className="flex items-start flex-wrap w-full gap-4 max-w-5xl">
                                                {/* Card Details Input */}
                                                <FormField
                                                    control={form.control}
                                                    name={`cards.${index}.cardDetails`}
                                                    render={({ field }) => (
                                                        <FormItem className="grow">
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Enter Card Details Here"
                                                                    className="font-bold p-5 h-14 border-white/30 max-w-4xl text-dark bg-white text-base focus-visible:ring-0"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage className="text-brand text-sm" />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Card Type Select */}
                                                <FormField
                                                    control={form.control}
                                                    name={`cards.${index}.cardType`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Select
                                                                    onValueChange={field.onChange}
                                                                    defaultValue={field.value}
                                                                >
                                                                    <SelectTrigger className="border-2 bg-white lg:w-40 !text-dark !text-lg !h-14 !py-3 font-semibold focus-visible:ring-0">
                                                                        <SelectValue placeholder="Select Type" />
                                                                        <RxCaretDown className="text-dark size-6" />
                                                                    </SelectTrigger>
                                                                    <SelectContent className="max-h-[250px] overflow-y-auto">
                                                                        {CardType.map((item, index) => (
                                                                            <SelectItem key={index} value={item}>
                                                                                {item}
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                            </FormControl>
                                                            <FormMessage className="text-brand text-sm" />
                                                        </FormItem>
                                                    )}
                                                />
                                                {/* Optional remove button for each row */}
                                                {fields.length > 1 && (
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        className="text-red-500 border-none hover:bg-transparent hover:text-red-500 hover:opacity-75 h-14 text-2xl font-semibold"
                                                        onClick={() => remove(index)}
                                                    >
                                                        x
                                                    </Button>
                                                )}
                                            </div>
                                            <p className="text-sm md:text-base font-semibold">
                                                Ex. Year, Player Name, Set, Card Number, etc.
                                            </p>
                                        </div>
                                    ))}

                                    <div className="flex items-center gap-5">
                                        {/* Add Card Button */}
                                        <Button
                                            type="button"
                                            size="lg"
                                            onClick={() =>
                                                append({ cardDetails: "", cardType: "PSA" })
                                            }
                                            className="w-fit border-brand border-2 hover:text-white hover:bg-transparent text-brand font-bold h-12 bg-transparent transition"
                                        >
                                            <Dashboard className="size-6" />
                                            Add A Card
                                        </Button>

                                        {/* Continue Button */}
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-fit bg-brand text-dark text-base font-bold h-12 hover:bg-brand/80 transition"
                                        >
                                            CONTINUE
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    )
                }
                {step === 5 && (
                    <div className="space-y-6">
                        <div className="max-w-3xl">
                            <h5 className="font-bold text-lg md:text-xl lg:text-2xl text-brand">
                                5. Enter Your Return Address
                            </h5>
                            <p className="text-sm md:text-base lg:text-lg font-semibold">
                                Please select a return address from your account below. We will use this if we need to return any graded cards we do not accept.
                            </p>
                            <div className="bg-brand h-0.5 my-1.5" />
                        </div>

                        {/* 👇 Toggle State for showing address form */}
                        {

                            !showAddressForm && (
                                <Button
                                    type="button"
                                    size="lg"
                                    onClick={() => setShowAddressForm((prev) => !prev)}
                                    className="w-fit border-brand border-2 hover:text-white text-brand font-bold h-12 bg-transparent hover:bg-transparent transition"
                                >
                                    <FiPlus />
                                    {showAddressForm ? "Cancel" : "Add New Address"}
                                </Button>
                            )
                        }

                        {/* 👇 Address Form */}
                        {showAddressForm && (
                            <AddressForm
                                initialData={addressData || addressForm.getValues()}
                                onSave={(data: React.SetStateAction<{ firstName: string; lastName: string; address: string; city: string; state?: string; zip: string; country: string; address2?: string | undefined } | null>) => {
                                    setAddressData(data)
                                    setStep(6)
                                }}
                            />
                        )}
                    </div>
                )}

                {
                    step === 6 && (
                        <div className="space-y-6">
                            <div className="max-w-3xl">
                                <h5 className="font-bold text-lg md:text-xl lg:text-2xl text-brand">
                                    6. Review Order
                                </h5>
                                <p className="text-sm md:text-base lg:text-lg font-semibold">
                                    Please review your order below to verify everything is correct
                                </p>
                                <div className="bg-brand h-0.5 my-2.5" />
                                <h5 className="font-bold text-lg md:text-xl lg:text-2xl text-brand">
                                    Order Details
                                </h5>
                                <p className="text-sm md:text-base lg:text-lg font-semibold">
                                    Vault Graded Cards (x{submittedCards.length || quantity})
                                </p>
                                <div className="bg-brand h-0.5 my-1.5" />
                            </div>
                            <ul className="space-y-5">
                                {submittedCards.length > 0 ? (
                                    submittedCards.map((card, index) => (
                                        <li
                                            key={index}
                                            className="text-base md:text-lg text-white font-normal"
                                        >
                                            <p><span>#{index + 1} |</span> {card.cardDetails} {card.cardType}</p>
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-muted-foreground">No card details found...</p>
                                )}
                            </ul>
                            <Button
                                onClick={handleFinalSubmit}
                                size="lg"
                                className="w-fit bg-brand text-dark text-base font-bold h-12 hover:bg-brand/80 transition"
                            >
                                SUBMIT CARDS
                            </Button>
                        </div>
                    )
                }
            </div>

            {/* ⬅️➡️ Navigation */}
            <div className="mt-40 flex items-center justify-end gap-3">
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setStep((prev) => (prev > 1 ? (prev - 1) as typeof step : prev))}
                    disabled={step === 1}
                    className={step === 1 ? 'border-brand text-brand bg-transparent hover:bg-transparent' : 'border-brand text-dark hover:bg-brand bg-brand'}
                >
                    <FaChevronLeft />
                </Button>

                <Button
                    size="icon"
                    onClick={() => {
                        if (step < 6) {
                            setStep((prev) => (prev) as typeof step)
                        } else {
                            handleFinalSubmit()
                        }
                    }}
                    className="border-brand text-dark bg-brand hover:bg-brand/80"
                >
                    <FaChevronRight />
                </Button>
            </div>
        </div>
    )
}
