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
			content: "Vídeo 01",
			avatar: "images/avatars/juliana.png",
			actor: "Juliana Oliveira",
			username: "@julianaoliveira.br",
			description: "Seguidores de alta qualidade!",
			stars: "5/5",
		},
		{
			link: "803582947",
			content: "Vídeo 02",
			avatar: "images/avatars/rayssa.png",
			actor: "Rayssa Hungria",
			username: "@rayssahungria",
			description: "Tenho muito mais visibilidade e clientes!",
			stars: "5/5",
		},
		{
			link: "803569955",
			content: "Vídeo 03",
			avatar: "images/avatars/giovani.png",
			actor: "Giovani Teles",
			username: "@giovanitelesoficial",
			description: "Meu negócio dobrou de tamanho!",
			stars: "5/5",
		},
		{
			link: "803582703",
			content: "Vídeo 04",
			avatar: "images/avatars/taise.png",
			actor: "Taise",
			username: "@pravoceunhas",
			description: "Melhor experiência da minha vida!",
			stars: "5/5",
		},
		{
			link: "803569834",
			content: "Vídeo 05",
			avatar: "images/avatars/ana.png",
			actor: "Ana Carolina",
			username: "@richelly_groomer",
			description: "Meu salão de beleza tá bombando!",
			stars: "5/5",
		},
		{
			link: "833881088",
			content: "Vídeo 06",
			avatar: "images/avatars/ana-carolina.png",
			actor: "Karin Hermann",
			username: "@k_herrmann8",
			description: "Minha presença está muito mais forte!",
			stars: "5/5",
		},
		{
			link: "833881036",
			content: "Vídeo 07",
			avatar: "images/avatars/karin.png",
			actor: "Luciana Sabbag",
			username: "@nutriluciaespada",
			description: "Tenho muito mais visibilidade e clientes!",
			stars: "5/5",
		},
	];

	return (
		<>
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards, Pagination]}
				/* centeredSlides={true} */
				loop={true}
				pagination={{
					dynamicBullets: true,
				}}
				cardsEffect={{
					perSlideOffset: 45,
					perSlideRotate: 3,
				}}
				onSlideChange={() => {
					const activeItem = document.querySelector(
						".swiper-slide-active [data-video]"
					);
				}}
			>
				{vimeoStories.map((video, index) => (
					<SwiperSlide
						className="relative rounded-[32px] bg-[#AF3EC4] overflow-hidden w-[337.5px] h-[600px]"
						key={index}
					>
						<video
							onClick={({ currentTarget }: { currentTarget: any }) => {
								const videos = document.querySelectorAll("video") as any;

								if (currentTarget.paused) {
									Array.from(videos).map((video: any) => {
										video.pause();
									});

									currentTarget.play();
								} else {
									currentTarget.pause();
								}
							}}
							className="w-[337.5px] h-[600px]"
							src={`/videos/${video.link}.webm`}
						></video>

						<div
							className="w-full py-7 px-11 absolute left-0 bottom-0 z-[999] bg-[rgba(34,4,57, .3)] text-white flex flex-col gap-3 max-[400px]:gap-1 max-[400px]:py-2 max-[400px]:px-2"
							style={{
								backdropFilter: "blur(30px)",
							}}
						>
							<h3 className="font-bold text-[18px] text-[#E5DFD9] text-center">
								&quot;{video.description}&quot;
							</h3>

							<div className="flex flex-row gap-2 justify-center align-middle">
								<div className="flex gap-[2px]">
									<Star className="max-[400px]:w-4" />
									<Star className="max-[400px]:w-4" />
									<Star className="max-[400px]:w-4" />
									<Star className="max-[400px]:w-4" />
									<Star className="max-[400px]:w-4" />
								</div>

								<span className="font-bold tracking-widest text-[#E5DFD9]">
									5/5
								</span>
							</div>

							<div className="flex gap-2 items-center justify-center">
								<Image
									className="w-[30px] h-[30px]"
									src={`/images/avatars/${video.avatar}.png`}
									alt={video.username}
									width={30}
									height={30}
								/>

								<p className="text-[10px] font-bold">
									{video.actor}{" "}
									<span className="font-normal block">{video.username}</span>
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
