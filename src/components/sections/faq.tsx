import Link from "next/link";
import Logo from "../ui/logo";

export function FaqSection() {
    const faqList = [{
        title: 'Preciso informar a minha senha?',
        text: 'Lorem Ipsum'
    }, {
        title: 'Corro o risco de ter meu perfil bloqueado?',
        text: 'Lorem Ipsum'
    }, {
        title: 'É necessário deixar o perfil aberto?',
        text: 'Lorem Ipsum'
    }, {
        title: 'Posso mudar o @usuario do perfil durante a assinatura?',
        text: 'Lorem Ipsum'
    }, {
        title: 'Preciso seguir alguém de volta?',
        text: 'Lorem Ipsum'
    }, {
        title: 'Por que escolher o ImpulsioneGram?',
        text: 'Lorem Ipsum'
    }, {
        title: 'Quem já contratou o serviço de vocês?',
        text: 'Lorem Ipsum'
    }, {
        title: 'Quais informações eu preciso passar?',
        text: 'Lorem Ipsum'
    }, {
        title: 'Por que eu deveria comprar seguidores?',
        text: 'Lorem Ipsum'
    }];
    
    return (
        <section>
            <div className="container">
                <Logo
                    width="374"
                    height="66"
                />

                <div>
                    <div>
                        <h1>FAQ - Perguntas frequentes</h1>
                        <p>Estamos aqui para te ajudar e caso você não tenha sanado sua dúvida, você pode entrar em contato com o suporte no botão abaixo:</p>
                        <Link
                            href={'#'}
                        >Contatar suporte</Link>
                    </div>

                    <div>
                        <h3>Em quanto tempo começo a receber meus seguidores?</h3>
                        <p>Você receberá o total de seguidores do seu pacote em até 24 horas. Pedimos esse prazo para garantir que todos os seus seguidores serão entregues, mas normalmente o processo é concluido entre 1 e 8 horas, dependendo da quantidade que você contratou.</p>

                        <ul>
                            {faqList.map((li, index) => {
                                return (
                                    <li key={index}>
                                        <details>
                                            <summary>{li.title}</summary>
                                            <p>{li.text}</p>
                                        </details>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}