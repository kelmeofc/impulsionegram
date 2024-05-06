import Star from "@/components/icons/star";

import { VideoSwiper } from "../ui/video-swiper";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function DepoimentosSection() {
	return (
		<section>
			<div className="container">
				<h3 className="text section-text-center mt-8 max-w-[870px]">Ainda está em dúvida?</h3>
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

				{/* <Carousel>
					<CarouselContent>
						{Array.from({ length: 4 }).map(() => (
							<CarouselItem className="basis-1/3 w-full h-[400px] bg-black border border-[#ffffff]"
								style={{
									transform: "translate3d(calc(9.17596% - 800px), 0px, -130.719px) rotateZ(2.61438deg) scale(1)"
								}}
							>...</CarouselItem>
						))}
					</CarouselContent>
				</Carousel> */}

				<VideoSwiper />
			</div>
		</section >
	);
}
