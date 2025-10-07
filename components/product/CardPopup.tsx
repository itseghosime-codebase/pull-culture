import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"

interface CardPopupProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    row: {
        player?: string
        card?: string
        imageSrc?: string
        name?: string
    } | null
}

export default function CardPopup({ open, onOpenChange, row }: CardPopupProps) {
    if (!row) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-card text-white border-0 !max-w-sm sm:max-w-md rounded-2xl overflow-hidden">


                {/* Card Image */}
                {row.imageSrc ? (
                    <div className="mt-4 flex justify-center">
                        <Image
                            src={row.imageSrc}
                            alt={row.name || row.card || "Card Image"}
                            width={280}
                            height={400}
                            className="rounded-lg object-contain"
                        />
                    </div>
                ) : (
                    <div className="mt-6 text-center font-bold text-xl">
                        No image available
                    </div>
                )}

                <DialogHeader className="!text-center px-5">
                    <DialogTitle className="text-lg md:text-xl lg:text-2xl font-bold text-brand">
                        {row.player || "Unknown Player"}
                    </DialogTitle>
                    <DialogDescription className="text-base md:text-lg lg:text-xl font-bold">
                        {row.card ? row.card + '- Auto PSA 10' : "No card description available."}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
