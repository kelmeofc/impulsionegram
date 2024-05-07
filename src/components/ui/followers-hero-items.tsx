'use client'

import { usePackageContext } from "@/providers/package-provider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export function FollowersHeroItems() {
    const packages: { payment_id: string, card_id: string, title: string, followers: string, bonus: string, price: number, promo_price: number }[] = [{
        payment_id: '10179',
        card_id: 'DXP177580',
        title: 'Premium',
        followers: '2.500',
        bonus: '1.500',
        price: 127,
        promo_price: 235
    }, {
        payment_id: '376129',
        card_id: 'DLZ243515',
        title: 'Essencial',
        followers: '250',
        bonus: '100',
        price: 19,
        promo_price: 27
    }, {
        payment_id: '10176',
        card_id: 'DKS177578',
        title: 'Iniciante',
        followers: '500',
        bonus: '250',
        price: 37,
        promo_price: 47
    }, {
        payment_id: '10177',
        card_id: 'DAG177579',
        title: 'Básico',
        followers: '1.000',
        bonus: '750',
        price: 69,
        promo_price: 94
    }, {
        payment_id: '10180',
        card_id: 'DDT177581',
        title: 'Profissional',
        followers: '5.000',
        bonus: '3.500',
        price: 247,
        promo_price: 470
    }, {
        payment_id: '10244',
        card_id: 'DXT177583',
        title: 'Elite',
        followers: '10.000',
        bonus: '7.500',
        price: 497,
        promo_price: 940
    }, {
        payment_id: '10179',
        card_id: 'DAS177592',
        title: 'Influencer',
        followers: '20.000',
        bonus: '10.000',
        price: 897,
        promo_price: 1880
    }];

    const [activePackage, setActivePackage] = useState({ id: '0' })
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
                            className="relative pt-12"
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
                                    });
                                }}
                            >
                                <div
                                    className="w-full rounded-[30px] pt-4 pb-16 absolute top-0 z-[1]"
                                    style={{
                                        backgroundColor: activePackage.id == index ? '#B352FF' : '#F4F1FF',
                                    }}
                                >
                                    <span
                                        className="block text-center font-medium"
                                        style={{
                                            color: activePackage.id == index ? '#ffffff' : '#708898'
                                        }}
                                    >{_package.title}</span>
                                </div>

                                <div
                                    className="rounded-[30px] overflow-hidden border-[2px] relative z-[2]"
                                    style={{
                                        borderColor: activePackage.id == index ? '#4F008E' : '#F0E9FA'
                                    }}
                                >
                                    <div
                                        className="w-full flex items-center flex-col text-sm font-bold py-4"
                                        style={{
                                            color: activePackage.id == index ? '#ffffff' : '#1A002D',
                                            backgroundColor: activePackage.id == index ? '#4F008E' : '#F0E9FA',
                                        }}
                                    >
                                        <span className="flex items-center gap-2">
                                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.54359 0C1.86266 0 0.5 1.36266 0.5 3.04359V12.2196C0.5 13.9005 1.86266 15.2632 3.54359 15.2632H8.19839L9.67087 17.8136C10.1915 18.7154 11.4932 18.7154 12.0138 17.8136L13.4863 15.2632H17.4564C19.1373 15.2632 20.5 13.9005 20.5 12.2196V3.04359C20.5 1.36266 19.1373 0 17.4564 0H3.54359Z"
                                                    style={{
                                                        fill: activePackage.id == index ? "#ffffff" : '#1A002D'
                                                    }}
                                                />
                                                <path d="M6.56143 12.3421C6.56143 12.3421 5.76318 12.3421 5.76318 11.5439C5.76318 10.7456 6.56143 8.3509 10.5527 8.3509C14.5439 8.3509 15.3421 10.7456 15.3421 11.5439C15.3421 12.3421 14.5439 12.3421 14.5439 12.3421H6.56143ZM10.5527 7.55266C11.1878 7.55266 11.7969 7.30036 12.246 6.85126C12.6951 6.40215 12.9474 5.79304 12.9474 5.15792C12.9474 4.5228 12.6951 3.91369 12.246 3.46459C11.7969 3.01549 11.1878 2.76318 10.5527 2.76318C9.91753 2.76318 9.30842 3.01549 8.85932 3.46459C8.41022 3.91369 8.15792 4.5228 8.15792 5.15792C8.15792 5.79304 8.41022 6.40215 8.85932 6.85126C9.30842 7.30036 9.91753 7.55266 10.5527 7.55266Z"
                                                    style={{
                                                        fill: activePackage.id == index ? "#1A002D" : '#ffffff'
                                                    }}
                                                />
                                            </svg>
                                            {_package.followers}
                                        </span>

                                        <p>Seguidores</p>
                                    </div>

                                    <div className="w-full flex items-center flex-col text-sm font-bold bg-[#ffffff] text-[#1A002D] py-4">
                                        <span className="flex items-center gap-2">
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1818 1.77295C9.84545 1.77295 8.66818 2.44113 8 3.49113C7.33182 2.44113 6.15455 1.77295 4.81818 1.77295C2.71818 1.77295 1 3.49113 1 5.59113C1 9.37749 8 13.2275 8 13.2275C8 13.2275 15 9.40931 15 5.59113C15 3.49113 13.2818 1.77295 11.1818 1.77295Z" stroke="#1A002D" strokeWidth="1.9" /></svg>
                                            {_package.bonus}
                                        </span>

                                        <p className="text-[#8E829A]">Curtidas Bônus</p>
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