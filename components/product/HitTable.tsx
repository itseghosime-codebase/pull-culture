import React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface HitEntry {
    player: string
    card: string
    hit: string
}

interface HitTableProps {
    title?: string
    data: HitEntry[]
    onRowClick?: (row: HitEntry) => void
}

export default function HitTable({ title = "Hit List", data, onRowClick }: HitTableProps) {
    return (
        <div className="w-full overflow-x-auto space-y-4 mb-3">
            {title && (
                <div className="w-fit bg-brand px-4 py-2 sm:px-6 sm:py-3 font-black text-lg sm:text-2xl text-dark rounded-md">
                    {title}
                </div>
            )}

            <Table className="min-w-[500px] sm:min-w-full">
                <TableHeader>
                    <TableRow className="border-b-2 border-[#3F3F3F] hover:bg-transparent">
                        <TableHead className="px-2 py-1 sm:px-4 sm:py-2 md:w-[250px] text-sm sm:text-base text-brand font-semibold">
                            Player
                        </TableHead>
                        <TableHead className="px-2 py-1 sm:px-4 sm:py-2 max-w-[200px] sm:max-w-[400px] border-x-2 border-[#3F3F3F] text-sm sm:text-base text-brand font-semibold">
                            Card
                        </TableHead>
                        <TableHead className="px-2 py-1 sm:px-4 sm:py-2 md:w-[80px] text-sm sm:text-base text-brand font-semibold text-center">
                            Hit %
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody className="border-0 border-y-2 border-[#3F3F3F]">
                    {data.length > 0 ? (
                        data.map((row, i) => (
                            <TableRow
                                key={i}
                                onClick={() => onRowClick?.(row)}
                                className="hover:bg-white/10 transition border-b-2 border-[#3F3F3F]"
                            >
                                <TableCell className="px-2 py-2 sm:px-4 sm:py-3 text-white text-sm sm:text-base font-semibold">
                                    {row.player}
                                </TableCell>
                                <TableCell className="px-2 py-2 sm:px-4 sm:py-3 text-white text-sm sm:text-base font-semibold truncate max-w-[150px] sm:max-w-[400px]">
                                    {row.card}
                                </TableCell>
                                <TableCell className="px-2 py-2 sm:px-4 sm:py-3 text-brand text-sm sm:text-base font-semibold text-center">
                                    {row.hit}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow className="hover:bg-transparent">
                            <TableCell
                                colSpan={3}
                                className="text-center py-3 text-[#A9A9A9] font-semibold border-t border-[#3F3F3F]"
                            >
                                No data available
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
