import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils"; // optional helper for conditional classes
import { Skeleton } from "@/components/ui/skeleton";

interface RecentCardProps {
  imageSrc?: string;
  title?: string;
  pack?: string;
  rank?: string;
  timeStamp?: string;
  price?: number;
  onViewSale?: () => void;
  isLoading?: boolean;
  provablyFair?: boolean;
  owner?: string;
}

export default function RecentCard({
  imageSrc,
  title,
  price,
  pack,
  rank,
  timeStamp,
  onViewSale,
  isLoading = false,
  provablyFair,
  owner
}: RecentCardProps) {
  return (
    <div
      className={cn(
        "flex items-center w-full bg-dark/40 backdrop-blur-sm rounded-xl transition-all duration-200 shadow-md",
        isLoading && "animate-pulse"
      )}
    >
      {/* Image */}
      <div className="px-4 py-3 flex-shrink-0">
        {isLoading ? (
          <Skeleton className="w-[63px] h-[108px] rounded-md" />
        ) : (
          <Image
            src={imageSrc || "/placeholder.png"}
            alt={title || "Pack Card Image"}
            width={63}
            height={108}
            className="object-contain object-center rounded-md border border-brand/30"
          />
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between flex-grow h-full pt-3">
        <div className="text-xs font-medium text-white px-4 space-y-1">
          {isLoading ? (
            <>
              <Skeleton className="h-3 w-1/2 rounded" />
              <Skeleton className="h-3 w-1/3 rounded" />
              <Skeleton className="h-3 w-1/4 rounded" />
            </>
          ) : (
            <>
              <h5 className="font-bold truncate">{title || "Untitled Card"}</h5>
              <h6 className="text-white">{pack}</h6>
              <h6 className="text-white">{rank}</h6>
            </>
          )}
        </div>

        <div className="px-4 mt-1">
          {
            provablyFair && !isLoading && (
              <div className="border-t-2 border-brand text-xs py-0.5">
                <p>Buyer: <strong className="text-brand">@{owner}</strong></p>
              </div>
            )
          }
        </div>

        <div className="h-0.5 bg-brand mb-1 mx-4 rounded-full" />

        <div className="flex items-center justify-between px-4">
          {isLoading ? (
            <>
              <Skeleton className="h-3 w-10 rounded" />
              <Skeleton className="h-2 w-8 rounded" />
            </>
          ) : (
            <>
              <h4 className="text-brand font-bold">${price ?? "—"}</h4>
              <p className="text-[10px] text-white">{timeStamp}</p>
            </>
          )}
        </div>



        {isLoading ? (
          <Skeleton className="w-full rounded-tl-lg rounded-br-lg py-2 mt-1" />
        ) : (
          <button
            onClick={onViewSale}
            className="text-dark bg-brand w-full rounded-tl-lg rounded-br-lg py-2 text-xs font-medium mt-1 hover:opacity-90 transition-all duration-150"
          >
            View Sale
          </button>
        )}
      </div>
    </div>
  );
}
