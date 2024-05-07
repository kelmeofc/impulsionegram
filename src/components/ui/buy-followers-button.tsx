import Link from "next/link"

export function BuyFollowersButton() {
    return (
        <>
            <Link
                href={'#comprar-agora'}
                className="button mx-auto mt-14"
            >
                Comprar Seguidores Agora!
            </Link>
            <p className="text text-center mt-8">Na compra de seguidores você ganha curtidas bônus!</p>
        </>
    );
}