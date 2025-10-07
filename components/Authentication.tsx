"use client"

import React, { useState } from "react"
import { Login } from "./onboarding/Login"
import { Signin } from "./onboarding/Signin"

export default function Authentication() {
    const [activeModal, setActiveModal] = useState<"login" | "signup" | null>(null)

    return (
        <div className="flex gap-2 items-center">
            {/* Pass down shared state + handlers */}
            <Login
                isOpen={activeModal === "login"}
                onOpenChange={(open) => setActiveModal(open ? "login" : null)}
                onSwitchToSignup={() => setActiveModal("signup")}
            />
            <Signin
                isOpen={activeModal === "signup"}
                onOpenChange={(open) => setActiveModal(open ? "signup" : null)}
                onSwitchToLogin={() => setActiveModal("login")}
            />
        </div>
    )
}
