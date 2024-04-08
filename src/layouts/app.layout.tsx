import { Header } from "@/components/ui/header";
import React from "react";

interface ILayoutFragmentProps {
    children: React.ReactNode
}

export default function AppLayoutFragment({ children }: ILayoutFragmentProps) {
    return (
        <>
            <Header />
            <main id="main-content">
                {children}
            </main>
        </>
    );
}