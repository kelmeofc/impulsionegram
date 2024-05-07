'use client'

import Link from "next/link";
import { useEffect } from "react";

interface ITopic {
    title: string;
    id: string;
    sub_topics?: ITopic[];
}

export function NavigationPanel({ topics }: { topics: ITopic[] }) {
    const handleClick = (data: { id: string }) => {
        const element = document.getElementById(data.id);
        if (!element) return;
    }

    const handleScroll = (topics: NodeListOf<HTMLElement>, panelItems: NodeListOf<HTMLElement>, navigationPanel: HTMLElement) => {
        topics.forEach((element, index) => {
            if (
                (element.getBoundingClientRect().top > 0 && element.getBoundingClientRect().top < 200 && window.innerWidth > 1100) ||
                (element.getBoundingClientRect().top > 0 && element.getBoundingClientRect().top < 400 && window.innerWidth <= 1100)
            ) {
                panelItems.forEach(item => item.classList.remove('active'));
                panelItems[index].classList.add('active');

                setTagNavigationPosition(navigationPanel);
            }
        });
    }

    const setTagNavigationPosition = (navigationPanel: HTMLElement) => {
        const item: any = document.querySelector('[data-navigation-tag]');
        const activeItem = document.querySelector('[data-panel-item].active') as HTMLElement;

        if (activeItem && item && window.innerWidth > 1100) {
            item.style.top = `${(activeItem.getBoundingClientRect().top - navigationPanel.getBoundingClientRect().top) + (+activeItem.clientHeight * 0.4)}px`;
        }

        if (window.innerWidth <= 1100) {
            const list = document.querySelector('[data-navigation-list]') as HTMLElement;

            // console.log((activeItem.inner - (activeItem.getBoundingClientRect().width * 0.5)) + (list.clientWidth * 0.5));
            console.log(list.scrollWidth);

            list.scrollBy({
                left: +`${(activeItem.getBoundingClientRect().left - (activeItem.getBoundingClientRect().width * 0.5)) + (list.clientWidth * 0.5)}`,
                behavior: 'smooth'
            })
        }
    }

    useEffect(() => {
        const topics = document.querySelectorAll('[data-informative-blog-topics]') as NodeListOf<HTMLElement>;
        const panelItems = document.querySelectorAll('[data-panel-item]') as NodeListOf<HTMLElement>;
        const navigationPanel = document.querySelector('[data-navigation-panel]') as HTMLElement;

        window.addEventListener('scroll', (event) => handleScroll(topics, panelItems, navigationPanel));

        setTagNavigationPosition(navigationPanel);
    });

    return (
        <div className="bg-white rounded-[30px] h-fit px-5 py-10 sticky top-[90px] bottom-0 max-[1100px]:w-full">
            <h3 className="text-2xl text-[#1A002D] font-bold flex justify-between items-center max-[1100px]:justify-center max-[1100px]:gap-3">
                Tabela de Conteúdos
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.4252" cy="17.4252" r="17.4252" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 35.1899 35.7295)" fill="#B352FF" />
                    <path d="M23.6895 21.4412L17.7649 15.5166L11.8403 21.4412" stroke="#1A002D" strokeWidth="2.52109" />
                </svg>
            </h3>

            <nav className="mt-6 grid grid-cols-[16px_1fr] h-full gap-5 max-[1100px]:grid-cols-1 max-[1100px]:w-full max-[1100px]:overflow-hidden">
                <div className="block w-[1px] h-full bg-[#1A002D] m-auto relative max-[1100px]:h-[1px] max-[1100px]:w-full max-[1100px]:mt-4" data-navigation-panel>
                    <span
                        data-navigation-tag
                        className="absolute w-4 h-4 block bg-[#4F008E] left-1/2 top-0 translate-x-1/2 rounded-full transition-[top_left] duration-300 max-[1100px]:top-1/2"
                        style={{
                            transform: 'translate(-50%, -50%)',
                        }}
                    ></span>
                </div>

                <ul className="flex flex-col gap-7 max-[1100px]:flex-row max-[1100px]:overflow-hidden max-[1100px]:px-96" data-navigation-list>
                    {topics.map((topic, index) => {
                        return (
                            <li key={`${index}-${topic.id}`} className="text-xl font-bold text-[#483357] flex flex-col gap-3 max-[1100px]:flex-row">
                                <Link
                                    className={`block ${index == 0 && 'active'} max-[1100px]:w-[270px] max-[1100px]:text-center`}
                                    href={`#${topic.id}`}
                                    onClick={() => handleClick({ id: topic.id })}
                                    data-panel-item
                                >{topic.title.length <= 35 ? topic.title : topic.title.slice(0, 35) + '...'}</Link>

                                {topic.sub_topics &&
                                    <ul className="flex flex-col gap-4 max-[1100px]:flex-row">
                                        {topic.sub_topics?.map((topic, index) => {
                                            return (
                                                <li key={`${index}-${topic.id}`} className={`text-base font-semibold text-[#5F4D6C]`}>
                                                    <Link
                                                        className="block max-[1100px]:w-[270px] max-[1100px]:text-center"
                                                        href={`#${topic.id}`}
                                                        onClick={() => handleClick({ id: topic.id })}
                                                        data-panel-item
                                                    >{topic.title}</Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                }
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}