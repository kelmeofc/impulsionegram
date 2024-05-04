'use client'

import { createContext, useState } from "react";

export const PackageContext = createContext({
    package: {
        price: 0,
        promo_price: 0,
        name: '',
    },
    state: {
        isPackage: {} as unknown,
        setIsPackage: (() => { }) as any
    }
});

export function PackageContextComponent({
    children
}: { children: React.ReactNode }) {
    const [isPackage, setIsPackage] = useState();

    return (
        <PackageContext.Provider value={{
            package: {
                name: '',
                price: 0,
                promo_price: 0,
            },
            state: {
                isPackage,
                setIsPackage,
            }
        }}>
            {children}
        </PackageContext.Provider>
    )
}