import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

import {
  Moirai_One, //titulo ancho lineas alrededor
  Comfortaa, // parrafo
} from "next/font/google";

const inter = Comfortaa({
  weight: ["400"],
  //style: ["normal"],
  subsets: ["latin"],
  //display: "swap",
});

const inter2 = Moirai_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function page() {
  return (
    <div className={inter.className}>
      <section className="bg-cover bg-center bg-[url('/images/home.jpg')] h-screen ">
        <div className="bg-gray-900/90 text-gray-200 h-full w-full md:p-10 lg:px-20 xl:px-52 ">
          <div className="relative h-full w-full p-6 md:p-12">
            <div className="h-full flex flex-col justify-between">
              <div className="text-gray-700 flex flex-row justify-between mb-10">
                <div className="{inter2.className}">
                  <h1 className="font-bold -tracking-[0.1em] -mt-0">CRLS</h1>
                </div>
                <h1>FB - TW - 1479</h1>
              </div>

              <div className="text-base lg:flex lg:flex-row lg:justify-center xl:px-20">
                <div className="lg:basis-3/5 lg:pt-0 lg:pr-20">
                  <div className={inter2.className}>
                    <h1 className="text-5xl lg:text-8xl mb-10">Welcome.</h1>
                  </div>
                  <div className="flex flex-row mb-10">
                    <h2 className="w-0.5 bg-gradient-to-b from-blue-400 to-pink-300/50"></h2>
                    <p className="w-full leading-7 text-sm lg:text-base pl-7 xl:pr-20">
                      En Sanz Technology somos una empresa experta en servicios
                      de Tecnología de la Información comprometida en brindar
                      servicios de calidad. <br />
                      <br /> Nos preocupamos por la experiencia de nuestros
                      clientes.
                    </p>
                  </div>
                </div>

                <div className="lg:basis-2/5">
                  <h1 className="text-xl mb-3">Servicios</h1>
                  <div className="relative px-7 pt-7">
                    <h2 className="absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-blue-400 to-pink-300/50"></h2>
                    <h2 className="absolute top-0 left-0 w-0.5 h-24 bg-gradient-to-b from-blue-400 to-pink-300/50"></h2>

                    <h2 className="">Reparacion de PC Laptop</h2>
                    <h2 className="w-52 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-5"></h2>
                    <h2 className="">Repontenciar Computadoras</h2>
                    <h2 className="w-60 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-5"></h2>
                    <h2 className="">Cursos particulares</h2>
                    <h2 className="w-40 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-5"></h2>
                    <h2 className="">Asesoria Informatica</h2>
                    <h2 className="w-44 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-5"></h2>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-end text-xs">
                @2024 crlscode.com
              </div>
            </div>

            <h2 className="absolute top-0 left-0 bg-gradient-to-r from-blue-400 to-pink-300/80 flex w-60  h-3 lg:h-5 md:rounded-tl-3xl rounded-br-[50px]"></h2>
            <h2 className="absolute top-3 lg:top-5 left-0 bg-gradient-to-b from-blue-400 to-pink-300/70 flex w-3 lg:w-5 h-24 lg:h-60 rounded-br-[50px]"></h2>

            <h2 className="hidden absolute bottom-0 right-0 bg-gradient-to-r from-blue-400 to-pink-300/80 md:flex w-60 h-3 lg:h-5 rounded-br-3xl rounded-tl-[50px]"></h2>
            <h2 className="hidden absolute bottom-3 md:bottom-5 right-0 bg-gradient-to-b from-blue-400 to-pink-300/80 md:flex w-3 lg:w-5 h-24 lg:h-60 rounded-tl-[50px]"></h2>
          </div>
        </div>
      </section>
      <section className="hidden mb-20 relative">
        <div>
          <Image
            src="/images/home.jpg"
            width={1500}
            height={1500}
            alt="images"
          />
        </div>
        <div className="absolute top-0 w-full">
          <div className="w-full bg-gray-900/10 text-white flex justify-between p-4">
            <div>CRL</div>
            <div>Login</div>
          </div>
        </div>

        <div className="w-full h-full absolute top-0 bg-gray-900/20 px-6">
          <div className="h-full py-10 text-gray-200 flex flex-col justify-between leading-normal ">
            <h1 className="w-full mt-20 uppercase text-2xl">
              Computer Setup <br />G<span className="text-teal-300">a</span>
              ming Room.
            </h1>
            <h1 className="text-xl text-end">
              El color blanco es <br />
              mejor cuando se mezcla <br /> con el minimalismo
            </h1>
          </div>
        </div>
      </section>
      <Navbar />
    </div>
  );
}
