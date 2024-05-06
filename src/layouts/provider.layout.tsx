'use client'

import { PackageProvider } from "@/providers/package-provider";

export function ProviderLayout({ children }: { children: React.ReactNode }) {
    return (
        <PackageProvider>
            {children}
        </PackageProvider>
    );
}