import Star from "@/components/icons/star";

import { VideoSwiper } from "../ui/videoSwiper";

export function DepoimentosSection() {
  return (
    <div>
      <p className="text section-text-center mt-8 max-w-[870px]">
        Ainda está em dúvida?
      </p>
      <h2 className="section-title">Veja o que nossos clientes dizem</h2>

      <div className="flex-col flex justify-center mt-4">
        <div className="flex flex-row gap-2 justify-center align-middle">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className="text section-text-center mt-8">

          4,9 de 5 (48.672 avaliações)
        </p>
      </div>

      <VideoSwiper />
    </div>
  );
}
