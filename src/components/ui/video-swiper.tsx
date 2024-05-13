"use client";

// Import Swiper React components
import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
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
			link: "803569955",
			content: "video 03",
			avatar: "https://randomuser.me/api/portraits",
			actor: "Giovani Teles",
			username: "@giovanitelesoficial",
			description: "Meu negócio dobrou de tamanho",
			stars: "5/5",
		},
		{
			link: "803582947",
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
				cardsEffect={{
					perSlideOffset: 45,
					perSlideRotate: 3
				}}
				onSlideChange={() => {
					const activeItem = document.querySelector(
						".swiper-slide-active [data-video]"
					);
				}}
			>
				{vimeoStories.map((video, index) => (
					<SwiperSlide
						className="relative rounded-[40px] bg-[#AF3EC4] overflow-hidden"
						key={index}
					>

						<video onClick={({ currentTarget }: { currentTarget: any }) => {
							if (currentTarget.paused) {
								currentTarget.play();
							} else {
								currentTarget.pause();
							}
						}} className="w-full h-full rounded-3xl" src={`/videos/${video.link}.mp4`}></video>

						<div
							className="w-full py-7 px-11 absolute left-0 bottom-0 z-[999] bg-[rgba(34,4,57, .3)] text-white flex flex-col gap-3 max-[400px]:gap-1 max-[400px]:py-2 max-[400px]:px-2"
							style={{
								backdropFilter: 'blur(30px)'
							}}
						>
							<h3 className="font-bold text-[18px] text-[#E5DFD9] text-center">
								&quot;{video.description}&quot;
							</h3>

							<div className="flex flex-row gap-2 justify-center align-middle">
								<div className="flex gap-[2px]">
									<Star className="max-[400px]:w-4"/>
									<Star className="max-[400px]:w-4"/>
									<Star className="max-[400px]:w-4"/>
									<Star className="max-[400px]:w-4"/>
									<Star className="max-[400px]:w-4"/>
								</div>

								<span className="font-bold tracking-widest text-[#E5DFD9]">
									5/5
								</span>
							</div>

							<div className="flex gap-2 items-center justify-center">
								<Image
									className="w-[30px] h-[30px]"
									src={`/images/profile/${video.link}.png`}
									alt={video.username}
									width={30}
									height={30}
								/>

								<p className="text-[10px] font-bold">{video.actor} <span className="font-normal block">{video.username}</span></p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
