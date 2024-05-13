import Star from "@/components/icons/star";

import { VideoSwiper } from "../ui/video-swiper";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function DepoimentosSection() {
	return (
		<section className="overflow-hidden">
			<div className="container">
				<h3 className="text section-text-center max-w-[870px]">Ainda está em dúvida?</h3>
				<h2 className="section-title">Veja o que nossos clientes dizem</h2>

				<div className="flex-col flex justify-center mt-4">
					<div className="flex flex-row gap-2 justify-center align-middle">
						<Star />
						<Star />
						<Star />
						<Star />
						<Star />
					</div>

					<p className="text section-text-center mt-2">
						4,9 de 5 (48.672 avaliações)
					</p>
				</div>

				<div className="mt-16 pb-12">
					<VideoSwiper />
				</div>
			</div>
		</section >
	);
}
