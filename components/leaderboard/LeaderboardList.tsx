"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

interface LeaderboardUser {
    name: string;
    points: number;
    prize?: string;
    image: string;
}

interface LeaderboardListProps {
    data: LeaderboardUser[];
}

export default function LeaderboardList({ data }: LeaderboardListProps) {
    const users = data.slice(3, 20);

    const cardTransition = {
        duration: 0.45,
        ease: easeOut,
    };

    const staggerDelay = 0.08;

    return (
        <div className="space-y-3 mb-6 w-full px-2 sm:px-4">
            {users.map((user, i) => (
                <motion.div
                    key={user.name + i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: cardTransition.duration,
                        ease: cardTransition.ease,
                        delay: i * staggerDelay,
                    }}
                    viewport={{ once: true, amount: 0.15 }}
                    style={{ willChange: "transform, opacity" }}
                    className="
                        flex flex-col sm:flex-row justify-between items-start sm:items-center
                        py-3 px-4 sm:px-6 rounded-xl bg-card
                        text-sm md:text-base
                        gap-3 sm:gap-0
                        border border-white/10 hover:border-brand/40
                        transition-all duration-300
                    "
                >
                    {/* Left Section */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <span className="text-white font-semibold min-w-[30px] text-center">
                            #{i + 4}
                        </span>
                        <div className="flex items-center gap-3">
                            <Image
                                src={user.image}
                                alt={user.name}
                                width={40}
                                height={40}
                                className="rounded-lg w-10 h-10 object-cover"
                            />
                            <span className="text-brand font-semibold truncate">
                                {user.name}
                            </span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-wrap justify-between sm:justify-end w-full sm:w-auto gap-x-6 gap-y-1 text-white font-medium">
                        <p>
                            <span className="font-semibold">Points:</span>{" "}
                            <span className="text-brand font-bold">
                                {user.points.toLocaleString()}
                            </span>
                        </p>
                        {user.prize && (
                            <p>
                                <span className="font-semibold">Prize:</span>{" "}
                                <span className="text-brand font-bold">
                                    {user.prize}
                                </span>
                            </p>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
