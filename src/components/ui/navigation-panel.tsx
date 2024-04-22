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

        console.log(element.offsetTop)

    }

    const handleScroll = (event: Event, topics: NodeListOf<HTMLElement>) => {
        const informativeBlogContainer = document.querySelector('[data-informative-blog]');
        const navigationPanel = document.querySelector('[data-navigation-panel]');
        if (!navigationPanel || !informativeBlogContainer) return;
        const scale = informativeBlogContainer?.clientHeight;

        if (informativeBlogContainer.getBoundingClientRect().top < 0 && (informativeBlogContainer.getBoundingClientRect().top * -1) < informativeBlogContainer?.clientHeight) {
            const item: any = document.querySelector('[data-teste]');
            if (!item) return;
            item.style.top = `${(informativeBlogContainer.getBoundingClientRect().top * -1) * scale}px`
        }
    }

    useEffect(() => {
        const topics = document.querySelectorAll('[data-informative-blog-topics]') as NodeListOf<HTMLElement>;
        window.addEventListener('scroll', (event) => handleScroll(event, topics));
    });

    return (
        <div className="bg-white rounded-[30px] h-fit px-5 py-10 sticky top-5">
            <h3 className="text-2xl text-[#1A002D] font-bold flex justify-between items-center">
                Tabela de Conteúdos
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.4252" cy="17.4252" r="17.4252" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 35.1899 35.7295)" fill="#B352FF" />
                    <path d="M23.6895 21.4412L17.7649 15.5166L11.8403 21.4412" stroke="#1A002D" stroke-width="2.52109" />
                </svg>
            </h3>

            <nav className="mt-6 grid grid-cols-[16px_1fr] h-full gap-5">
                <div className="block w-[1px] h-full bg-[#1A002D] mx-auto relative" data-navigation-panel>
                    <span
                        data-teste
                        className="absolute w-4 h-4 block bg-[#4F008E] left-1/2 top-0 translate-x-1/2 rounded-full"
                        style={{
                            transform: 'translateX(-50%);'
                        }}
                    ></span>
                </div>

                <ul className="flex flex-col gap-7">
                    {topics.map((topic, index) => {
                        return (
                            <li key={`${index}-${topic.id}`} className="text-xl font-bold text-[#483357]">
                                <Link
                                    href={`#${topic.id}`}
                                    onClick={() => handleClick({ id: topic.id })}
                                >{topic.title}</Link>

                                {topic.sub_topics &&
                                    <ul className="flex flex-col gap-4 mt-3">
                                        {topic.sub_topics?.map((topic, index) => {
                                            return (
                                                <li key={`${index}-${topic.id}`} className="text-base font-semibold text-[#5F4D6C]">
                                                    <Link
                                                        href={`#${topic.id}`}
                                                        onClick={() => handleClick({ id: topic.id })}
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