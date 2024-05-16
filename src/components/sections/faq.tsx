'use client'

import Link from "next/link";
import Logo from "../ui/logo";

export function FaqSection() {
    const faqList = [{
        title: 'Preciso informar a minha senha?',
        text: (
            <p>Não, jamais pediremos sua senha. Precisamos apenas que informe para qual usuário devemos enviar os seguidores.</p>
        )
    }, {
        title: 'Corro o risco de ter meu perfil bloqueado?',
        text: (
            <>
                <p>Jamais! Fornecemos o serviço desde 2014 e somos líderes em serviços de marketing para Instagram. Sua segurança é nossa prioridade número um em cada serviço que oferecemos.</p>
                <p>Para garantir que sua conta esteja segura, modificamos continuamente nossas técnicas de entrega à medida que o Instagram faz alterações e atualizações. Em todos esses anos de mercado, nenhum de nossos mais de 38.000 clientes foi bloqueado ou teve a conta desativada.</p>
            </>
        )
    }, {
        title: 'É necessário deixar o perfil aberto?',
        text: (
            <p>Sim. Seu perfil não poderá estar privado, deixe seu perfil em modo público para receber os nossos serviços.</p>
        )
    }, {
        title: 'Por que escolher o ImpulsioneGram?',
        text: (
            <>
                <p>O ImpulsioneGram foi criado por uma equipe de especialistas em mídia social com mais de 12 anos de experiência em plataformas de mídia social. Testamos e aprimoramos constantemente nosso processo para nos mantermos um passo à frente da concorrência.</p>
                <p>Estamos constantemente executando testes no ecossistema do Instagram. Isso nos permite encontrar a velocidade ideal do seguidor ao lançar novos pedidos. Nosso sistema impulsiona usuários - então você não terá problemas com o Instagram sobre seus termos e condições.</p>
            </>
        )
    }, {
        title: 'Quais informações eu preciso passar?',
        text: (
            <>
                <p>Não precisamos de muito - apenas do seu nome de usuário.</p>
                <p>Nunca pediremos sua senha ou qualquer informação pessoal ou privada sobre sua conta.</p>
                <p>Aceitamos as principais formas de pagamento, incluindo todos os principais cartões de crédito, Pix e boleto bancário.</p>
            </>
        )
    }, {
        title: 'Posso marcar algum usuário nos comentários?',
        text: (
            <>
                <p>Infelizmente não. Não permitimos o uso de menções @ nos comentários! Observe também que não publicaremos comentários que violem as políticas do Instagram. Isso inclui conteúdo odioso, racista ou discriminatório.</p>
            </>
        )
    }, {
        title: 'E se eu tiver algum problema?',
        text: (
            <>
                <p>Se ainda assim você não estiver satisfeito com os nossos serviços, poderá cancelar em até 7 dias e receber seu dinheiro de volta integralmente. Sem pegadinhas.</p>
            </>
        )
    }, {
        title: 'O que vai estar escrito nos comentários?',
        text: (
            <>
                <p>É você quem decide! Clientes elogiando seus produtos e serviços? Pessoas afirmando que são fãs? Gente destacando as suas qualidades? Você pode escolher!</p>
            </>
        )
    }];

    return (
        <section id="faq">
            <div className="container">
                <div>
                    <Logo
                        width="374"
                        height="66"
                        className="flex max-[550px]:justify-center"
                    />
                </div>

                <div className="grid min-[1140px]:grid-cols-[500px_1fr] gap-16 mt-14 max-[550px]:mt-3 text-lg">
                    <div>
                        <h2 className="max-[1140px]:text-center text-[#1A002D] font-bold text-6xl max-[550px]:text-2xl">FAQ - Perguntas frequentes</h2>
                        <p className="max-[1140px]:text-center mt-7">Estamos aqui para te ajudar e caso você não tenha sanado sua dúvida, você pode entrar em contato com o suporte no botão abaixo:</p>
                        <Link
                            href={'#'}
                            className="text-2xl max-[1140px]:py-5 py-7 w-full block mt-16 text-center text-[#4F008E] border-[#4F008E] border-[3px] rounded-full font-bold hover:bg-[#4F008E] hover:text-[#ffffff]"
                        >Contatar suporte</Link>
                    </div>

                    <div className="max-[1140px]:mt-8">
                        <h3 className="text-xl text-[#4F008E] font-bold">Em quanto tempo começo a receber meus seguidores?</h3>
                        <p className="text-base text-[#81629B] mt-8">Você receberá o total de seguidores do seu pacote em até 24 horas. Pedimos esse prazo para garantir que todos os seus seguidores serão entregues, mas normalmente o processo é concluido entre 1 e 8 horas, dependendo da quantidade que você contratou.</p>

                        <ul className="mt-8">
                            {faqList.map((li, index) => {
                                return (
                                    <li key={index} className="border-b border-[#DAB3FC] first:border-t">
                                        <details data-op-faq onClick={(event) => {
                                            const ops = Array.from(document.querySelectorAll('[data-op-faq]'));

                                            ops.map(op => {
                                                op.removeAttribute('open');
                                            });

                                            event.currentTarget.setAttribute('open-op', '');
                                        }}>
                                            <summary
                                                className="text-2xl text-[#1A002D] p-6 cursor-pointer list-none flex items-center justify-between font-bold">
                                                {li.title}
                                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9964 9.5533 24.6256 6.24882 22.1884 3.81163C19.7512 1.37445 16.4467 0.00363977 13 0ZM17.7075 14.7075L13.7075 18.7075C13.6146 18.8005 13.5043 18.8742 13.3829 18.9246C13.2615 18.9749 13.1314 19.0008 13 19.0008C12.8686 19.0008 12.7385 18.9749 12.6171 18.9246C12.4957 18.8742 12.3854 18.8005 12.2925 18.7075L8.29251 14.7075C8.10486 14.5199 7.99945 14.2654 7.99945 14C7.99945 13.7346 8.10486 13.4801 8.29251 13.2925C8.48015 13.1049 8.73464 12.9994 9.00001 12.9994C9.26537 12.9994 9.51987 13.1049 9.70751 13.2925L12 15.5863V8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7C13.2652 7 13.5196 7.10536 13.7071 7.29289C13.8946 7.48043 14 7.73478 14 8V15.5863L16.2925 13.2925C16.4801 13.1049 16.7346 12.9994 17 12.9994C17.2654 12.9994 17.5199 13.1049 17.7075 13.2925C17.8951 13.4801 18.0006 13.7346 18.0006 14C18.0006 14.2654 17.8951 14.5199 17.7075 14.7075Z" fill="#4F008E" />
                                                </svg>
                                            </summary>

                                            <div className="p-6 pt-0 flex gap-3 text-justify flex-col">
                                                {li.text}
                                            </div>
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