import Image from "next/image"
import { BuyFollowersButton } from "../ui/buy-followers-button";

export function BuyingProcessSection() {
    const list = [{
        svg: (
            <Image width="117" height="100" alt="Segurança durante o processo de compra" src={'/images/buying-process/seguranca.webp'} />
        ),
        title: 'Segurança',
        text: 'Durante todo o processo de compra, nós nunca vamos pedir a senha do seu Instagram. Além disso, nada será alterado ou divulgado em seu perfil.'
    }, {
        svg: (
            <Image width="137" height="118" alt="Rapidez após confirmação do pagamento" src={'/images/buying-process/velocidade.webp'} />
        ),
        title: 'Rapidez',
        text: 'Após confirmação do pagamento, os seguidores começam a chegar em 5 minutos. Já as curtidas ficam em seu painel para você usar em seus posts.'
    }, {
        svg: (
            <Image width="127" height="125" alt="Rapidez após confirmação do pagamento" src={'/images/buying-process/seguidores-reais.webp'} />
        ),
        title: 'Reais',
        text: 'Os seguidores vêm de uma plataforma de indicação, onde pagamos pessoas com usuários reais para fazerem as ações de seguir seu perfil.'
    }];

    return (
        <section>
            <div className="container">
                <h2 className="section-title">Pronto para comprar seguidores?</h2>
                <p className="text section-text-center mt-8">Comprar seguidores para o seu perfil no Instagram é a melhor maneira de alcançar um público mais amplo, que vai incentivar o envolvimento e garantir o seu maior sucesso.</p>

                <div className="flex items-center justify-center max-[950px]:flex-col w-full gap-6 p-11 py-14 bg-[#F4EFE3] rounded-3xl mt-10">
                    <Image
                        className="max-w-[103px]"
                        alt="Imagem que representa a segurança"
                        src="/images/a-verdade-que.png"
                        width={103}
                        height={103}
                    />

                    <div>
                        <h2 className="topic-title text-left max-[950px]:text-center">A verdade é que...</h2>
                        <p className="text w-full max-w-[630px] text-left max-[950px]:text-center">As pessoas preferem seguir e confiar em perfis com milhares de seguidores. Já perfis com poucos seguidores não despertam interesse e não passam credibilidade.</p>
                    </div>
                </div>

                <ul className="grid grid-cols-3 gap-4 mt-4 max-[950px]:grid-cols-1">
                    {list.map((li, index) => {
                        return (
                            <li className="flex items-center justify-center flex-col py-14 px-8 gap-4 bg-[#E3DCEF] rounded-3xl" key={index} title={li.title}>
                                {li.svg}
                                <h2 className="topic-title text-center">{li.title}</h2>
                                <p className="text text-center">{li.text}</p>
                            </li>
                        );
                    })}
                </ul>

                <BuyFollowersButton />
            </div>
        </section>
    );
}