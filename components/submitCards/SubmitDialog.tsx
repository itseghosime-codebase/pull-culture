"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { useSidebar } from "../ui/sidebar"
import SubmitForm from "./SubmitForm"
import { Button } from "../ui/button"

export default function SubmitDialog() {
    const { open: sidebarOpen } = useSidebar()
    const [open, setOpen] = useState(false) // ✅ control modal state

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="mt-auto rounded-full gap-4 bg-brand transition hover:bg-brand/80 text-dark h-12 font-bold text-base flex items-center justify-center"
                >
                    Submit Cards
                </Button>
            </DialogTrigger>

            <DialogContent
                onInteractOutside={(e) => e.preventDefault()} // prevents accidental close
                className={`${sidebarOpen
                    ? "md:!max-w-[calc(100vw-18rem)] md:!left-[18rem] md:translate-x-0"
                    : "!max-w-screen"
                    } w-full bg-card min-h-[70vh] text-white rounded-3xl border-none md:px-10 max-h-[80vh] overflow-y-auto`}
            >
                <DialogHeader>
                    <DialogTitle>
                        <Image
                            src="/assets/logo/HYP3-LOGO-ICON.svg"
                            alt="Logo Icon"
                            width={55}
                            height={55}
                        />
                    </DialogTitle>
                </DialogHeader>

                <div className="md:px-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline decoration-[3px] underline-offset-8 font-black text-brand mb-20 mt-10">
                        SUBMIT CARDS
                    </h2>

                    {/* ✅ Pass the setOpen function */}
                    <SubmitForm setOpen={setOpen} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
