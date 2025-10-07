import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

interface User {
    username: string;
    image?: string;
}

interface AuthenticatedProps {
    user: User;
}

export default function Authenticated({ user }: AuthenticatedProps) {
    return (
        <div className="flex items-center justify-between">
            <Link href={`/profile/${user.username}`}>
                <div className="flex items-center gap-3">
                    <Image
                        src={user.image || "/assets/users/user-01.png"}
                        alt={user.username}
                        height={40}
                        width={40}
                        className="h-10 w-10 rounded-lg border-2 border-brand"
                    />
                    <div className="text-sm font-semibold text-white text-left">
                        <h6>Welcome</h6>
                        <h6>{user.username}!</h6>
                    </div>
                </div>
            </Link>
            <Link href={'/'} className="rounded-lg text-xl border-2 border-brand h-9 w-9 flex items-center justify-center text-white hover:text-brand/80 hover:border-brand/80 transition">
                <MdOutlineShoppingCart />
            </Link>
        </div>
    );
}
