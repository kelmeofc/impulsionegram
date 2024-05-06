"use client";

// Import Swiper React components
import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper/modules";
import { EffectCards } from "swiper/modules";

import Star from "@/components/icons/star";

export function VideoSwiper() {
  const vimeoStories = [
    {
      link: "https://vimeo.com/803570100",
      content: "video 01",
      avatar: "https://randomuser.me/api/portraits",
      actor: "Juliana Oliveira",
      username: "@julianaoliveira.br",
      description: "Seguidores de alta qualidade",
      stars: "5/5",
    },
    {
      link: "https://vimeo.com/833881036",
      content: "video 02",
      avatar: "https://randomuser.me/api/portraits",
      actor: "Rayssa Hungria",
      username: "@rayssahungria",
      description: "Melhor experiência da minha vida",
      stars: "5/5",
    },
    {
      link: "https://vimeo.com/803582947",
      content: "video 03",
      avatar: "https://randomuser.me/api/portraits",
      actor: "Giovani Teles",
      username: "@giovanitelesoficial",
      description: "Meu negócio dobrou de tamanho",
      stars: "5/5",
    },
    {
      link: "https://vimeo.com/803569955",
      content: "video 04",
      avatar: "https://randomuser.me/api/portraits",
      actor: "Taise",
      username: "@pravoceunhas",
      description: "Meu salão de beleza tá bombando",
      stars: "5/5",
    },
    {
      link: "https://vimeo.com/803582703",
      content: "video 05",
      avatar: "https://randomuser.me/api/portraits",
      actor: "Ana Carolina",
      username: "@richelly_groomer",
      description: "Hoje fecho muito mais parcerias",
      stars: "5/5",
    },
    {
      link: "https://vimeo.com/803569834",
      content: "video 05",
      avatar: "https://randomuser.me/api/portraits",
      actor: "Karin Hermann",
      username: "@k_herrmann8",
      description: "Minha presença está muito mais forte!",
      stars: "5/5",
    },
    {
      link: "https://vimeo.com/833881088",
      content: "video 05",
      avatar: "https://randomuser.me/api/portraits",
      actor: "Karin Hermann",
      username: "@k_herrmann8",
      description: "Minha presença está muito mais forte!",
      stars: "5/5",
    },
  ];

  return (
    <Swiper
      spaceBetween={500}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      scrollbar={{ draggable: true }}
      modules={[Pagination, EffectCards]}
      effect={"cards"}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      className=""
    >
      {vimeoStories.map((item, index) => {
        return (
          <SwiperSlide
            className="w-full flex justify-center gap-8 align-middle m-auto rounded-2xl"
            key={index}
          >
            <div
              className="w-flex m-auto flex-col align-middle justify-center"
              key={index}
            >
              <iframe
                width="100%"
                height="400"
                src={item.link}
                allow="autoplay; encrypted-media; fullscreen"
              ></iframe>

              <div className="flex flex-col justify-center text-white text-center">
                <h3>{item.description}</h3>
                <div className="flex flex-row gap-2 m-auto justify-center align-middle backdrop-blur-[24.08px]">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <p>{item.stars}</p>
                </div>

                {/* <Image alt="tes" width="32" height="32" src={item.avatar} className="w-[32px] h-[32px]" /> */}
                <div className="">
                  <h4>{item.actor}</h4>
                  <h4>{item.username}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
