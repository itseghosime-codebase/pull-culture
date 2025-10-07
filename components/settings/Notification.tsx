"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function Notification() {
    const options = [
        "Pack Drop Alerts",
        "New Auction",
        "New Features Added",
        "Auction Lost",
        "Marketplace",
        "Extended Bidding Live",
        "Product Updates",
        "Outbid",
    ];

    const [notifications, setNotifications] = React.useState<Record<string, boolean>>(
        Object.fromEntries(options.map((opt) => [opt, true]))
    );

    const toggleSwitch = (option: string) => {
        setNotifications((prev) => ({ ...prev, [option]: !prev[option] }));
    };

    const handleUnsubscribeAll = () => {
        const allOff = Object.fromEntries(options.map((opt) => [opt, false]));
        setNotifications(allOff);
        console.log("All unsubscribed:", allOff);
    };

    const handleSave = () => {
        console.log("Saved settings:", notifications);
    };

    return (
        <div className="space-y-6">
            <h5 className="text-white text-lg font-bold">Email Notifications</h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
                {options.map((option) => (
                    <div
                        key={option}
                        className="flex flex-row sm:items-center justify-between gap-2 sm:gap-0"
                    >
                        <Label htmlFor={option} className="text-white text-sm font-semibold">
                            {option}
                        </Label>
                        <Switch
                            id={option}
                            checked={notifications[option]}
                            onCheckedChange={() => toggleSwitch(option)}
                            className="
                                data-[state=checked]:bg-brand 
                                data-[state=unchecked]:bg-white 
                                relative transition-all duration-300
                            "
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 font-semibold">
                <Button
                    onClick={handleSave}
                    className="!text-base px-5 !h-11 bg-brand text-dark hover:bg-brand/80"
                >
                    Save
                </Button>

                <Button
                    onClick={handleUnsubscribeAll}
                    className="border-2 !h-auto gap-3 px-10 border-[#A9A9A9] bg-transparent hover:bg-transparent text-white hover:text-brand"
                    variant={"outline"}
                >
                    Unsubscribe from All
                </Button>
            </div>
        </div>
    );
}
