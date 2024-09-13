import Image from "next/image";

export function GuaranteeSealSection() {
    return (
        <section>
            <div className="container">
                <div className="p-10 bg-[#F4EFE3] rounded-3xl grid items-center min-[850px]:grid-cols-[244px_1fr] gap-9">
                    <Image className="max-[850px]:mx-auto" src={'/images/selo-de-garantia.webp'} width={220} height={220} alt="Selo de garantia 100% satisfeito." />

                    <div>
                        <h2 className="min-[850px]:text-3xl max-[850px]:text-xl font-bold max-[850px]:text-center">Você 100% satisfeito ou seu dinheiro de volta.</h2>
                        <p className="min-[850px]:text-[18px] max-[850px]:text-[16px]  max-[850px]:text-center mt-4">Se durante os 7 primeiros dias você não estiver totalmente satisfeito, devolveremos todo o valor investido. Sem pegadinha, sem central de atendimento.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}