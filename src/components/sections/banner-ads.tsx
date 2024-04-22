import { LinkButton } from "../ui/link-button";

export function BannerAdsSection() {
    return (
        <section>
            <div className="container">
                <div>
                    <h1>Você está pronto para bombar o seu Instagram?</h1>
                    <p>Nossos clientes nos escolhem porque oferecemos o melhor serviço e o melhor atendimento.</p>

                    <LinkButton href="#">Comprar seguidores agora!</LinkButton>

                    <span>Leva menos de 5 minutinhos!</span>
                </div>
            </div>
        </section>
    );
}