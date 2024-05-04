'use client'

import Link from "next/link";
import { useState } from "react";

export function ViewsInstagramHeroItems() {
    const packages: { id?: any, price: number, promo_price: number, views: string }[] = [{
        price: 67,
        promo_price: 135,
        views: '5.000',
    }, {
        price: 17,
        promo_price: 32,
        views: '1.000',
    }, {
        price: 27,
        promo_price: 44,
        views: '2.000',
    }, {
        price: 37,
        promo_price: 54,
        views: '2.000',
    }, {
        price: 117,
        promo_price: 270,
        views: '40.000',
    }, {
        price: 0,
        promo_price: 0,
        views: '80.000',
    }, {
        price: 187,
        promo_price: 540,
        views: '200.000',
    }, {
        price: 297,
        promo_price: 997,
        views: '500.000',
    }];

    const [activePackage, setActivePackage] = useState({ id: '', package: {} });

    return (
        <>
            {
                packages.map((_package, index) => {
                    _package.id = index;
                    const id = _package.id;

                    return (
                        <li
                            key={id}
                            className="relative pt-3"
                        >
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActivePackage({ id, package: _package })
                                }}
                            >
                                <div
                                    className="rounded-[30px] overflow-hidden border-[2px] relative z-[2]"
                                    style={{
                                        borderColor: activePackage.id == id ? '#4F008E' : '#F0E9FA'
                                    }}
                                >
                                    <div
                                        className="w-full flex items-center flex-col text-base font-bold py-7 gap-3"
                                        style={{
                                            color: activePackage.id == id ? '#ffffff' : '#1A002D',
                                            backgroundColor: activePackage.id == id ? '#4F008E' : '#F0E9FA',
                                        }}
                                    >
                                        <span className="flex items-center gap-2 text-2xl">
                                            <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 0.601562C8.93691 0.601562 4.34541 3.37162 0.957336 7.87097C0.680888 8.2396 0.680888 8.75459 0.957336 9.12319C4.34541 13.6279 8.93691 16.398 14 16.398C19.0631 16.398 23.6546 13.6279 27.0427 9.12863C27.3191 8.75999 27.3191 8.24501 27.0427 7.87638C23.6546 3.37162 19.0631 0.601562 14 0.601562ZM14.3632 14.0616C11.0022 14.273 8.22674 11.503 8.43818 8.13661C8.61163 5.3611 10.8613 3.11143 13.6368 2.93798C16.9978 2.72654 19.7733 5.49661 19.5618 8.86299C19.3829 11.6331 17.1333 13.8827 14.3632 14.0616ZM14.1951 11.4921C12.3846 11.606 10.8884 10.1152 11.0077 8.30465C11.0998 6.80846 12.3141 5.5996 13.8103 5.50205C15.6208 5.3882 17.117 6.87895 16.9977 8.68954C16.9002 10.1911 15.6859 11.4 14.1951 11.4921Z"
                                                    style={{
                                                        fill: activePackage.id == id ? "#ffffff" : '#1A002D',
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