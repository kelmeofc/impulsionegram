import { ArchiveCard } from "../ui/archive-card";

export function ArticlesSection() {
    return (
        <section>
            <div className="container">
                <h2 className="section-title">Explore todos os nossos artigos!</h2>
                <p className="text section-text-center mt-8">Acompanhe as melhores dicas para impulsionar o seu perfil no Instagram.</p>

                <div className="mt-10 grid grid-cols-[550px_1fr] max-[1300px]:grid-cols-[500px_1fr] max-[1062px]:grid-cols-[1fr] gap-5">
                    <ArchiveCard
                        title="Como Aumentar os Views nos Stories do Insta: 7 Truques Revelados"
                        category="Views"
                        author={{
                            name: 'Bruna Dias',
                            photo: {
                                src: '/images/profile/profile-05.avif',
                                alt: 'Imagem Bruna Dias'
                            },
                        }}
                        link={{
                            href: 'https://www.impulsionegram.com.br/blog/como-aumentar-visualizacoes-stories/'
                        }}
                        banner={{
                            src: '/images/archives-banners/post-como-aumentar-os-views-nos-stores-do-insta.png',
                            alt: 'Imagem - Como aumentar os views nos stories do insta: 7 truques'
                        }}
                    />

                    <div className="grid grid-rows-2 gap-5">
                        <ArchiveCard
                            title="Marketing digital Instagram: Bombe seu perfil em 2023"
                            category="Marketing"
                            row={true}
                            author={{
                                name: 'Bruna Dias',
                                photo: {
                                    src: '/images/profile/profile-05.avif',
                                    alt: 'Imagem Bruna Dias'
                                },
                            }}
                            link={{
                                href: 'https://www.impulsionegram.com.br/blog/marketing-digital-instagram/'
                            }}
                            banner={{
                                src: '/images/archives-banners/post-marketing-digital-instagram-bombe-no-perfil-em-2023.png',
                                alt: 'Imagem - Marketing digital Instagram: Bombe seu perfil em 2023'
                            }}
                        />

                        <ArchiveCard
                            title="Como vender pelo Instagram: conheça 11 táticas comprovadas!"
                            category="Vendas"
                            row={true}
                            author={{
                                name: 'Bruna Dias',
                                photo: {
                                    src: '/images/profile/profile-05.avif',
                                    alt: 'Imagem Bruna Dias'
                                },
                            }}
                            link={{
                                href: 'https://www.impulsionegram.com.br/blog/como-vender-pelo-instagram/'
                            }}
                            banner={{
                                src: '/images/archives-banners/post-como-vender-pelo-instagram.png',
                                alt: 'Image - Como vender pelo Instagram: conheça 11 táticas comprovadas!'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}