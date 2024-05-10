'use client'

import Link from "next/link";
import Logo from "./logo";
import { BurgerMenu } from "./burger-menu";
import { useEffect, useState } from "react";

export function Header() {
    const menu = [{
        text: 'Seguidores',
        link: '/',
        expanded: false,
    }, {
        text: 'Curtidas',
        link: '/comprar-curtidas-instagram',
        expanded: false,
    }, {
        text: 'Visualizações',
        link: '/comprar-visualizacoes-reels-instagram',
        expanded: false,
    }, {
        text: 'Comentários',
        link: '/comprar-comentarios-instagram',
        expanded: false,
    }];

    useEffect(() => {
        const header = document.querySelector('[data-header]');

        var lastPosition!: number;

        window.addEventListener('scroll', () => {
            var currentPosition = window.scrollY;
            
            if (currentPosition > lastPosition) {
                if (!header?.classList.contains('top-[-100%]')) {
                    header?.classList.add('hidden')
                    header?.classList.add('top-[-100%]')
                    header?.classList.remove('top-[0]')
                }
            } else {
                if (header?.classList.contains('top-[-100%]')) {
                    header?.classList.remove('hidden')
                    header?.classList.remove('top-[-100%]')
                    header?.classList.add('top-0')
                }
            }

            lastPosition = currentPosition;
        });
    })

    return (
        <header className="bg-white border-b-[0.5px] border-[#C0BAC8] py-5 fixed left-0 right-0 top-0 transition-[.2] z-[900]" data-header>
            <div className="container relative flex items-center justify-between">
                <Logo
                    width="198"
                    height="35"
                />

                <nav className="max-lg:hidden">
                    <ul className="flex align-items-center justify-between gap-10">
                        {menu.map((op, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        className="text-base font-semibold text-[#887A94]"
                                        aria-expanded={op.expanded}
                                        href={op.link}
                                    >
                                        {op.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex items-center gap-6 max-[400px]:gap-1 justify-end">
                    <Link
                        href={'https://painel.impulsionegram.com.br/'}
                        target="_blank"
                        className="
                        text-sm
                        font-semibold
                        py-2
                        px-7
                        text-[#887A94]
                        hover:text-[#ffffff]
                        border
                        border-[#887A94]
                        rounded-3xl
                        bg-[#ffffff]
                        hover:bg-[#887A94]
                        ease-in
                        duration-75
                        max-[350px]:py-1
                        max-[350px]:px-3
                        "
                    >Login</Link>
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
}