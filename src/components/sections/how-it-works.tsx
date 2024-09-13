import Image from "next/image";
import { BuyFollowersButton } from "../ui/buy-followers-button";

export function HowItWorksSection() {
    const howItWorksP = [{
        svg: (
            <Image alt="Escolha o pacote de seguidores que mais combina com seu momento de crescimento." src={'/images/escolha-o-seu-pacote.webp'} className="max-[450px]:w-[200px]" width="237" height="197" />
        ),
        title: 'Escolha o seu pacote',
        text: 'Escolha o pacote de seguidores que mais combina com seu momento de crescimento. Temos pacotes de 250 a 20 mil seguidores.'
    }, {
        svg: (
            <Image alt="Insira o seu @usuario do Instagram e finalize o pedido" src={'/images/insira-o-seu-usuario-do-Instagram-e-finalize-o-pedido.png'} className="max-[450px]:w-[200px]" width="280" height="193" />
        ),
        title: 'Insira o seu @usuario do Instagram e finalize o pedido',
        text: 'Digite seu nome de usuário (jamais pediremos sua senha), escolha a melhor forma de pagamento - Cartão de Crédito, Pix ou Boleto - e finalize a compra.'
    }, {
        svg: (
            <Image alt="Veja seu Instagram decolando!" src={'/images/decolar.png'} className="max-[450px]:w-[200px]" width="317" height="184" />
        ),
        title: 'Veja seu Instagram decolando!',
        text: 'Acomode-se na poltrona e acompanhe seus novos seguidores chegando de forma automática em seu perfil. Simples assim :)'
    }];

    return (
        <section id="como-funciona">
            <div className="container">
                <h3 className="text section-text-center">Como a ImpulsioneGram funciona</h3>
                <h2 className="section-title max-w-[1000px] mx-auto mt-4">Você está há poucos passos da popularidade no Instagram!</h2>
                <p className="text section-text-center max-w-[820px] mt-8">Para celebridades e marcas já conhecidas, crescer no Instagram pode ser fácil. Mas para a grande maioria das pessoas é um processo complexo, lento e incerto. Por isso, você deve confiar na compra de seguidores para seu perfil:</p>

                <ul className="bg-[#E3DCEF] w-full py-14 px-14 mt-24 rounded-[80px] max-w-[980px] mx-auto max-[400px]:!my-6 max-[400px]:px-[20px]">
                    {howItWorksP.map((how, index) => {
                        return (
                            <li className="flex max-[750px]:!flex-col max-[750px]:items-center relative gap-10 py-12 first:pt-0 before:content-[''] before:w-full before:h-[1px] before:bg-[#CCBAE0] before:block last:before:hidden before:absolute before:bottom-0" key={index} style={{
                                flexDirection: index % 2 != 0 ? 'row-reverse' : 'row'
                            }}>
                                {how.svg}

                                <div>
                                    <h2 className="topic-title min-[750px]:text-left max-w-[500px]">{how.title}</h2>
                                    <p className="text max-[750px]:text-center max-[750px]:mx-auto max-w-[500px] mt-5">{how.text}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                <BuyFollowersButton
                    text="Leva menos de 5 minutinhos!"
                />
            </div>
        </section >
    );
}