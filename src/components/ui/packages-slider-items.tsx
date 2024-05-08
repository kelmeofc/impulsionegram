import Link from "next/link";
import { CarouselItem } from "./carousel";

export function PackagesSliderItems({
    title,
    svg,
    list,
    link
}: {
    title: string,
    svg: any,
    list: any[],
    link: string
}) {
    return (
        <CarouselItem className="py-14 px-4 rounded-3xl basis-[320px] max-[834px]:basis-[294px] bg-[#E3DCEF] flex flex-col gap-5">
            <div className="mx-auto">
                {svg}
            </div>

            <h3 className="text-3xl font-bold text-[#1A002D] text-center h-[76px]">{title}</h3>
            <ul className="flex flex-col gap-2">
                {list.map((item, index) => {
                    return (
                        <li key={index} className="px-4 py-2 flex items-center gap-2 bg-white rounded-3xl text-xs font-bold">
                            {item}
                        </li>
                    );
                })}
            </ul>
            <Link href={link} className="text-xl font-bold text-white bg-[#4F008E] w-full block p-6 text-center rounded-full">Adquirir</Link>
        </CarouselItem>
    );
}