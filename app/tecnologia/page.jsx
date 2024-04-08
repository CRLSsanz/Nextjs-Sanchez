"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

import { Roboto_Condensed } from "next/font/google";

const inter = Roboto_Condensed({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const getRam = [
  {
    image: "ram-ddr5.png",
    info: "Memoria G.Skill Rgb DDR5",
    price: "$ 140.99",
  },
  {
    image: "ram-ddr4.png",
    info: "Memoria Black Fury Hyper DDR4",
    price: "$ 90.99",
  },
  {
    image: "ram-ddr3.png",
    info: "Memoria Kingston DDR3 4GB",
    price: "$ 60.99",
  },
  {
    image: "ram-laptop.png",
    info: "RAM Laptop SO-DIMM DDR4 SDRAM",
    price: "$ 40.99",
  },
];
const getSSD = [
  {
    image: "ssd-nvme.jpg",
    info: "Disco Ssd M2 Nvme 480gb Interno Crucial",
    price: "$ 59.99",
  },
  {
    image: "ssd-sata.jpg",
    info: "Disco Solido Interno 240gb Ssd Sata Pc Notebook",
    price: "$ 49.99",
  },
];
const getVRam = [
  {
    image: "vram-rx.jpg",
    info: "Placa De Video Rx 6800 Xt 16gb Alta Gama Diseño 3d",
    price: "$ 1599.99",
  },
  {
    image: "vram-gtx.jpg",
    info: "Placa De Video Nvidia Msi Geforce Gtx 1050 Ti Oc 4gb",
    price: "$ 640.99",
  },
];
const getMonitor = [
  {
    image: "monitor-uw-curvo.png",
    info: "ACER Predator Z35P Nvidia G-Sync 21:9",
    price: "$ 570.99",
  },
  {
    image: "monitor-uw.png",
    info: "ASUS ROG Swift PG-8Q G-Sync 21:9",
    price: "$ 360.99",
  },
  {
    image: "monitor-hd.png",
    info: "Dell U2518D UltraSharp",
    price: "$ 140.99",
  },
];

const Page = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={inter.className}>
      <section className="bg-cover bg-center bg-[url('/images/tecnologia1.jpg')] h-screen">
        <div className="w-full h-full bg-gray-900/50 px-6 lg:flex lg:justify-center">
          <div className="lg:w-[1000px] h-full pt-6 text-gray-100 flex flex-col justify-between">
            <div className="text-gray-400 text-2xl font-bold tracking-wide">
              Sanz<span className="text-green-500">.</span>
            </div>

            <div className="text-end">
              <h1 className="w-full uppercase text-5xl lg:text-8xl font-bold mb-2 leading-tight">
                Repoten<span className="text-teal-300">c</span>ia
                <br />
                tu eq<span className="text-teal-300">u</span>ipo
              </h1>
              <p className="text-xl lg:text-4xl lg:leading-relaxed font-semibold pr-5 mb-10">
                Aumenta 10 veces <br />
                mas la velocidad <br />
                de tu pc o laptop
              </p>

              <div className="w-full flex flex-col items-center lg:items-end text-center text-xs lg:text-base">
                <a
                  href="#section2"
                  className="w-full lg:w-2/5 uppercase py-3 border border-white text-white font-semibold tracking-[0.3em] mb-5"
                >
                  Acelera tu pc
                </a>

                <a
                  href="#section3"
                  className="w-full lg:w-1/2 uppercase py-3 border bg-white text-black font-semibold tracking-[0.3em]"
                >
                  Actualizar Tecnologia
                </a>
              </div>
            </div>

            <div className="flex justify-center h-14">
              <div className="w-40 border-r-2 border-green-500 text-center">
                <a href="#section1">
                  <div className="animate-bounce text-xs">
                    <span className="text-green-500 mr-2"> v </span>
                    <span className="-mt-5 tracking-[0.2em]">scroll down</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-br from-green-500 to-green-600 text-black"
        id="section1"
      >
        <div className="flex justify-center h-14 mb-10">
          <div className="w-40 border-r-2 border-white text-center"> </div>
        </div>
        <div className="flex flex-col items-center mb-10 pb-10">
          <h1 className="uppercase font-semibold tracking-[0.2em] lg:text-xl lg:mb-5">
            Hello
          </h1>
          <div className="w-[220px] lg:w-[300px] text-center text-white text-3xl lg:text-5xl font-semibold pb-3 border-b border-green-400 mb-5 lg:mb-10">
            We Are Sanz
          </div>
          <p className="lg:w-[500px] lg:leading-7 text-center text-gray-900 px-10 mb-10">
            We have the highest trained technicians in Sanz, and we genuinely
            care about our customer's experience. With 20+ years of combined
            experience, your computer is in good hands. Customer satisfaction
            means the world to us, and we strive to make sure that every
            customer is truly happy with the services that we perform. We stand
            behind our work 100% of the time.
          </p>
          <div className="flex flex-wrap items-center text-center">
            <div className="basis-1/2">
              <h1 className="text-white text-5xl font-bold mb-2">127</h1>
              <h1 className="font-semibold pb-7 mx-7 border-b border-green-400 mb-6">
                Awards Received
              </h1>
            </div>
            <div className="basis-1/2">
              <h1 className="text-white text-5xl font-bold mb-2">1505</h1>
              <h1 className="font-semibold pb-7 mx-7 border-b border-green-400 mb-6">
                Cups of Coffe
              </h1>
            </div>

            <div className="basis-1/2 ">
              <h1 className="text-white text-5xl font-bold mb-2">109</h1>
              <h1 className="font-semibold pb-5 mb-5">Projects Completed</h1>
            </div>
            <div className="basis-1/2">
              <h1 className="text-white text-5xl font-bold mb-2">102</h1>
              <h1 className="font-semibold pb-5 mb-5">Happy Clients</h1>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white pb-10 lg:flex lg:justify-center"
        id="section2"
      >
        <div className="flex flex-col items-center p-10 lg:w-[500px]">
          <h1 className="uppercase font-bold text-green-500 tracking-[0.2em] mb-5 lg:text-xl">
            Repotenciar
          </h1>
          <p className="text-3xl lg:text-4xl text-center font-bold mb-10 border-b border-gray-200 pb-5">
            Actualiza los componentes de tu laptop o computadora
          </p>
          <div className="flex items-center text-green-500/90 mb-5">
            <svg
              width="70px"
              height="70px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5 16.25C11.9142 16.25 12.25 16.5858 12.25 17V18C12.25 18.4142 11.9142 18.75 11.5 18.75C11.0858 18.75 10.75 18.4142 10.75 18V17C10.75 16.5858 11.0858 16.25 11.5 16.25ZM14 16.25C14.4142 16.25 14.75 16.5858 14.75 17V18C14.75 18.4142 14.4142 18.75 14 18.75C13.5858 18.75 13.25 18.4142 13.25 18V17C13.25 16.5858 13.5858 16.25 14 16.25ZM16.5 16.25C16.9142 16.25 17.25 16.5858 17.25 17V18C17.25 18.4142 16.9142 18.75 16.5 18.75C16.0858 18.75 15.75 18.4142 15.75 18V17C15.75 16.5858 16.0858 16.25 16.5 16.25ZM19 16.25C19.4142 16.25 19.75 16.5858 19.75 17V18C19.75 18.4142 19.4142 18.75 19 18.75C18.5858 18.75 18.25 18.4142 18.25 18V17C18.25 16.5858 18.5858 16.25 19 16.25Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.56216 2.87174C6.14861 2.41455 6.82355 2.25 7.5 2.25H16.5C17.1765 2.25 17.8514 2.41455 18.4378 2.87174C19.0172 3.32344 19.4352 4.0024 19.7154 4.89243L19.718 4.90062L22.5718 14.7467C22.6403 14.9806 22.6798 15.2261 22.7044 15.4827C22.75 15.9572 22.75 16.5451 22.75 17.2573V17.331C22.75 18.0431 22.75 18.631 22.7044 19.1056C22.657 19.5988 22.5548 20.0509 22.2972 20.4591C22.1 20.7716 21.8448 21.0428 21.5443 21.2554C21.1461 21.5371 20.7019 21.6495 20.2234 21.7011C19.7689 21.75 19.2082 21.75 18.5402 21.75H5.45976C4.7918 21.75 4.23115 21.75 3.77661 21.7011C3.29814 21.6495 2.85387 21.5371 2.45569 21.2554C2.15523 21.0428 1.90001 20.7716 1.7028 20.4591C1.44521 20.0509 1.34296 19.5988 1.29557 19.1056C1.24998 18.631 1.24999 18.0432 1.25 17.331V17.2572C1.24999 16.5451 1.24998 15.9572 1.29557 15.4827C1.32022 15.2261 1.35972 14.9806 1.4282 14.7467L4.28204 4.90062L4.28461 4.89243C4.56481 4.0024 4.98276 3.32344 5.56216 2.87174ZM3.51882 12.922C3.60357 12.9079 3.68952 12.8965 3.77661 12.8872C4.23116 12.8382 4.79184 12.8382 5.45983 12.8382H18.5402C19.2082 12.8382 19.7688 12.8382 20.2234 12.8872C20.3105 12.8965 20.3964 12.9079 20.4812 12.922L18.2821 5.33495C18.0627 4.64179 17.784 4.264 17.5156 4.05473C17.2532 3.85015 16.9281 3.75 16.5 3.75H7.5C7.07188 3.75 6.74682 3.85015 6.48441 4.05473C6.21598 4.264 5.93731 4.64179 5.71788 5.33495L3.51882 12.922ZM3.93724 14.3785C3.58737 14.4162 3.42829 14.4822 3.32203 14.5574C3.18573 14.6538 3.06595 14.7797 2.97133 14.9296C2.89185 15.0556 2.82557 15.2423 2.7887 15.6261C2.75081 16.0204 2.75 16.5358 2.75 17.2941C2.75 18.0524 2.75081 18.5678 2.7887 18.9621C2.82557 19.3459 2.89185 19.5327 2.97133 19.6586C3.06595 19.8085 3.18573 19.9344 3.32203 20.0308C3.42829 20.106 3.58737 20.172 3.93724 20.2097C4.30195 20.249 4.78126 20.25 5.5 20.25H18.5C19.2187 20.25 19.6981 20.249 20.0628 20.2097C20.4126 20.172 20.5717 20.106 20.678 20.0308C20.8143 19.9344 20.9341 19.8085 21.0287 19.6586C21.1082 19.5327 21.1744 19.3459 21.2113 18.9621C21.2492 18.5678 21.25 18.0524 21.25 17.2941C21.25 16.5358 21.2492 16.0204 21.2113 15.6261C21.1744 15.2423 21.1082 15.0556 21.0287 14.9296C20.9341 14.7797 20.8143 14.6538 20.678 14.5574C20.5717 14.4822 20.4126 14.4162 20.0628 14.3785C19.6981 14.3393 19.2187 14.3382 18.5 14.3382H5.5C4.78126 14.3382 4.30195 14.3393 3.93724 14.3785Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h1 className="text-lg font-bold tracking-widest mb-2">
            Solido 240GB SSD NVMe
          </h1>
          <p className="text-center px-5 text-gray-500 mb-10">
            Asegura una computadora con mucha velocidad, porque los{" "}
            <a href="#product" className="text-green-500">
              SSD NVMe{" "}
            </a>{" "}
            son mas rapidos que los tradicionales
          </p>

          <div className="flex items-center text-green-500 mb-5">
            <svg
              fill="currentColor"
              height="80px"
              width="80px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 299.92 299.92"
              transform="rotate(-45)"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M293.4,65.2H6.52C2.914,65.2,0,68.114,0,71.72v117.36c0,3.606,2.914,6.52,6.52,6.52h6.52v32.6
				c0,3.606,2.914,6.52,6.52,6.52h260.8c3.606,0,6.52-2.914,6.52-6.52v-32.6h6.52c3.606,0,6.52-2.914,6.52-6.52V71.72
				C299.92,68.114,297.006,65.2,293.4,65.2z M273.84,221.68h-19.56H228.2h-26.08h-26.08h-26.08h-26.08H97.8H71.72H45.64H26.08V195.6
				h19.56h26.08H97.8h26.08h26.08h26.08h26.08h26.08h26.08h19.56V221.68z M286.88,182.56h-6.52H19.56h-6.52V78.24h273.84V182.56z"
                    />
                    <path
                      d="M32.6,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H32.6c-3.606,0-6.52,2.914-6.52,6.52
				V163C26.08,166.606,28.994,169.52,32.6,169.52z M39.12,104.32H65.2v52.16H39.12V104.32z"
                    />
                    <path
                      d="M97.8,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H97.8c-3.606,0-6.52,2.914-6.52,6.52
				V163C91.28,166.606,94.194,169.52,97.8,169.52z M104.32,104.32h26.08v52.16h-26.08V104.32z"
                    />
                    <path
                      d="M163,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H163c-3.606,0-6.52,2.914-6.52,6.52
				V163C156.48,166.606,159.394,169.52,163,169.52z M169.52,104.32h26.08v52.16h-26.08V104.32z"
                    />
                    <path
                      d="M228.2,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H228.2
				c-3.606,0-6.52,2.914-6.52,6.52V163C221.68,166.606,224.594,169.52,228.2,169.52z M234.72,104.32h26.08v52.16h-26.08V104.32z"
                    />
                    <path
                      d="M52.16,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52
				C49.246,221.68,52.16,218.766,52.16,215.16z"
                    />
                    <path
                      d="M78.24,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52
				C75.326,221.68,78.24,218.766,78.24,215.16z"
                    />
                    <path
                      d="M104.32,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52
				C101.406,221.68,104.32,218.766,104.32,215.16z"
                    />
                    <path
                      d="M130.4,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52
				C127.486,221.68,130.4,218.766,130.4,215.16z"
                    />
                    <path
                      d="M156.48,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52s-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52
				S156.48,218.766,156.48,215.16z"
                    />
                    <path
                      d="M182.56,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52
				C179.646,221.68,182.56,218.766,182.56,215.16z"
                    />
                    <path
                      d="M208.64,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52
				C205.726,221.68,208.64,218.766,208.64,215.16z"
                    />
                    <path
                      d="M234.72,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52
				C231.806,221.68,234.72,218.766,234.72,215.16z"
                    />
                    <path
                      d="M260.8,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52
				C257.886,221.68,260.8,218.766,260.8,215.16z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          <h1 className="text-lg font-bold tracking-[0.1em] mb-2">
            16GB 4800 MHZ DDR5
          </h1>
          <p className="text-center px-5 text-gray-500 mb-5">
            +1 slot libre para agregar otra memoria ram y tener la maxima
            capacidad soportada de 32GB o 64GB.
          </p>
          <a href="#product" className="text-green-500">
            Ver productos
          </a>
        </div>
      </section>

      <section id="section3">
        <div className=" h-[540px] bg-black text-white text-center flex flex-col items-center p-10 pt-20">
          <h1 className="uppercase font-bold text-green-500 tracking-[0.2em] mb-5 lg:text-xl">
            gaming
          </h1>
          <h1 className="lg:w-[600px] text-3xl lg:text-4xl mb-8">
            Todos los accesorios y pc gamer para todas tus necesidades
          </h1>
          <div className="w-3/4 lg:w-[600px] border-b border-gray-700"> </div>
        </div>

        <div className="w-full lg:flex lg:justify-center">
          <div className="lg:w-[1000px] h-auto px-5 pb-20 lg:grid lg:grid-cols-2 lg:gap-x-3">
            <div className="-mt-60">
              <Image
                src="/images/tecnologia1.jpg"
                width={1000}
                height={1500}
                alt="repair1"
              />
            </div>
            <div className="lg:-mt-60">
              <Image
                src="/images/tecnologia2.jpg"
                width={1000}
                height={1500}
                alt="repair1"
              />
            </div>
            <div className="lg:mt-3">
              <Image
                src="/images/tecnologia3.jpg"
                width={1000}
                height={1500}
                alt="tecnologia3"
              />
            </div>
            <div className="lg:-mt-24">
              <Image
                src="/images/tecnologia4.jpg"
                width={1000}
                height={1500}
                alt="tecnologi4"
              />
            </div>
            <div className="lg:-mt-40">
              <Image
                src="/images/tecnologia5.jpg"
                width={1000}
                height={1500}
                alt="tecnologi4"
              />
            </div>
          </div>
        </div>
      </section>

      {/** PRODUCT */}
      <section className="pb-10 lg:flex lg:justify-center ">
        <div className="lg:w-[800px]">
          <h1 className="text-center uppercase text-sm lg:text-xl font-bold text-green-500 tracking-[0.2em]">
            Tecnologia
          </h1>
          {/** RAM */}
          <div id="product" className="py-10">
            <div className="px-8 uppercase text-lg font-semibold tracking-widest flex flex-row justify-between items-center mb-3">
              <h1>Memoria RAM</h1>
              <h1
                className="text-green-600 text-sm normal-case cursor-pointer"
                onClick={() => setShowInfo(!showInfo)}
              >
                {" "}
                {showInfo ? " ocultar " : " + info "}
              </h1>
            </div>

            <div
              className={`text-gray-500 grid grid-cols-3 gap-1 px-8 mb-3 transform transition-all duration-500 ${
                showInfo ? " h-[140px] lg:h-[100px] " : " h-0 text-white "
              } `}
            >
              <span className="font-semibold">Capacidad:</span>
              <h1 className="col-span-2"> 4GB / 8GB / 16GB / 32GB</h1>
              <span className="font-semibold">Velocidad:</span>
              <h1 className="col-span-2">
                1333Mhz / 1600Mhz / 2400Mhz 3200Mhz / 4800Mhz / 5600Mhz
              </h1>
              <h1 className="font-semibold">Marca:</h1>
              <h1 className="uppercase col-span-2">
                Corsair / Crucial / WD Kingston / Lexar / Patriot
              </h1>
            </div>

            <div className="w-full text-sm flex overflow-x-scroll pb-5 pr-6">
              {getRam.map((item, index) => (
                <div key={index} className="pl-6">
                  <div className="h-full relative bg-white border shadow-lg rounded">
                    <div className="w-52 h-44 flex items-center px-1">
                      <Image
                        src={`/images/${item.image}`}
                        width={500}
                        height={500}
                        alt="images"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-green-500 text-white font-bold py-1.5 px-3 rounded-full text-sm">
                      12% OFF
                    </div>
                    <div className="h-12 px-5">{item.info}</div>
                    <div className="px-5 flex flex-row justify-between mb-4">
                      <h1 className="line-through text-gray-400">
                        {item.price}
                      </h1>
                      <div>
                        <Image
                          src={`/images/estrella.png`}
                          width={70}
                          height={10}
                          alt="images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/** SSD */}
          <div className="mb-10">
            <div className="px-8 uppercase text-lg font-semibold tracking-widest flex flex-row justify-between items-center mb-3">
              <h1>Almacenamiento SSD</h1>
              <h1
                className="text-green-600 text-sm normal-case cursor-pointer"
                onClick={() => setShowInfo(!showInfo)}
              >
                {" "}
                {showInfo ? " ocultar " : " + info "}
              </h1>
            </div>

            <div
              className={`text-gray-500 grid grid-cols-3 gap-1 px-8 mb-3 transform transition-all duration-500 ${
                showInfo ? " h-[140px] lg:h-[100px] " : " h-0 text-white "
              } `}
            >
              <span className="font-semibold">Capacidad:</span>
              <h1 className="col-span-2">240GB / 480GB / 1TB / 2TB</h1>
              <span className="font-semibold">Velocidad:</span>
              <h1 className="col-span-2">
                Desde 1600Mb/s - 2400Mb/s hasta 3500MB/s - 4000Mb/s
              </h1>
              <h1 className="font-semibold">Marca:</h1>
              <h1 className="uppercase col-span-2">
                Corsair / Crucial / WD Blue Kingston / Lexar / Patriot
              </h1>
            </div>

            <div className="w-full text-sm flex overflow-x-scroll pb-5 pr-6">
              {getSSD.map((item, index) => (
                <div key={index} className="pl-6">
                  <div className="h-full relative bg-white border shadow-lg rounded">
                    <div className="w-52 h-44 flex items-center px-1">
                      <Image
                        src={`/images/${item.image}`}
                        width={500}
                        height={500}
                        alt="images"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-green-500 text-white font-bold py-1.5 px-3 rounded-full text-sm">
                      12% OFF
                    </div>
                    <div className="h-12 px-5">{item.info}</div>
                    <div className="px-5 flex flex-row justify-between mb-4">
                      <h1 className="line-through text-gray-400">
                        {item.price}
                      </h1>
                      <div>
                        <Image
                          src={`/images/estrella.png`}
                          width={70}
                          height={10}
                          alt="images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/** TARJETA DE VIDEO - VRAM */}
          <div className="mb-10">
            <div className="px-8 uppercase text-lg font-semibold tracking-widest flex flex-row justify-between items-center mb-3">
              <h1>Tarjeta de Video</h1>
              <h1
                className="text-green-600 text-sm normal-case cursor-pointer"
                onClick={() => setShowInfo(!showInfo)}
              >
                {" "}
                {showInfo ? " ocultar " : " + info "}
              </h1>
            </div>

            <div
              className={`text-gray-500 grid grid-cols-3 px-8 mb-3 transform transition-all duration-500 ${
                showInfo ? " h-[140px] lg:h-[100px] " : " h-0 text-white "
              } `}
            >
              <span className="font-semibold">Video Ram:</span>
              <h1 className="col-span-2"> 2GB / 4GB / 8GB / 16GB</h1>
              <span className="font-semibold">Velocidad:</span>
              <h1 className="col-span-2">12Ghz / 17Ghz / 18Ghz</h1>
              <span className="font-semibold">Tipo:</span>
              <h1 className="col-span-2">GDDR5 / GDDR6 128 bits</h1>
              <h1 className="font-semibold">Marca:</h1>
              <h1 className="uppercase col-span-2">Asus / Gigabyte / MSI</h1>
            </div>

            <div className="w-full text-sm flex overflow-x-scroll pb-5 pr-6">
              {getVRam.map((item, index) => (
                <div key={index} className="pl-6">
                  <div className="h-full relative bg-white border shadow-lg rounded">
                    <div className="w-52 h-44 flex items-center px-1">
                      <Image
                        src={`/images/${item.image}`}
                        width={500}
                        height={500}
                        alt="images"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-green-500 text-white font-bold py-1.5 px-3 rounded-full text-sm">
                      12% OFF
                    </div>
                    <div className="h-12 px-5">{item.info}</div>
                    <div className="px-5 flex flex-row justify-between mb-4">
                      <h1 className="line-through text-gray-400">
                        {item.price}
                      </h1>
                      <div>
                        <Image
                          src={`/images/estrella.png`}
                          width={70}
                          height={10}
                          alt="images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/** MONITORES */}
          <div className="mb-10">
            <div className="px-8 uppercase text-lg font-semibold tracking-widest flex flex-row justify-between items-center mb-3">
              <h1>Monitores</h1>
              <h1
                className="text-green-600 text-sm normal-case cursor-pointer"
                onClick={() => setShowInfo(!showInfo)}
              >
                {" "}
                {showInfo ? " ocultar " : " + info "}
              </h1>
            </div>

            <div
              className={`text-gray-500 grid grid-cols-3 gap-1 px-8 mb-3 transform transition-all duration-500 ${
                showInfo ? " h-[140px] lg:h-[100px] " : " h-0 text-white "
              } `}
            >
              <span className="font-semibold">Dimensiones:</span>
              <h1 className="col-span-2"> 34" / 29" / 27" / 25" / 22" </h1>
              <span className="font-semibold">Resoluciòn:</span>
              <h1 className="col-span-2">
                {" "}
                4K / 2K / QHD / UHD - 16:9 / 21:9{" "}
              </h1>
              <span className="font-semibold">Refresh Rate:</span>
              <h1 className="col-span-2"> 60Hz / 75Hz / 144Hz / 165Hz </h1>
              <h1 className="font-semibold">Marca:</h1>
              <h1 className="uppercase col-span-2">
                ACER / ASUS / DELL / HP / LG SAMSUMG
              </h1>
            </div>

            <div className="w-full text-sm flex overflow-x-scroll pb-5 pr-6">
              {getMonitor.map((item, index) => (
                <div key={index} className="pl-6">
                  <div className="h-full relative bg-white border shadow-lg rounded">
                    <div className="w-52 h-44 flex items-center px-1">
                      <Image
                        src={`/images/${item.image}`}
                        width={500}
                        height={500}
                        alt="images"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-green-500 text-white font-bold py-1.5 px-3 rounded-full text-sm">
                      12% OFF
                    </div>
                    <div className="h-12 px-5">{item.info}</div>
                    <div className="px-5 flex flex-row justify-between mb-4">
                      <h1 className="line-through text-gray-400">
                        {item.price}
                      </h1>
                      <div>
                        <Image
                          src={`/images/estrella.png`}
                          width={70}
                          height={10}
                          alt="images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Navbar />
    </div>
  );
};

export default Page;
