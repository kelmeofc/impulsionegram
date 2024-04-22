import { ArchiveCard } from "../ui/archive-card";

export function ArticlesSection() {
    return (
        <section>
            <div className="container">
                <h1 className="section-title">Explore todos os nossos artigos!</h1>
                <p className="text section-text-center mt-8">Acompanhe as melhores dicas para impulsionar o seu perfil no Instagram.</p>

                <div className="mt-10 grid grid-cols-[550px_1fr] max-[1300px]:grid-cols-[500px_1fr] max-[1062px]:grid-cols-[1fr] gap-5">
                    <ArchiveCard
                        title="Como Aumentar os Views nos Stories do Insta: 7 Truques Revelados"
                        category="Views"
                        author={{
                            name: 'Bruna Dias',
                            photo: {
                                src: 'images/profile/profile-05.png',
                                alt: 'Imagem Bruna Dias'
                            },
                        }}
                        link={{
                            href: ''
                        }}
                        banner={{
                            src: 'images/archives-banners/archive-01.png',
                            alt: ''
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
                                    src: 'images/profile/profile-05.png',
                                    alt: 'Imagem Bruna Dias'
                                },
                            }}
                            link={{
                                href: ''
                            }}
                            banner={{
                                src: 'images/archives-banners/archive-02.png',
                                alt: ''
                            }}
                        />

                        <ArchiveCard
                            title="Como vender pelo Instagram: conheça 11 táticas comprovadas!"
                            category="Vendas"
                            row={true}
                            author={{
                                name: 'Bruna Dias',
                                photo: {
                                    src: 'images/profile/profile-05.png',
                                    alt: 'Imagem Bruna Dias'
                                },
                            }}
                            link={{
                                href: ''
                            }}
                            banner={{
                                src: 'images/archives-banners/archive-03.png',
                                alt: ''
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}