'use client'

import { usePackageContext } from "@/providers/package-provider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CheckoutDialog } from "./checkout-dialog";

export function LikesHeroItems() {
    const packages: { payment_id: string, card_id: string, price: number, promo_price: number, likes: string }[] = [{
        card_id: 'DGZ148559',
        payment_id: '879',
        price: 67,
        promo_price: 135,
        likes: '2.500',
    }, {
        card_id: 'KAH323273',
        payment_id: '379649',
        price: 17,
        promo_price: 32,
        likes: '250',
    }, {
        card_id: 'DSM148557',
        payment_id: '876',
        price: 27,
        promo_price: 44,
        likes: '500',
    }, {
        card_id: 'DLM148558',
        payment_id: '877',
        price: 37,
        promo_price: 54,
        likes: '1.000',
    }, {
        card_id: 'DJU148560',
        payment_id: '880',
        price: 117,
        promo_price: 270,
        likes: '5.000',
    }, {
        card_id: '',
        payment_id: '',
        price: 0,
        promo_price: 0,
        likes: '7.500',
    }, {
        card_id: 'DSV150994',
        payment_id: '54036',
        price: 187,
        promo_price: 540,
        likes: '10.000',
    }, {
        card_id: 'DHA150995',
        payment_id: '54037',
        price: 297,
        promo_price: 997,
        likes: '20.000',
    }];

    const [activePackage, setActivePackage] = useState({ id: 0 });
    const { handlePackage } = usePackageContext() as any;

    useEffect(() => {
        handlePackage({
            card_id: packages[0].card_id,
            payment_id: packages[0].payment_id,
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
                            className="relative pt-3 package-hero-item"
                        >
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActivePackage({ id: index })
                                    handlePackage({
                                        card_id: _package.card_id,
                                        payment_id: _package.payment_id,
                                        price: _package.price,
                                        promo_price: _package.promo_price,
                                    })
                                }}
                            >
                                <span className="w-[80%] p-2 text-[10px] font-semibold text-center hidden best-selling absolute top-[-5px] left-[50%] rounded-full"
                                    style={{
                                        transform: 'translateX(-50%)',
                                        background: activePackage.id == index ? '#B352FF' : '#F4F1FF',
                                        color: activePackage.id == index ? '#ffffff' : '#A8B4C3',
                                    }}
                                >Mais Vendido</span>

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
                                                        fill: activePackage.id == index ? "#FF0200" : '#ffffff',
                                                    }}
                                                    stroke-width="2"
                                                />
                                            </svg>

                                            {_package.likes}
                                        </span>

                                        <p className="w-[90px] text-center">Curtidas no Instagram</p>
                                    </div>

                                    <div className="flex flex-col items-center justify-center p-3 min-[400px]:hidden">
                                        <p className="text-base font-medium text-[#8C8096] flex items-start gap-[5px]">
                                            R$
                                            <span
                                                className="text-2xl font-bold text-[#1A002D] leading-[1]"
                                            >{_package.price}</span>
                                            <span
                                                className="text-[#FF0000] line-through"
                                            >R${_package.promo_price}</span>
                                        </p>

                                        <p className="text-[#B2ACB6] text-sm font-medium mt-3 flex gap-2 items-center text-center">3x de R$ {(_package.price / 3).toFixed(2)} sem juros no cartão</p>

                                        <CheckoutDialog>
                                            <button
                                                className="mt-2 py-4 w-full bg-[#4F008E] text-white font-bold block rounded-full"
                                            >Comprar Agora</button>
                                        </CheckoutDialog>
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