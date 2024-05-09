import { CheckoutDialog } from "../ui/checkout-dialog";
import { LinkButton } from "../ui/link-button";

export function BannerAdsSection() {
    return (
      <section className="my-48">
        <div className="container">
          <div className="flex flex-col justify-center align-middle text-center gap-2 lg:gap-6 w-full lg:bg-[url('/images/bg-banner-ads.png')] bg-cover bg-center  lg:px-24 lg:py-20 py-8 px-6 bg-[#F9BF10] rounded-[30px]">
            <div className="justify-center">
                <h2 className="section-title max-w-[830px] m-auto text-center w-auto">
              Você está pronto para bombar o seu Instagram?
            </h2>
            </div>
            
            <p className="text text-[#1A002D] opacity-[0.6]">
              Nossos clientes nos escolhem porque oferecemos o melhor serviço e
              o melhor atendimento.
            </p>
            <div className="vh-100">
              <CheckoutDialog>
                <button
                  id="comprar-agora"
                  className="w-full text-[22px] font-bold text-white bg-[#4F008E] py-5 rounded-full opacity-[0.8]"
                >
                  Comprar seguidores agora!
                </button>
              </CheckoutDialog>
            </div>

            <p className="text text-[#1A002D] font-[14px]">
              Leva menos de 5 minutinhos!
            </p>
          </div>
        </div>
      </section>
    );
}