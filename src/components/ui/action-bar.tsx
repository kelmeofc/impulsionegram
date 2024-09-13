"use client";

import { usePackageContext } from "@/providers/package-provider";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { CheckoutDialog } from "./checkout-dialog";

export function ActionBar({
  items,
}: {
  items: {
    payment_id: string;
    card_id: string;
    label: string;
    amount: string;
    promo_price: number;
    price: number;
    subtitle?: string;
  }[];
}) {
  const profilePhotos = [
    "profile-01.avif",
    "profile-02.avif",
    "profile-03.avif",
    "profile-04.avif",
  ];

  const { productPackage, handlePackage } = usePackageContext() as any;

  const [packageIndex, setPackageIndex] = useState(3);
  const [selectedPackage, setSelectedPackage] = useState({
    label: "",
    amount: "",
    promo_price: 0,
    price: 0,
    subtitle: "",
  });

  useEffect(() => {
    handlePackage({
      index: 3,
      payment_id: items[3].payment_id,
      card_id: items[3].card_id,
      price: items[3].price,
      promo_price: items[3].promo_price,
      label: items[3].label,
      amount: items[3].amount,
      subtitle: items[3].subtitle,
    });
  }, []);


  function regress() {
    if (packageIndex - 1 >= 0) {
      setSelectedPackage(items[packageIndex - 1] as any);
      handlePackage({
        index: packageIndex - 1,
        payment_id: items[packageIndex - 1].payment_id,
        card_id: items[packageIndex - 1].card_id,
        price: items[packageIndex - 1].price,
        promo_price: items[packageIndex - 1].promo_price,
        label: items[packageIndex - 1].label,
        amount: items[packageIndex - 1].amount,
        subtitle: items[packageIndex - 1].subtitle,
      });
      setPackageIndex(packageIndex - 1);
    }
  }

  function pass() {
    if (packageIndex + 1 < items.length) {
      setSelectedPackage(items[packageIndex + 1] as any);
      handlePackage({
        index: packageIndex + 1,
        payment_id: items[packageIndex + 1].payment_id,
        card_id: items[packageIndex + 1].card_id,
        price: items[packageIndex + 1].price,
        promo_price: items[packageIndex + 1].promo_price,
        label: items[packageIndex + 1].label,
        amount: items[packageIndex + 1].amount,
        subtitle: items[packageIndex + 1].subtitle,
      });
      setPackageIndex(packageIndex + 1);
    }
  }
  useEffect(() => {
    const packagesBar = document.querySelector("[data-action-bar]");
    const chatwootWidget = document.querySelector("woot--bubble-holder");
    const packagesContainer = document.querySelector(
      "[data-action-bar-container]"
    ) as HTMLElement;
    var lastPosition!: number;

    window.addEventListener("scroll", () => {
      var currentPosition = window.scrollY;
      if (!packagesContainer?.classList.contains("opacity-0")) {
        if (currentPosition < lastPosition) {
          if (!packagesBar?.classList.contains("top-[-100%]")) {
            packagesBar?.classList.add("hidden");
            packagesBar?.classList.add("top-[-100%]");
            packagesBar?.classList.remove("top-[0]");
          }

        } else {
          if (packagesBar?.classList.contains("top-[-100%]")) {
            packagesBar?.classList.remove("hidden");
            packagesBar?.classList.remove("top-[-100%]");
            packagesBar?.classList.add("top-0");
          }

        }
      }

      lastPosition = currentPosition;
    });
  });
  useEffect(() => {
    const effectContainer = document.querySelector("[data-gradient]");
    setSelectedPackage(productPackage.card_id as any);

    window.addEventListener("scroll", (event) => {
      const actionBar = document.querySelector(
        "[data-action-bar]"
      ) as HTMLElement;
      const container = document.querySelector(
        "[data-action-bar-container]"
      ) as HTMLElement;

      if (container) {
        if (actionBar.getBoundingClientRect().top < 200) {
          container.classList.remove("opacity-0", "pointer-events-none");
        } else {
          container.classList.add("opacity-0", "pointer-events-none");
        }
      }
    });
  }, [items]);

  return (
    <div data-action-bar>
      <div
        className="!z-[49] opacity-0 pointer-events-none transition fixed bottom-0 left-0 right-0"
        data-action-bar-container
      >
        {/* {items.filter((_item) => _item.card_id == (selectedPackage as any).card_id)[0].promo_price} */}
        <div className="container bg-white rounded-t-2xl px-14 py-5 flex justify-around items-center max-[640px]:flex-col max-[640px]:gap-5">
          <div className="flex justify-between flex-col gap-3 items-start max-[640px]:flex-row max-[640px]:gap-5 max-[640px]:w-full align-middle">
            <div className="max-[640px]:flex max-[640px]:justify-between max-[640px]:w-full max-[640px]:items-center">
              <p className="font-medium text-[#8C8096] flex items-start gap-[5px] min-[980px]:hidden">
                R$
                <span className="text-4xl font-bold text-[#1A002D] leading-[1]">
                  {productPackage.price % 1 == 0
                    ? productPackage.price
                    : productPackage.price.toFixed(2).replace(".", ",")}
                </span>
                {productPackage.promo_price !== 0 && (
                  <span className="text-[#FF0000] line-through">
                    R$
                    {productPackage.promo_price % 1 == 0
                      ? productPackage.promo_price
                      : productPackage.promo_price.toFixed(2).replace(".", ",")}
                  </span>
                )}
              </p>

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((item, index) => {
                  return (
                    <svg
                      key={index}
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.4097 19.5279C16.2454 19.5286 16.0833 19.4898 15.937 19.4149L10.6961 16.6711L5.45509 19.4149C5.28491 19.5044 5.09303 19.5443 4.90127 19.5302C4.70952 19.5161 4.52557 19.4484 4.37035 19.3349C4.21512 19.2215 4.09485 19.0667 4.02319 18.8883C3.95154 18.7099 3.93138 18.5149 3.96502 18.3256L4.99266 12.54L0.758777 8.42941C0.626682 8.29759 0.532975 8.13229 0.487714 7.95124C0.442453 7.7702 0.447345 7.58024 0.501867 7.40177C0.561429 7.21913 0.670992 7.05685 0.818124 6.93333C0.965255 6.80981 1.14406 6.73001 1.33426 6.70297L7.19181 5.85003L9.77118 0.578237C9.85533 0.404493 9.98672 0.257965 10.1503 0.155439C10.3139 0.052913 10.503 -0.00146484 10.6961 -0.00146484C10.8891 -0.00146484 11.0783 0.052913 11.2418 0.155439C11.4054 0.257965 11.5368 0.404493 11.6209 0.578237L14.2311 5.83976L20.0887 6.6927C20.2789 6.71973 20.4577 6.79953 20.6048 6.92305C20.752 7.04657 20.8615 7.20885 20.9211 7.39149C20.9756 7.56997 20.9805 7.75992 20.9352 7.94097C20.89 8.12201 20.7963 8.28731 20.6642 8.41913L16.4303 12.5297L17.4579 18.3153C17.4946 18.508 17.4754 18.7071 17.4026 18.8892C17.3297 19.0713 17.2063 19.2287 17.0469 19.343C16.8608 19.4734 16.6367 19.5384 16.4097 19.5279Z"
                        fill="#F9BF10"
                      />
                    </svg>
                  );
                })}
              </div>
            </div>

            <Image
              alt="Fotos de Perfil do Instagram"
              title="Fotos de Perfil"
              width={114}
              height={38}
              src="/images/avatars.avif"
              className="w-auto max-w-[114px] sm:h-[28px] sm:flex min-[400px]:h-[18px] h-[12px] hidden "
            />

            <p className="min-[580px]:w-[190px] max-[640px]:hidden">
              Mais de <span>62.356</span> pessoas usam o ImpulsioneGram
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="max-w-[350px] relative">
              <div
                data-gradient
                className="absolute top-[-2px] bottom-[-2px] left-[-2px] right-[-2px] z-[50] block rounded-full"
              ></div>

              <div
                className="z-[51] relative rounded-full"
                style={{
                  background: `linear-gradient(90deg,#DFD7F2 ${
                    ((productPackage.index == 0 ? 0.5 : productPackage.index) / (items.length - 1)) * 100
                  }%,#ECE6F9 ${
                    ((productPackage.index == 0 ? 0.5 : productPackage.index) / (items.length - 1)) * 100
                  }%)`,
                }}
              >
                <button
                  className="absolute left-8 top-1/2 w-[50px] h-[50px] text-[#34005B] text-4xl rounded-full bg-white"
                  style={{
                    transform: "translateY(-50%)",
                  }}
                  onClick={regress}
                >
                  -
                </button>

                <div className="rounded-full text-center text-[#1A002D] flex flex-col py-1 min-w-[350px]">
                  <span className="text-sm font-bold">
                    {productPackage.label}
                  </span>
                  <span className="text-2xl font-bold">
                    {productPackage.amount}
                  </span>
                  <span className="text-sm font-medium">
                    {productPackage.subtitle || "‎"}
                  </span>
                </div>

                <button
                  className="absolute right-8 top-1/2 w-[50px] h-[50px] text-[#34005B] text-4xl rounded-full bg-white"
                  style={{
                    transform: "translateY(-50%)",
                  }}
                  onClick={pass}
                >
                  +
                </button>
              </div>
            </div>
            <CheckoutDialog>
              <button className="py-4 w-full bg-[#4F008E] text-white font-bold block rounded-full">
                Comprar Agora
              </button>
            </CheckoutDialog>
          </div>

          <div className="max-[980px]:hidden min-[980px]:w-60 ">
            <p className="text-xl font-medium text-[#8C8096] flex items-start gap-[5px]">
              R$
              <span className="text-4xl font-bold text-[#1A002D] leading-[1]">
                {productPackage.price % 1 == 0
                  ? productPackage.price
                  : productPackage.price.toFixed(2).replace(".", ",")}
              </span>
              {productPackage.promo_price > 0 && (
                <span className="text-[#FF0000] line-through opacity-60">
                  R$
                  {productPackage.promo_price % 1 == 0
                    ? productPackage.promo_price
                    : productPackage.promo_price.toFixed(2).replace(".", ",")}
                </span>
              )}
            </p>

            <p className="text-[#B2ACB6] text-base font-medium mt-3">
              3x de R$ {(productPackage.price / 3).toFixed(2).replace(".", ",")}{" "}
              sem juros no cartão
            </p>

            <ul className="flex gap-4 mt-3">
              <li>
                <svg
                  width="50"
                  height="19"
                  viewBox="0 0 50 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_709_1046)">
                    <path
                      d="M12.8397 14.2352C12.1937 14.2352 11.5873 13.992 11.1301 13.5446L8.665 11.1323C8.49602 10.967 8.18789 10.967 8.01891 11.1323L5.54388 13.5543C5.08665 14.0017 4.48032 14.2449 3.83422 14.2449H3.34717L6.47823 17.3089C7.45233 18.2621 9.04272 18.2621 10.0168 17.3089L13.1578 14.2352H12.8397Z"
                      fill="#A9A6AC"
                    />
                    <path
                      d="M3.81943 5.68514C4.46552 5.68514 5.07186 5.92831 5.52909 6.37574L8.00412 8.79773C8.18303 8.97282 8.47129 8.97282 8.65021 8.79773L11.1153 6.38547C11.5725 5.93803 12.1789 5.69486 12.825 5.69486H13.1231L9.98215 2.62117C9.00804 1.66794 7.41767 1.66794 6.44356 2.62117L3.3125 5.68514H3.81943Z"
                      fill="#A9A6AC"
                    />
                    <path
                      d="M15.736 8.24158L13.8375 6.38375C13.7977 6.40321 13.748 6.41293 13.6983 6.41293H12.8336C12.3863 6.41293 11.9489 6.58802 11.6408 6.89928L9.1757 9.31154C8.94709 9.53526 8.63895 9.65198 8.34076 9.65198C8.03262 9.65198 7.73442 9.53526 7.50581 9.31154L5.03078 6.88955C4.71271 6.57829 4.27535 6.40321 3.838 6.40321H2.77443C2.72473 6.40321 2.68497 6.39348 2.64521 6.37402L0.746694 8.23186C-0.227414 9.18509 -0.227414 10.7414 0.746694 11.6946L2.64521 13.5525C2.68497 13.533 2.72473 13.5233 2.77443 13.5233H3.838C4.28529 13.5233 4.72265 13.3482 5.03078 13.0369L7.50581 10.6149C7.9531 10.1772 8.73835 10.1772 9.18565 10.6149L11.6507 13.0272C11.9688 13.3385 12.4062 13.5135 12.8435 13.5135H13.7083C13.758 13.5135 13.7977 13.5233 13.8474 13.5427L15.746 11.6849C16.7101 10.7414 16.7101 9.19481 15.736 8.24158Z"
                      fill="#A9A6AC"
                    />
                    <path
                      d="M20.5117 16.876V6.96436C20.5117 5.13571 22.0226 3.65723 23.8913 3.65723H26.8832C28.7419 3.65723 30.2429 5.13571 30.2429 6.95463V9.06536C30.2429 10.894 28.732 12.3725 26.8633 12.3725H22.6388"
                      stroke="#A9A6AC"
                      strokeWidth="1.4"
                      strokeMiterlimit="7.7732"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.085 3.6543H32.3871C33.1525 3.6543 33.7687 4.25736 33.7687 5.00633V12.4182"
                      stroke="#A9A6AC"
                      strokeWidth="1.4"
                      strokeMiterlimit="7.7732"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M33.4859 2.51051L32.8994 1.93663C32.7503 1.79073 32.7503 1.55728 32.8994 1.4211L33.4859 0.84722C33.635 0.701317 33.8735 0.701317 34.0127 0.84722L34.5991 1.4211C34.7482 1.567 34.7482 1.80045 34.5991 1.93663L34.0127 2.51051C33.8735 2.65641 33.635 2.65641 33.4859 2.51051Z"
                      fill="#A9A6AC"
                    />
                    <path
                      d="M36.2534 3.65283H37.5357C38.2016 3.65283 38.8278 3.90573 39.305 4.37262L42.3167 7.31986C42.7044 7.69921 43.3405 7.69921 43.7282 7.31986L46.73 4.38235C47.1972 3.92518 47.8334 3.66256 48.4993 3.66256H49.543"
                      stroke="#A9A6AC"
                      strokeWidth="1.4"
                      strokeMiterlimit="7.7732"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.2534 12.3514H37.5357C38.2016 12.3514 38.8278 12.0985 39.305 11.6317L42.3167 8.68441C42.7044 8.30507 43.3405 8.30507 43.7282 8.68441L46.73 11.6219C47.1972 12.0791 47.8334 12.3417 48.4993 12.3417H49.543"
                      stroke="#A9A6AC"
                      strokeWidth="1.4"
                      strokeMiterlimit="7.7732"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_709_1046">
                      <rect
                        width="49.8485"
                        height="17.2944"
                        fill="white"
                        transform="translate(0 0.733887)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>

              <li>
                <svg
                  width="26"
                  height="17"
                  viewBox="0 0 26 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_709_1069)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.10867 12.2593H6.52669V13.1011H3.10867V12.2593ZM18.2686 9.59037C18.5769 9.59082 18.8809 9.6654 19.1558 9.80807C19.4307 9.95074 19.6688 10.1575 19.8509 10.4116C20.0994 10.0705 20.4469 9.81814 20.8439 9.69024C21.2409 9.56233 21.6673 9.56543 22.0625 9.69909C22.4577 9.83275 22.8016 10.0902 23.0453 10.4348C23.289 10.7794 23.4202 11.1937 23.4202 11.6188C23.4202 12.0439 23.289 12.4582 23.0453 12.8028C22.8016 13.1474 22.4577 13.4048 22.0625 13.5385C21.6673 13.6722 21.2409 13.6753 20.8439 13.5473C20.4469 13.4194 20.0994 13.167 19.8509 12.826C19.6482 13.1008 19.3801 13.3183 19.072 13.4576C18.7639 13.597 18.426 13.6537 18.0904 13.6224C17.7548 13.5911 17.4327 13.4727 17.1544 13.2786C16.8762 13.0845 16.6511 12.821 16.5006 12.5131C16.35 12.2053 16.279 11.8633 16.2942 11.5195C16.3094 11.1758 16.4103 10.8417 16.5874 10.5489C16.7645 10.2562 17.0119 10.0145 17.3061 9.84671C17.6003 9.67895 17.9316 9.59072 18.2686 9.59037ZM24.1958 15.6038C24.3461 15.6008 24.4896 15.5395 24.5971 15.4323C24.7047 15.3252 24.7683 15.1802 24.7749 15.0269V7.332H1.63289V15.0269C1.63044 15.1033 1.64387 15.1794 1.67228 15.2502C1.7007 15.321 1.74346 15.3848 1.79776 15.4375C1.90422 15.5472 2.04862 15.6099 2.19988 15.612L24.1958 15.6038ZM2.2039 16.4065C2.02546 16.4079 1.8486 16.3722 1.68409 16.3016C1.51957 16.231 1.37081 16.127 1.24686 15.9959C1.11901 15.8694 1.0175 15.7178 0.948401 15.5502C0.879304 15.3826 0.844045 15.2025 0.844737 15.0207V1.73535C0.844202 1.55313 0.879023 1.37261 0.947188 1.20421C1.01535 1.03581 1.11551 0.882867 1.24188 0.754211C1.36825 0.625554 1.51833 0.523733 1.68345 0.454628C1.84857 0.385523 2.02545 0.350502 2.2039 0.351587H24.1958C24.5556 0.351585 24.9007 0.497243 25.1555 0.756632C25.4103 1.01602 25.5539 1.36798 25.555 1.73535V15.0269C25.5546 15.2085 25.5188 15.3883 25.4497 15.5557C25.3807 15.7231 25.2798 15.8748 25.1529 16.0021C24.8985 16.2624 24.5539 16.4099 24.1938 16.4127C16.8565 16.4127 9.52583 16.4127 2.20189 16.4127L2.2039 16.4065ZM1.63289 3.34085H24.7749V1.7333C24.7747 1.65629 24.7591 1.58014 24.729 1.50953C24.6989 1.43891 24.655 1.37533 24.6 1.32269C24.548 1.26705 24.4856 1.22259 24.4166 1.19191C24.3475 1.16124 24.2731 1.14497 24.1978 1.14407H2.2039C2.12858 1.14486 2.05418 1.16107 1.98511 1.19175C1.91604 1.22243 1.8537 1.26696 1.80178 1.32269C1.74866 1.37628 1.70667 1.44027 1.67834 1.51082C1.65001 1.58138 1.63592 1.65705 1.63691 1.7333V3.34085H1.63289ZM8.10501 12.2593H13.793V13.1011H8.10501V12.2593Z"
                      fill="#A9A6AC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_709_1069">
                      <rect
                        width="24.7062"
                        height="16.0591"
                        fill="white"
                        transform="translate(0.848633 0.351562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>

              <li>
                <svg
                  width="23"
                  height="17"
                  viewBox="0 0 23 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.20458 3.27148C3.80147 3.27148 3.47461 3.5983 3.47461 4.00146V12.761C3.47461 13.1641 3.80143 13.4909 4.20458 13.4909C4.60774 13.4909 4.93456 13.1641 4.93456 12.761V4.00146C4.93456 3.59835 4.60774 3.27148 4.20458 3.27148Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M10.0439 3.27148C9.64083 3.27148 9.31396 3.5983 9.31396 4.00146V9.84111C9.31396 10.2442 9.64078 10.5711 10.0439 10.5711C10.447 10.5711 10.7739 10.2443 10.7739 9.84111V4.00146C10.7739 3.59835 10.4471 3.27148 10.0439 3.27148Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M16.3701 3.27148C15.967 3.27148 15.6401 3.5983 15.6401 4.00146V9.84111C15.6401 10.2442 15.967 10.5711 16.3701 10.5711C16.7733 10.5711 17.1001 10.2443 17.1001 9.84111V4.00146C17.1001 3.59835 16.7733 3.27148 16.3701 3.27148Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M19.29 3.27148C18.8869 3.27148 18.5601 3.5983 18.5601 4.00146V12.761C18.5601 13.1641 18.8869 13.4909 19.29 13.4909C19.6932 13.4909 20.02 13.1641 20.02 12.761V4.00146C20.02 3.59835 19.6931 3.27148 19.29 3.27148Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M10.0439 13.4907C10.4471 13.4907 10.7739 13.1639 10.7739 12.7607C10.7739 12.3576 10.4471 12.0308 10.0439 12.0308C9.64078 12.0308 9.31396 12.3576 9.31396 12.7607C9.31396 13.1639 9.64078 13.4907 10.0439 13.4907Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M12.9639 3.27148C12.5607 3.27148 12.2339 3.5983 12.2339 4.00146V9.84111C12.2339 10.2442 12.5607 10.5711 12.9639 10.5711C13.367 10.5711 13.6938 10.2443 13.6938 9.84111V4.00146C13.6938 3.59835 13.367 3.27148 12.9639 3.27148Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M12.9639 13.4907C13.367 13.4907 13.6938 13.1639 13.6938 12.7607C13.6938 12.3576 13.367 12.0308 12.9639 12.0308C12.5607 12.0308 12.2339 12.3576 12.2339 12.7607C12.2339 13.1639 12.5607 13.4907 12.9639 13.4907Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M7.1245 3.27148C6.72139 3.27148 6.39453 3.5983 6.39453 4.00146V9.84111C6.39453 10.2442 6.72135 10.5711 7.1245 10.5711C7.52766 10.5711 7.85448 10.2443 7.85448 9.84111V4.00146C7.85448 3.59835 7.52762 3.27148 7.1245 3.27148Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M7.1245 13.4907C7.52766 13.4907 7.85448 13.1639 7.85448 12.7607C7.85448 12.3576 7.52766 12.0308 7.1245 12.0308C6.72135 12.0308 6.39453 12.3576 6.39453 12.7607C6.39453 13.1639 6.72135 13.4907 7.1245 13.4907Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M16.3701 13.4907C16.7733 13.4907 17.1001 13.1639 17.1001 12.7607C17.1001 12.3576 16.7733 12.0308 16.3701 12.0308C15.967 12.0308 15.6401 12.3576 15.6401 12.7607C15.6401 13.1639 15.967 13.4907 16.3701 13.4907Z"
                    fill="#A9A6AC"
                  />
                  <path
                    d="M20.7502 0.351562H2.74456C1.53706 0.351562 0.554688 1.33394 0.554688 2.54144V14.2207C0.554688 15.4282 1.53706 16.4106 2.74456 16.4106H20.7502C21.9577 16.4106 22.9401 15.4282 22.9401 14.2207V2.54144C22.9401 1.33394 21.9577 0.351562 20.7502 0.351562ZM21.4802 14.2207C21.4802 14.6232 21.1527 14.9507 20.7502 14.9507H2.74456C2.34206 14.9507 2.01459 14.6232 2.01459 14.2207V2.54144C2.01459 2.13894 2.34206 1.81146 2.74456 1.81146H20.7502C21.1527 1.81146 21.4802 2.13894 21.4802 2.54144V14.2207Z"
                    fill="#A9A6AC"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
