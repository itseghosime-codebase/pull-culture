"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useSidebar } from "../ui/sidebar";
import { useEffect, useState } from "react";

interface LeaderboardUser {
    image: string;
    name: string;
    points: number;
    prize: string;
}

interface LeaderboardDisplayProps {
    data: LeaderboardUser[];
}

export default function LeaderboardDisplay({ data }: LeaderboardDisplayProps) {
    const topThree = data.slice(0, 3);
    const { open: sidebarOpen } = useSidebar();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // ✅ Prevent mismatch by not rendering dynamic layout until mounted
    if (!mounted) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="w-full text-center">
            <motion.div
                className={cn(
                    "flex justify-center items-end flex-wrap lg:flex-nowrap transition-all duration-300 ease-in-out",
                    sidebarOpen
                        ? "gap-4 md:gap-5 lg:gap-6 md:flex-wrap xl:gap-16"
                        : "gap-4 md:gap-7 lg:gap-12 md:flex-nowrap"
                )}
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {topThree.map((user, index) => {
                    const isFirst = index === 0;
                    const isSecond = index === 1;

                    const heightClass = isFirst
                        ? "h-[400px] md:h-[550px] lg:h-[650px]"
                        : isSecond
                            ? "h-[450px] md:h-[500px] lg:h-[600px]"
                            : "h-[400px] md:h-[450px] lg:h-[560px]";

                    const orderClass = cn(
                        index === 0 && "order-1 lg:order-2",
                        index === 1 && "order-2 lg:order-1",
                        index === 2 && "order-3 lg:order-3"
                    );

                    const widthClass = sidebarOpen
                        ? "w-[45%] lg:w-[220px] xl:w-auto"
                        : "w-[140px] md:w-[240px] lg:w-[260px]";

                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                // delay: index * 0.2,
                            }}
                            style={{ willChange: "transform, opacity" }}
                            className={cn(
                                "relative flex flex-col justify-start text-center rounded-3xl px-4 sm:px-6 pb-8 transition-all duration-300",
                                heightClass,
                                widthClass,
                                orderClass,
                                isFirst && "scale-105 w-3xs md:w-auto",
                                sidebarOpen && isFirst && "md:!w-[65%] lg:!w-auto",
                                "after:absolute after:inset-x-0 after:top-28 after:bottom-0 after:w-full after:rounded-t-4xl after:z-0 after:bg-gradient-to-b after:from-card after:to-dark after:to-90%"
                            )}
                        >
                            <div className="z-10">
                                {/* 🏅 User Image + Medal */}
                                <div className="relative flex justify-center mb-8 sm:mb-10">
                                    <Image
                                        src={user.image}
                                        alt={user.name}
                                        width={160}
                                        height={160}
                                        className="rounded-3xl border-[3px] border-white object-cover"
                                    />
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                                        <Image
                                            src={
                                                isFirst
                                                    ? "/assets/leaderboard/gold.png"
                                                    : isSecond
                                                        ? "/assets/leaderboard/silver.png"
                                                        : "/assets/leaderboard/bronze.png"
                                            }
                                            alt="Trophy"
                                            draggable={false}
                                            className="h-full w-full object-contain"
                                            height={48}
                                            width={48}
                                            sizes="100%"
                                        />
                                    </div>
                                </div>

                                {/* 👤 User Info */}
                                <div className="space-y-1">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand">
                                        {user.name}
                                    </h3>
                                    <p className="text-white font-bold text-sm md:text-base lg:text-lg">
                                        Points: {user.points.toLocaleString()}
                                    </p>
                                </div>

                                {/* 🎁 Prize Section */}
                                <div className="flex flex-col items-center gap-3 mt-4 text-center text-xs md:text-sm lg:text-lg max-w-[240px] mx-auto">
                                    <div className="h-0.5 w-full max-w-[200px] bg-brand" />
                                    <div>
                                        <p className="text-brand text-sm font-bold">Prize</p>
                                        <p className="font-semibold text-white">{user.prize}</p>
                                    </div>
                                    <div className="h-0.5 w-full max-w-[200px] bg-brand" />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
