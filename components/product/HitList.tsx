'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ListIcon } from "@/Icons/Index"
import HitTable from "./HitTable"
import { mergedList } from "@/context/Content"
import CardPopup from "./CardPopup"
import React from "react"

export function HitList() {
    const [openSecond, setOpenSecond] = React.useState(false)
    const [selectedRow, setSelectedRow] = React.useState<any>(null)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="rounded-xl !px-5 gap-4 bg-brand transition hover:bg-brand/80 text-dark h-12 font-bold text-sm md:text-base flex items-center justify-center"
                >
                    <ListIcon className='size-6' />
                    View Hit List
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-6xl bg-card
             rounded-none md:!rounded-l-3xl border-none text-white max-h-[80vh] overflow-scroll py-8 px-12">
                <DialogHeader className="gap-0">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black">Basketball</h3>
                    <DialogTitle className="text-2xl md:text-3xl lg:text-4xl font-black">Ember Pack Hit List</DialogTitle>
                    <DialogDescription className="text-[#A9A9A9] font-bold text-sm md:text-base lg:text-lg">
                        Real-time updates every time a pack is pulled.
                    </DialogDescription>
                </DialogHeader>

                <HitTable title="GRAIL" data={mergedList.slice(0, 1)} onRowClick={(row) => {
                    setSelectedRow(row)
                    setOpenSecond(true)
                }} />
                <HitTable title="CHASERS" data={mergedList.slice(0, 5)} onRowClick={(row) => {
                    setSelectedRow(row)
                    setOpenSecond(true)
                }} />
                <HitTable title="SERIES" data={mergedList} onRowClick={(row) => {
                    setSelectedRow(row)
                    setOpenSecond(true)
                }} />



                <CardPopup
                    open={openSecond}
                    onOpenChange={setOpenSecond}
                    row={selectedRow}
                />
            </DialogContent>
        </Dialog>
    )
}
