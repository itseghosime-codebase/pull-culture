"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SignInIcon } from "@/Icons/Index"
import Image from "next/image"
import Google from "./buttons/Google"
import Apple from "./buttons/Apple"
import LoginForm from "./LoginForm"
import Link from "next/link"

export function Login({
    isOpen,
    onOpenChange,
    onSwitchToSignup,
}: {
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
    onSwitchToSignup?: () => void
}) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button
                    onClick={() => onOpenChange?.(true)}
                    className="bg-white grow rounded-r-none text-black hover:bg-brand font-bold text-sm py-3 px-3 h-auto"
                    size={"lg"}
                >
                    <SignInIcon className={'[&>svg]:size-8'} />
                    Log in
                </Button>
            </DialogTrigger>

            <DialogContent
                className="sm:max-w-xl bg-dark rounded-3xl border-0 px-4 md:px-10 text-white max-h-[85vh] overflow-y-scroll"
                onInteractOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
            >
                <DialogHeader className="items-center gap-3 border-b-2 pb-4 mb-2 border-brand">
                    <Image
                        src={"/assets/logo/pull_culture.svg"}
                        alt="Logo"
                        width={280}
                        height={70}
                        className="mx-auto"
                    />
                    <DialogTitle className="uppercase px-5 py-4 text-4xl font-black text-black bg-brand w-fit">
                        LOGIN
                    </DialogTitle>
                    <DialogDescription className="font-bold text-lg text-[#A9A9A9]">
                        Not registered?{" "}
                        <Button
                            onClick={() => {
                                onOpenChange?.(false)
                                onSwitchToSignup?.()
                            }}
                            variant="ghost"
                            className="text-brand underline !text-lg px-0 hover:bg-transparent hover:text-brand/80 transition underline-offset-4 focus-visible:ring-0 font-bold"
                        >
                            Sign Up
                        </Button>
                    </DialogDescription>
                </DialogHeader>

                <Google />
                <Apple />

                <LoginForm />

                <DialogFooter className="border-t-2 border-brand pt-3">
                    <div className="text-center w-full">
                        <p className="text-base md:text-lg font-bold text-[#A9A9A9]">
                            By logging in I agree to the{" "}
                            <Link
                                href="#"
                                className="text-brand underline hover:text-brand/80 transition underline-offset-4"
                            >
                                Terms
                            </Link>{" "}
                            &{" "}
                            <Link
                                href="#"
                                className="text-brand underline hover:text-brand/80 transition underline-offset-4"
                            >
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
