"use client";

// Import Swiper React components
import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";
import { EffectCards } from "swiper/modules";

import Star from "@/components/icons/star";
import Image from "next/image";

export function VideoSwiper() {
	const vimeoStories = [
		{
			link: "803570100",
			content: "video 01",
			avatar: "images/avatars/juliana.png",
			actor: "Juliana Oliveira",
			username: "@julianaoliveira.br",
			description: "Seguidores de alta qualidade",
			stars: "5/5",
		},
		{
			link: "833881036",
			content: "video 02",
			avatar: "https://randomuser.me/api/portraits",
			actor: "Rayssa Hungria",
			username: "@rayssahungria",
			description: "Melhor experiência da minha vida",
			stars: "5/5",
		},
		{
			link: "803582947",
			content: "video 03",
			avatar: "https://randomuser.me/api/portraits",
			actor: "Giovani Teles",
			username: "@giovanitelesoficial",
			description: "Meu negócio dobrou de tamanho",
			stars: "5/5",
		},
		{
			link: "803569955",
			content: "video 04",
			avatar: "https://randomuser.me/api/portraits",
			actor: "Taise",
			username: "@pravoceunhas",
			description: "Meu salão de beleza tá bombando",
			stars: "5/5",
		},
		{
			link: "803582703",
			content: "video 05",
			avatar: "https://randomuser.me/api/portraits",
			actor: "Ana Carolina",
			username: "@richelly_groomer",
			description: "Hoje fecho muito mais parcerias",
			stars: "5/5",
		},
		{
			link: "803569834",
			content: "video 05",
			avatar: "https://randomuser.me/api/portraits",
			actor: "Karin Hermann",
			username: "@k_herrmann8",
			description: "Minha presença está muito mais forte!",
			stars: "5/5",
		},
		{
			link: "833881088",
			content: "video 05",
			avatar: "",
			actor: "Karin Hermann",
			username: "@k_herrmann8",
			description: "Minha presença está muito mais forte!",
			stars: "5/5",
		},
	];

	return (
		<>
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards, Pagination]}
				pagination={{
					dynamicBullets: true,
				}}
				onSlideChange={() => {
					const activeItem = document.querySelector(
						".swiper-slide-active [data-video]"
					);
				}}
			>
				{vimeoStories.map((video, index) => (
					<SwiperSlide className="relative rounded-[40px] bg-[#AF3EC4] overflow-hidden" key={index}>
						<iframe
							className="w-full h-full rounded-3xl"
							src={`https://player.vimeo.com/video/${video.link}`}
						></iframe>

						{/* <video className="w-full h-full rounded-3xl" src={`@/videos/${video.link}.m4a`}></video> */}

						<div
							className="w-full p-7 absolute left-0 bottom-0 z-[999] bg-[#220439] text-white flex flex-col gap-3"
							style={{
								backdropFilter: "blur(50px)",
							}}
						>
							<h3 className="font-bold text-[18px] text-[#E5DFD9] text-center">&quot;{video.description}&quot;</h3>

							<div className="flex flex-row gap-2 justify-center align-middle">
								<Star />
								<Star />
								<Star />
								<Star />
								<Star />

								<span className="font-bold tracking-widest text-[#E5DFD9]">5/5</span>

								<div>
									{/* <Image
										src={video.link}
										alt={video.username}
										width={20}
										height={20}
									/> */}
								</div>
							</div>

						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
