"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SignUpIcon } from "@/Icons/Index"
import Image from "next/image"
import Google from "./buttons/Google"
import Apple from "./buttons/Apple"
import SignupForm from "./SigninForm"

export function Signin({
    isOpen,
    onOpenChange,
    onSwitchToLogin,
}: {
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
    onSwitchToLogin?: () => void
}) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button
                    onClick={() => onOpenChange?.(true)}
                    className="hover:bg-white rounded-l-none grow text-black bg-brand font-bold text-sm py-3 px-3 h-auto"
                    size={"lg"}
                >
                    <SignUpIcon className={'[&>svg]:size-8'} />
                    Sign Up
                </Button>
            </DialogTrigger>

            <DialogContent
                className="sm:max-w-xl bg-dark rounded-3xl border-0 px-4 md:px-10 text-white max-h-[85vh] overflow-y-scroll"
                onInteractOutside={(e) => e.preventDefault()} // prevent closing on background click
                onEscapeKeyDown={(e) => e.preventDefault()}   // prevent closing on Esc
            >
                <DialogHeader className="items-center gap-3">
                    <Image
                        src={"/assets/logo/pull_culture.svg"}
                        alt="Logo"
                        width={280}
                        height={70}
                        className="mx-auto"
                    />
                    <DialogTitle className="uppercase px-5 py-4 text-4xl font-black text-black bg-brand w-fit">
                        SIGN UP
                    </DialogTitle>
                    <DialogDescription className="font-bold text-lg text-[#A9A9A9]">
                        Already registered?{" "}
                        <Button
                            onClick={() => {
                                onOpenChange?.(false)
                                onSwitchToLogin?.()
                            }}
                            variant="ghost"
                            className="text-brand underline !text-lg px-0 hover:bg-transparent hover:text-brand/80 transition underline-offset-4 focus-visible:ring-0 font-bold"
                        >
                            Log In
                        </Button>
                    </DialogDescription>
                </DialogHeader>

                <div className="border-y-2 border-brand flex flex-col gap-5 py-5">
                    <Google />
                    <Apple />
                </div>

                <SignupForm />
            </DialogContent>
        </Dialog>
    )
}
