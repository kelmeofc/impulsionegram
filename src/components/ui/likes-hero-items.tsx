'use client'

import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export function LikesHeroItems() {
    const packages: { id?: any, price: number, promo_price: number, likes: string }[] = [{
        price: 67,
        promo_price: 135,
        likes: '2.500',
    }, {
        price: 17,
        promo_price: 32,
        likes: '250',
    }, {
        price: 27,
        promo_price: 44,
        likes: '500',
    }, {
        price: 37,
        promo_price: 54,
        likes: '1.000',
    }, {
        price: 117,
        promo_price: 270,
        likes: '5.000',
    }, {
        price: 0,
        promo_price: 0,
        likes: '7.500',
    }, {
        price: 187,
        promo_price: 540,
        likes: '10.000',
    }, {
        price: 297,
        promo_price: 997,
        likes: '20.000',
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
                                            <svg
                                                width="21"
                                                height="17"
                                                viewBox="0 0 21 17"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.65634 3.30978L10.5 4.63553L11.3437 3.30978C12.1137 2.09971 13.4765 1.31836 15.0455 1.31836C17.4932 1.31836 19.5 3.32519 19.5 5.7729C19.5 6.83566 19.0076 7.99205 18.1311 9.18722C17.2623 10.372 16.082 11.5047 14.8668 12.4989C13.6564 13.4892 12.4411 14.3182 11.5256 14.9008C11.1114 15.1644 10.7605 15.3763 10.5019 15.5286C10.243 15.3751 9.89157 15.1615 9.47664 14.8959C8.56085 14.3096 7.34508 13.4762 6.13429 12.4828C4.91854 11.4853 3.73771 10.3508 2.86843 9.1674C1.99096 7.97285 1.5 6.82266 1.5 5.7729C1.5 3.32519 3.50683 1.31836 5.95455 1.31836C7.52349 1.31836 8.88629 2.09971 9.65634 3.30978Z"
                                                    stroke="#E71D1B"
                                                    style={{
                                                        fill: activePackage.id == id ? "#FF0200" : '#ffffff',
                                                    }}
                                                    stroke-width="2"
                                                />
                                            </svg>

                                            {_package.likes}
                                        </span>

                                        <p className="w-[90px] text-center">Curtidas no Instagram</p>
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