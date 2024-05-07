import { createContext, useCallback, useContext, useState } from "react";

const PackageContext = createContext({});

export const PackageProvider = ({ children }: { children: React.ReactNode }) => {
    const [productPackage, setPackage] = useState({
        payment_id: '',
        card_id: '',
        price: 0,
        promo_price: 0,
    });

    const handlePackage = useCallback((productPackage: { price: number, promo_price: number, card_id: string, payment_id: string }) => {
        setPackage(productPackage);
    }, []);

    return (
        <PackageContext.Provider value={{ productPackage, handlePackage }}>
            {children}
        </PackageContext.Provider>
    );
}

export const usePackageContext = () => useContext(PackageContext);