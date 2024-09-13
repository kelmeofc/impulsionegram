'use client'

import { scrollTo } from "@/lib/utils";
import Link from "next/link"

export function BuyFollowersButton({ text }: { text?: string }) {
    return (
        <>
            <Link
                href={'#comprar-agora'}
                className="button max-[400px]:py-4 mx-auto mt-14"
                onClick={scrollTo}
            >
                Comprar Seguidores Agora!
            </Link>
            <p className="text text-center mt-8">{text ? text : 'Na compra de seguidores você ganha curtidas bônus!'}</p>
        </>
    );
}