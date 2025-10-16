"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RxCaretDown } from "react-icons/rx"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { addressSchema } from "./SubmitForm"
import { z } from "zod"
import { Country, State, ICountry, IState } from "country-state-city"

// ✅ Infer address form type directly from schema
type AddressFormValues = z.infer<typeof addressSchema>

interface AddressFormProps {
    initialData?: AddressFormValues | null
    onSave: (data: AddressFormValues) => void
}

export default function AddressForm({ initialData, onSave }: AddressFormProps) {
    const countries: ICountry[] = Country.getAllCountries()
    const [selectedCountry, setSelectedCountry] = React.useState<string>("")
    const [states, setStates] = React.useState<IState[]>([])

    const addressForm = useForm<AddressFormValues>({
        resolver: zodResolver(addressSchema),
        defaultValues: initialData || {
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

    // ✅ When selected country changes, update the state list
    React.useEffect(() => {
        if (selectedCountry) {
            const stateList = State.getStatesOfCountry(selectedCountry)
            setStates(stateList)
        } else {
            setStates([])
        }
    }, [selectedCountry])

    // ✅ When initial data changes (like when user goes back), reset form
    React.useEffect(() => {
        if (initialData) {
            addressForm.reset(initialData)

            // ✅ If country exists in saved data, rehydrate dependent data
            if (initialData.country) {
                setSelectedCountry(initialData.country)
                const stateList = State.getStatesOfCountry(initialData.country)
                setStates(stateList)
            }
        }
    }, [initialData, addressForm])


    return (
        <Form {...addressForm}>
            <form
                onSubmit={addressForm.handleSubmit((data) => {
                    localStorage.setItem("addressForm", JSON.stringify(data))
                    onSave(data)
                })}
                className="max-w-4xl grid gap-4 md:grid-cols-2 mt-6"
            >
                {/* First Name */}
                <FormField
                    control={addressForm.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-sm md:text-base">First Name*</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="First Name"
                                    className="font-bold p-5 h-12 border-white/30 text-dark bg-white text-base focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-brand text-sm" />
                        </FormItem>
                    )}
                />

                {/* Last Name */}
                <FormField
                    control={addressForm.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-sm md:text-base">Last Name*</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Last Name"
                                    className="font-bold p-5 h-12 border-white/30 text-dark bg-white text-base focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-brand text-sm" />
                        </FormItem>
                    )}
                />

                {/* Address */}
                <FormField
                    control={addressForm.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-sm md:text-base">Address*</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Address Line 1"
                                    className="font-bold p-5 h-12 border-white/30 text-dark bg-white text-base focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-brand text-sm" />
                        </FormItem>
                    )}
                />

                {/* Address 2 (optional) */}
                <FormField
                    control={addressForm.control}
                    name="address2"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-sm md:text-base">Address 2</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Address Line 2"
                                    className="font-bold p-5 h-12 border-white/30 text-dark bg-white text-base focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-brand text-sm" />
                        </FormItem>
                    )}
                />

                {/* City & State */}
                <FormField
                    control={addressForm.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-sm md:text-base">City*</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="City"
                                    className="font-bold p-5 h-12 border-white/30 text-dark bg-white text-base focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-brand text-sm" />
                        </FormItem>
                    )}
                />

                {/* State / Province */}
                <FormField
                    control={addressForm.control}
                    name="state"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-sm md:text-base">State / Province*</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    disabled={!selectedCountry || states.length === 0}
                                >
                                    <SelectTrigger className="border-2 bg-white w-full text-dark text-base font-bold !h-12 focus-visible:ring-0">
                                        <SelectValue placeholder={!selectedCountry ? "Select a country first" : "Select State"} />
                                        <RxCaretDown className="text-dark size-6" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-[250px] overflow-y-auto">
                                        {states.length > 0 ? (
                                            states.map((state) => (
                                                <SelectItem key={state.isoCode} value={state.name}>
                                                    {state.name}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <div className="p-2 text-sm text-muted-foreground">No states available</div>
                                        )}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage className="text-brand text-sm" />
                        </FormItem>
                    )}
                />

                {/* Zip & Country */}
                <FormField
                    control={addressForm.control}
                    name="zip"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-sm md:text-base">ZIP / Postal Code*</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Zip Code"
                                    className="font-bold p-5 h-12 border-white/30 text-dark bg-white text-base focus-visible:ring-0"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-brand text-sm" />
                        </FormItem>
                    )}
                />

                {/* Country / Region */}
                <FormField
                    control={addressForm.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-sm md:text-base">Country / Region*</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={(val) => {
                                        field.onChange(val)
                                        setSelectedCountry(val)
                                        addressForm.setValue("state", "")
                                    }}
                                    value={field.value}
                                >
                                    <SelectTrigger className="border-2 bg-white w-full text-dark text-base font-bold !h-12 focus-visible:ring-0">
                                        <SelectValue placeholder="Select Country" />
                                        <RxCaretDown className="text-dark size-6" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-[250px] overflow-y-auto">
                                        {countries.map((country) => (
                                            <SelectItem key={country.isoCode} value={country.isoCode}>
                                                {country.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage className="text-brand text-sm" />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    size="lg"
                    className="w-fit bg-brand text-dark text-base font-bold h-12 hover:bg-brand/80 transition"
                >
                    CONTINUE
                </Button>
            </form>
        </Form>
    )
}
