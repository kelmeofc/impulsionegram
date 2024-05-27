'use client'

import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";
import React from "react";

export function SimpleSlider({
    title,
    description,
    children,
}: {
    title: string,
    description: string,
    children: React.ReactNode
}) {
    const profilePhotos = [
        'profile-01.png',
        'profile-02.png',
        'profile-03.png',
        'profile-04.png',
    ];

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-between max-w-[550px] mx-auto gap-3">
                    <div className="flex gap-1 max-[400px]:w-[84px]">
                        {[1, 2, 3, 4, 5].map((item, index) => {
                            return (
                                <svg key={index} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4097 19.5279C16.2454 19.5286 16.0833 19.4898 15.937 19.4149L10.6961 16.6711L5.45509 19.4149C5.28491 19.5044 5.09303 19.5443 4.90127 19.5302C4.70952 19.5161 4.52557 19.4484 4.37035 19.3349C4.21512 19.2215 4.09485 19.0667 4.02319 18.8883C3.95154 18.7099 3.93138 18.5149 3.96502 18.3256L4.99266 12.54L0.758777 8.42941C0.626682 8.29759 0.532975 8.13229 0.487714 7.95124C0.442453 7.7702 0.447345 7.58024 0.501867 7.40177C0.561429 7.21913 0.670992 7.05685 0.818124 6.93333C0.965255 6.80981 1.14406 6.73001 1.33426 6.70297L7.19181 5.85003L9.77118 0.578237C9.85533 0.404493 9.98672 0.257965 10.1503 0.155439C10.3139 0.052913 10.503 -0.00146484 10.6961 -0.00146484C10.8891 -0.00146484 11.0783 0.052913 11.2418 0.155439C11.4054 0.257965 11.5368 0.404493 11.6209 0.578237L14.2311 5.83976L20.0887 6.6927C20.2789 6.71973 20.4577 6.79953 20.6048 6.92305C20.752 7.04657 20.8615 7.20885 20.9211 7.39149C20.9756 7.56997 20.9805 7.75992 20.9352 7.94097C20.89 8.12201 20.7963 8.28731 20.6642 8.41913L16.4303 12.5297L17.4579 18.3153C17.4946 18.508 17.4754 18.7071 17.4026 18.8892C17.3297 19.0713 17.2063 19.2287 17.0469 19.343C16.8608 19.4734 16.6367 19.5384 16.4097 19.5279Z" fill="#F9BF10" />
                                </svg>
                            );
                        })}
                    </div>

                    <ul className="flex max-[400px]:min-w-[84px]">
                        {profilePhotos.map((profile, index) => {
                            return (
                                <li key={index}>
                                    <Image
                                        alt="Foto de Perfil do Instagram"
                                        title="Foto de Perfil"
                                        width={37}
                                        height={37}
                                        src={`/images/profile/${profile}`}
                                    />
                                </li>
                            );
                        })}
                    </ul>

                    <p className="min-[580px]:w-[190px] max-[400px]:text-center max-[550px]:text-[10px] font-medium">Mais de <span className="font-bold">62.356</span> pessoas usam o ImpulsioneGram</p>
                </div>

                <h2 className="section-title max-[550px]:mt-2">{title}</h2>
                <p className="text section-text-center mt-8 max-w-[870px]">{description}</p>

                <Carousel className="mt-9" setApi={setApi}>
                    <div className="flex justify-end gap-3">
                        <CarouselPrevious className="static bg-transparent border-[#B352FF] text-[#B352FF]" />
                        <CarouselNext className="static bg-transparent border-[#B352FF] text-[#B352FF]" />
                    </div>

                    <CarouselContent className="px-5 gap-6">
                        {children}
                    </CarouselContent>
                </Carousel>

                <div className="flex items-center justify-center gap-1 mt-6 max-[550px]:mt-5">
                    {Array.from({ length: count }).map((i: any, index) => {
                        return (
                            <span key={index} className="block w-3 h-3 bg-[#F9BF10] opacity-50 rounded-full" style={{
                                opacity: current - 1 == index ? 1 : 0.5,
                                background: current - 1 == index ? '#4F008E' : '#F9BF10'
                            }}>
                            </span>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}