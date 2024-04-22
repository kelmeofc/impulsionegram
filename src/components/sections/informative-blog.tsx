import { InformativeBlogButton } from "../ui/informative-blog-button";
import { ITopic, InformativeBlogTopic } from "../ui/informative-blog-topic";
import { NavigationPanel } from "../ui/navigation-panel";

export function InformativeBlogSection() {
    const navigationPanelItems = [{
        id: 'guia-para-comprar-seguidores',
        title: 'Guia Definitivo para Comprar Seguidores 2023'
    }, {
        id: 'vale-comprar-seguidores',
        title: 'Vale a pena Comprar Seguidores para o Insta?',
        sub_topics: [{
            id: 'vale-comprar-seguidores-passo-1',
            title: 'Passo 1: escolha o melhor pacote de acordo com a sua necessidade'
        }, {
            id: 'vale-comprar-seguidores-passo-2',
            title: 'Passo 2: informar o @ do Instagram que irá receber os seguidores'
        }, {
            id: 'vale-comprar-seguidores-passo-3',
            title: 'Passo 3: escolher a forma de pagamento mais adequada para você'
        }, {
            id: 'vale-comprar-seguidores-passo-4',
            title: 'No ImpulsioneGram, a sua compra será de seguidores 100% reais e brasileiros'
        },]
    }];

    // {
    //     id: 'como-garantir-a-seguranca-da-sua-compra',
    //     title: 'Como garantir a segurança da sua compra de seguidores do Instagram?',
    //     sub_topics: [{
    //         id: '',
    //         title: 'Uma plataforma séria jamais irá pedir a senha da sua conta',
    //     }, {
    //         id: '',
    //         title: 'Faça uma análise dos depoimentos de quem já comprou'
    //     }, {
    //         id: '',
    //         title: 'Só confie em quem disponibiliza seguidores reais'
    //     }, {
    //         id: '',
    //         title: 'Não aceite seguidores que não sejam brasileiros'
    //     }]
    // }, {
    //     id: '',
    //     title: 'Como encontrar o melhor site para comprar seguidores com bom custo/benefício e confiáveis?'
    // }, {
    //     id: '',
    //     title: '7 fatores para escolher o melhor site para comprar seguidores',
    //     sub_topics: [{
    //         id: '',
    //         title: 'O que está te impedindo de bombar seu perfil?'
    //     }]
    // }

    const informativeBlogTopicsItems: ITopic[] = [{
        id: 'guia-para-comprar-seguidores',
        title: 'O guia definitivo para comprar seguidores no Instagram em 2023',
        content: (
            <>
                <p>Todo mundo já ouviu falar que comprar seguidores é uma medida simples e rápida para aumentar o engajamento do perfil no Instagram.</p>
                <p>Essa medida, inclusive, é muito comum em diversos perfis grandes, já que permite um crescimento acelerado e resultados rápidos com a rede social.</p>
                <p>Diversos influencers e empresas utilizam da compra de seguidores para impulsionar suas outras plataformas digitais, como o TikTok, Youtube e Twitter aumentando de forma rápida a visibilidade dos perfis em todas essas ferramentas.</p>
            </>
        ),
        banner: {
            path: '/images/blog-banners/banner-01.png',
            alt: 'O guia definitivo para comprar seguidores no Instagram em 2023'
        },
    }, {
        id: 'vale-comprar-seguidores',
        title: 'Vale a pena comprar seguidores para o Instagram?',
        content: (
            <>
                <p>A resposta é SIM!</p>
                <p>A compra de seguidores é uma alternativa muito usada por quem quer resultados rápidos com o seu perfil na rede social.</p>
                <p>Isso porque esperar o crescimento orgânico pode levar muito tempo e atrasar as suas conquistas e os seus objetivos com o Instagram.</p>
                <p>Listamos 5 fatores que comprovam que a compra de seguidores é uma alternativa vantajosa para quem quer acelerar o crescimento do perfil:</p>

                <h3>1. Acelera resultados</h3>
                <p>Comprar seguidores reais e brasileiros permite que você feche mais negócios, conquiste mais clientes e oportunidades de parceria com o seu perfil.</p>
                <p>Através do aumento dos números da sua conta, você vai conseguir mais fãs e potenciais clientes, melhorando o seu retorno com a sua rede social.</p>

                <h3>2. Melhora o alcance das suas publicações</h3>
                <p>Com o aumento da sua base de seguidores e com o envio das curtidas bônus que você vai ter ao comprar seguidores conosco, o algoritmo vai considerar a sua conta como relevante.</p>
                <p>Isso dará mais destaque à distribuição do seu conteúdo, que vai alcançar cada vez mais usuários de forma orgânica.</p>

                <h3>3. Facilita o aparecimento do seu conteúdo na aba “Explorar”</h3>
                <p>Esse é o objetivo de 10 entre 10 perfis que querem ter resultado com o Instagram.</p>
                <p>Comprar seguidores aumenta o engajamento do seu perfil e facilita a entrega de conteúdo para usuários na aba Explorar.</p>

                <h3>4. Mais pessoas começam a te seguir por causa do número de seguidores que você já tem</h3>
                <p>Comprar seguidores facilita o chamado efeito manada: quando um usuário percebe que a sua conta está ficando grande, o desejo de te acompanhar também é inevitável.</p>
                <p>Com cada vez mais pessoas percebendo que você é referência na sua área de atuação, você poderá experimentar resultados vantajosos de maneira mais rápida e fácil.</p>

                <h3>5. Chama a atenção e traz reconhecimento do seu perfil</h3>
                <p>Funciona assim: o algoritmo percebe o seu conteúdo como relevante e valioso, facilita a entrega para novos usuários e cada vez mais seguidores começam a te acompanhar, reforçando a sua autoridade na sua área.</p>
                <p>Além disso, contas com bons números de seguidores, certamente, passam mais confiança para as pessoas.</p>
                <p>Quem quer acelerar o crescimento no Instagram precisa tomar a melhor decisão para não ficar refém do algoritmo e da distribuição do conteúdo pelo próprio Instagram</p>

                <InformativeBlogButton
                    link="#"
                    text="Quero ter mais visibilidade"
                />

                <p>O passo a passo para comprar seguidores para o seu perfil no Instagram é muito simples e vamos detalhar melhor abaixo:</p>
            </>
        ),
        banner: {
            path: '/images/blog-banners/banner-02.png',
            alt: 'Vale a pena comprar seguidores para o Instagram?'
        },
        sub_topics: [{
            id: 'vale-comprar-seguidores-passo-1',
            title: 'Passo 1: escolha o melhor pacote de acordo com a sua necessidade',
            content: (
                <>
                    <p>Cada usuário tem um objetivo com a sua conta no Instagram.</p>
                    <p>Seja recebendo contatos de marcas para parcerias, ou divulgando o seu negócio local para mais clientes na sua região, ou até mesmo aumentando o agendamento dos seus clientes como autônomo.</p>
                    <p>Por isso é muito importante determinar qual é o seu objetivo com a compra de seguidores. Assim, ficará mais fácil para você escolher qual o pacote que melhor te atende.</p>
                    <p>No ImpulsioneGram, os usuários têm acesso a 7 pacotes com muitas opções de número de seguidores e curtidas.</p>
                    <p>Com certeza, você vai encontrar uma opção que combine com você e com o que você espera do seu perfil no Instagram.</p>
                </>
            )
        }, {
            id: 'vale-comprar-seguidores-passo-2',
            title: 'Passo 2: informar o @ do Instagram que irá receber os seguidores',
            content: (
                <>
                    <p>Essa será a única informação que vamos solicitar do seu Instagram: o seu @usuário.</p>
                    <p>Vamos usar esse dado para saber qual é o perfil que vai receber os seguidores reais e brasileiros.</p>
                    <p>Para proteger o seu perfil, você precisa estar atento a respeito das informações solicitadas no momento da compra. Um site sério nunca vai pedir nenhuma informação que não seja necessária.</p>
                    <p>Aqui, no ImpulsioneGram, pode ficar tranquilo: nós nunca pediremos a sua senha.</p>
                </>
            )
        }, {
            id: 'vale-comprar-seguidores-passo-3',
            title: 'Passo 3: escolher a forma de pagamento mais adequada para você',
            content: (
                <>
                    <p>No momento da compra do pacote de seguidores, você pode escolher a forma de pagamento que for melhor para você.</p>
                    <p>O ImpulsioneGram conta com três opções de pagamento:</p>

                    <ul>
                        <li>PIX</li>
                        <li>Cartão de Crédito</li>
                        <li>Boleto Bancário</li>
                    </ul>

                    <InformativeBlogButton
                        link="#"
                        text="Crescer meu Instagram com segurança"
                    />
                </>
            )
        }, {
            id: 'vale-comprar-seguidores-passo-4',
            title: 'No ImpulsioneGram, a sua compra será de seguidores 100% reais e brasileiros',
            content: (
                <>
                    <p>Imagine a seguinte situação: você está verificando quem segue um determinado perfil no Instagram e encontra nomes de usuários como:</p>

                    <p>“111429.pahw”</p>
                    <p>“__boot.68925”</p>
                    <p>“زحخظ؄؏؞؉ڇڒ"</p>
                    <p>Isso acontece porque esses perfis não são usuários reais e, provavelmente, nem brasileiros.</p>
                    <p>Dessa forma, fica evidente a todos que entrarem em contato com esse perfil que ali existem seguidores comprados.</p>
                    <p>Inclusive, existe um risco do próprio algoritmo do Instagram perceber essa operação.</p>
                    <p>Assim, a estratégia da compra de seguidores pode ter o efeito inverso do esperado: o engajamento começa a cair, a distribuição do conteúdo é prejudicada e o usuário passa a demorar muito mais para começar a ter resultado com o Instagram.</p>
                    <p>Já quando um perfil tem seguidores reais e brasileiros, com mais curtidas que iremos te entregar após comprar seguidores conosco, o engajamento aumenta com mais facilidade.</p>

                    <p>Isso porque:</p>
                    <ul>
                        <li>os demais usuários confiam em um perfil com um grande número de seguidores reais.</li>
                        <li>o efeito de manada é facilitado, ou seja, mais pessoas passam a te seguir, incentivados pela quantidade de seguidores.</li>
                        <li>com mais seguidores, aumenta a credibilidade e confiança na sua marca.</li>
                    </ul>

                    <p>Recomendamos que você busque a garantia de estar recebendo apenas seguidores reais no seu perfil, para não correr o risco de ter problemas com o seu crescimento no futuro.</p>
                    <p>No ImpulsioneGram, todos os seguidores dos nossos pacotes são 100% reais e brasileiros.</p>
                    <p>Por isso, você não precisa se preocupar em gerar má impressão em quem estiver vendo a sua lista de seguidores e nem com o algoritmo do Instagram.</p>
                </>
            )
        }],
    }];

    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-[360px_1fr] gap-10">
                    <NavigationPanel
                        topics={navigationPanelItems}
                    />

                    <div data-informative-blog>
                        {informativeBlogTopicsItems.map((topic, index) => {
                            return (<InformativeBlogTopic
                                key={`${topic.id}-${index}`}
                                topic={topic}
                            />)
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}