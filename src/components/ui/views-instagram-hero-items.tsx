'use client'

import { usePackageContext } from "@/providers/package-provider";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ViewsInstagramHeroItems() {
    const packages: { payment_id: string, card_id: string, price: number, promo_price: number, views: string }[] = [{
        payment_id: '176387',
        card_id: 'DAZ175834',
        price: 37,
        promo_price: 67,
        views: '5.000',
    }, {
        payment_id: '176359',
        card_id: 'DDC175832',
        price: 14,
        promo_price: 22,
        views: '1.000',
    }, {
        payment_id: '176386',
        card_id: 'DWG175833',
        price: 27,
        promo_price: 28,
        views: '2.000',
    }, {
        payment_id: '176388',
        card_id: 'DQR175835',
        price: 97,
        promo_price: 147,
        views: '20.000',
    }, {
        payment_id: '176389',
        card_id: 'DTC175836',
        price: 157,
        promo_price: 197,
        views: '40.000',
    }, {
        payment_id: '176390',
        card_id: 'DQM175837',
        price: 257,
        promo_price: 317,
        views: '80.000',
    }, {
        payment_id: '176392',
        card_id: 'DUL175839',
        price: 497,
        promo_price: 647,
        views: '200.000',
    }, {
        payment_id: '176393',
        card_id: 'KCN252464',
        price: 997,
        promo_price: 1470,
        views: '500.000',
    }];

    const [activePackage, setActivePackage] = useState({ id: '' });
    const { handlePackage } = usePackageContext() as any;

    useEffect(() => {
        handlePackage({
            payment_id: packages[0].payment_id,
            card_id: packages[0].card_id,
            price: packages[0].price,
            promo_price: packages[0].promo_price,
        });
    }, []);

    return (
        <>
            {
                packages.map((_package, index: any) => {
                    index = String(index);

                    return (
                        <li
                            key={index}
                            className="relative pt-3"
                        >
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActivePackage({ id: index });
                                    handlePackage({
                                        payment_id: _package.payment_id,
                                        card_id: _package.card_id,
                                        price: _package.price,
                                        promo_price: _package.promo_price,
                                    })
                                }}
                            >
                                <div
                                    className="rounded-[30px] overflow-hidden border-[2px] relative z-[2]"
                                    style={{
                                        borderColor: activePackage.id == index ? '#4F008E' : '#F0E9FA'
                                    }}
                                >
                                    <div
                                        className="w-full flex items-center flex-col text-base font-bold py-7 gap-3"
                                        style={{
                                            color: activePackage.id == index ? '#ffffff' : '#1A002D',
                                            backgroundColor: activePackage.id == index ? '#4F008E' : '#F0E9FA',
                                        }}
                                    >
                                        <span className="flex items-center gap-2 text-2xl">
                                            <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 0.601562C8.93691 0.601562 4.34541 3.37162 0.957336 7.87097C0.680888 8.2396 0.680888 8.75459 0.957336 9.12319C4.34541 13.6279 8.93691 16.398 14 16.398C19.0631 16.398 23.6546 13.6279 27.0427 9.12863C27.3191 8.75999 27.3191 8.24501 27.0427 7.87638C23.6546 3.37162 19.0631 0.601562 14 0.601562ZM14.3632 14.0616C11.0022 14.273 8.22674 11.503 8.43818 8.13661C8.61163 5.3611 10.8613 3.11143 13.6368 2.93798C16.9978 2.72654 19.7733 5.49661 19.5618 8.86299C19.3829 11.6331 17.1333 13.8827 14.3632 14.0616ZM14.1951 11.4921C12.3846 11.606 10.8884 10.1152 11.0077 8.30465C11.0998 6.80846 12.3141 5.5996 13.8103 5.50205C15.6208 5.3882 17.117 6.87895 16.9977 8.68954C16.9002 10.1911 15.6859 11.4 14.1951 11.4921Z"
                                                    style={{
                                                        fill: activePackage.id == index ? "#ffffff" : '#1A002D',
                                                    }}
                                                />
                                            </svg>

                                            {_package.views}
                                        </span>

                                        <p className="w-[90px] text-center">Visualizações Reels</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })
            }
        </>
    );
}