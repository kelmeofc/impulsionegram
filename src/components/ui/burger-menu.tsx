'use client'

import Link from "next/link";
import { useState } from "react";

export function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menu = [{
        content: 'Preços',
        link: '#'
    }, {
        content: 'Como Funciona',
        link: '#'
    }, {
        content: 'Comprar Curtidas',
        link: '#',
        class: 'lg:hidden'
    }, {
        content: 'Comprar Comentários',
        link: '#',
        class: 'lg:hidden'
    }, {
        content: 'Comprar Visus Vídeo',
        link: '#',
        class: 'lg:hidden'
    }, {
        content: 'Comprar Visus Stores',
        link: '#',
        class: 'lg:hidden'
    }, {
        content: 'FAQ',
        link: '#'
    }, {
        content: 'Suporte',
        link: '#'
    }, {
        content: 'Blog',
        link: '#'
    }];

    return (
        <div>
            <button
                className="p-2 outline-none"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <svg width="25" height="20" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.26562 6.75C0.934104 6.75 0.616162 6.8817 0.381742 7.11612C0.147321 7.35054 0.015625 7.66848 0.015625 8C0.015625 8.33152 0.147321 8.64946 0.381742 8.88388C0.616162 9.1183 0.934104 9.25 1.26562 9.25V6.75ZM18.7656 9.25C19.0971 9.25 19.4151 9.1183 19.6495 8.88388C19.8839 8.64946 20.0156 8.33152 20.0156 8C20.0156 7.66848 19.8839 7.35054 19.6495 7.11612C19.4151 6.8817 19.0971 6.75 18.7656 6.75V9.25ZM1.26562 0.5C0.934104 0.5 0.616162 0.631696 0.381742 0.866117C0.147321 1.10054 0.015625 1.41848 0.015625 1.75C0.015625 2.08152 0.147321 2.39946 0.381742 2.63388C0.616162 2.8683 0.934104 3 1.26562 3V0.5ZM18.7656 3C19.0971 3 19.4151 2.8683 19.6495 2.63388C19.8839 2.39946 20.0156 2.08152 20.0156 1.75C20.0156 1.41848 19.8839 1.10054 19.6495 0.866117C19.4151 0.631696 19.0971 0.5 18.7656 0.5V3ZM1.26562 13C0.934104 13 0.616162 13.1317 0.381742 13.3661C0.147321 13.6005 0.015625 13.9185 0.015625 14.25C0.015625 14.5815 0.147321 14.8995 0.381742 15.1339C0.616162 15.3683 0.934104 15.5 1.26562 15.5V13ZM18.7656 15.5C19.0971 15.5 19.4151 15.3683 19.6495 15.1339C19.8839 14.8995 20.0156 14.5815 20.0156 14.25C20.0156 13.9185 19.8839 13.6005 19.6495 13.3661C19.4151 13.1317 19.0971 13 18.7656 13V15.5ZM1.26562 9.25H18.7656V6.75H1.26562V9.25ZM1.26562 3H18.7656V0.5H1.26562V3ZM1.26562 15.5H18.7656V13H1.26562V15.5Z" fill="#1A002D" />
                </svg>
            </button>

            <nav
                className="pl-8 pt-14 pb-10 pr-8 rounded-3xl absolute right-6 top-[-20px] z-[998] bg-white"
                style={{
                    boxShadow: '-4px 5px 15px 0px rgba(0,0,0,0.25)',
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'all' : 'none'
                }}
            >
                <button
                    className="absolute top-8 right-7 z-[999]"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L14.7279 14.7279" stroke="#1A002D" strokeWidth="3" strokeLinecap="round" />
                        <path d="M14.728 2L2.00011 14.7279" stroke="#1A002D" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </button>
                <ul>
                    {menu.map((li, index) => {
                        return (
                            <li key={index} className={`mt-6 first:mt-0 ${li.class ?? ''}`}>
                                <Link
                                    className="block text-lg font-semibold text-[#473257]"
                                    href={li.link}
                                >{li.content}</Link>
                            </li>
                        );
                    })}

                    <li>
                        <Link
                            className="text-lg font-bold text-white p-3 rounded-full bg-[#B352FF] block text-center mt-6 w-[full] min-w-[178px]"
                            href={'#'}
                        >Comprar Agora</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}