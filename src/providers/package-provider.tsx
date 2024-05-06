import { createContext, useCallback, useContext, useState } from "react";

const PackageContext = createContext({});

export const PackageProvider = ({ children }: { children: React.ReactNode }) => {
    const [productPackage, setPackage] = useState({
        id: '',
        price: 0,
        promo_price: 0,
    });

    const handlePackage = useCallback((productPackage: { price: number, promo_price: number, id: string }) => {
        setPackage(productPackage);
    }, []);

    return (
        <PackageContext.Provider value={{ productPackage, handlePackage }}>
            {children}
        </PackageContext.Provider>
    );
}

export const usePackageContext = () => useContext(PackageContext);