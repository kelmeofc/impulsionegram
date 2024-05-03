'use client'

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { HeroContext } from "../sections/hero";

export function CommentsHeroItems() {
    const packages: { id?: any, price: number, promo_price: number, views: string }[] = [{
        price: 67,
        promo_price: 135,
        views: '60',
    }, {
        price: 17,
        promo_price: 32,
        views: '15',
    }, {
        price: 27,
        promo_price: 44,
        views: '30',
    }, {
        price: 37,
        promo_price: 54,
        views: '100',
    }, {
        price: 117,
        promo_price: 270,
        views: '200',
    }, {
        price: 0,
        promo_price: 0,
        views: '400',
    }, {
        price: 187,
        promo_price: 540,
        views: '800',
    }];

    const [activePackage, setActivePackage] = useState({ id: '', package: {} });
    let [isValid, setValid] = useState(1) as any;
    let { isPackage, setPackage } = useContext(HeroContext) as any;

    useEffect(() => {
        if (isValid) {
            setPackage(packages[0])
            setValid(0)
        }
    })

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
                                    setPackage(_package);
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
                                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.3327 0.333496C16.1617 0.33345 16.9593 0.650182 17.5625 1.21889C18.1656 1.78759 18.5286 2.56528 18.5773 3.39283L18.5827 3.5835V5.75016C19.4117 5.75012 20.2093 6.06685 20.8125 6.63555C21.4156 7.20426 21.7786 7.98195 21.8273 8.8095L21.8327 9.00016V13.3335C21.8327 14.1625 21.516 14.9601 20.9473 15.5633C20.3786 16.1664 19.6009 16.5294 18.7733 16.5781L18.5827 16.5835V17.63C18.5827 18.735 17.3444 19.3568 16.4658 18.7491L16.3618 18.6711L13.8572 16.5835H9.91601C9.1174 16.5847 8.34653 16.2907 7.75151 15.758L7.59985 15.6128L5.58268 17.1252C4.72577 17.7676 3.51785 17.2064 3.42252 16.1729L3.41602 16.0418V14.4168C2.58704 14.4169 1.78937 14.1001 1.18623 13.5314C0.583091 12.9627 0.220066 12.185 0.171432 11.3575L0.166016 11.1668V3.5835C0.165969 2.75452 0.482701 1.95685 1.05141 1.35371C1.62011 0.750572 2.3978 0.387546 3.22535 0.338913L3.41602 0.333496H15.3327ZM18.5827 7.91683H9.91601C9.6287 7.91683 9.35315 8.03097 9.14998 8.23413C8.94682 8.43729 8.83268 8.71284 8.83268 9.00016V13.3335C8.83268 13.6208 8.94682 13.8964 9.14998 14.0995C9.35315 14.3027 9.6287 14.4168 9.91601 14.4168H13.8572C14.364 14.4171 14.8546 14.5949 15.2438 14.9195L16.4225 15.901C16.4577 15.496 16.6435 15.1189 16.9431 14.8442C17.2428 14.5694 17.6345 14.4169 18.041 14.4168H18.5827C18.87 14.4168 19.1455 14.3027 19.3487 14.0995C19.5519 13.8964 19.666 13.6208 19.666 13.3335V9.00016C19.666 8.71284 19.5519 8.43729 19.3487 8.23413C19.1455 8.03097 18.87 7.91683 18.5827 7.91683ZM15.3327 2.50016H3.41602C3.1287 2.50016 2.85315 2.6143 2.64998 2.81746C2.44682 3.02063 2.33268 3.29618 2.33268 3.5835V11.1668C2.33268 11.4541 2.44682 11.7297 2.64998 11.9329C2.85315 12.136 3.1287 12.2502 3.41602 12.2502H3.95768C4.38866 12.2502 4.80198 12.4214 5.10673 12.7261C5.41148 13.0309 5.58268 13.4442 5.58268 13.8752V14.4168L6.67685 13.5967C6.66973 13.5092 6.66611 13.4214 6.66602 13.3335V9.00016C6.66602 8.13821 7.00842 7.31156 7.61792 6.70207C8.22741 6.09257 9.05406 5.75016 9.91601 5.75016H16.416V3.5835C16.416 3.29618 16.3019 3.02063 16.0987 2.81746C15.8955 2.6143 15.62 2.50016 15.3327 2.50016Z"
                                                    style={{
                                                        fill: activePackage.id == id ? "#ffffff" : '#1A002D',
                                                    }}
                                                />
                                            </svg>

                                            {_package.views}
                                        </span>

                                        <p className="w-[90px] text-center">Comentários Instagram</p>
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