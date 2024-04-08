import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

import {
  Moirai_One, //titulo ancho lineas alrededor
  Comfortaa, // parrafo
} from "next/font/google";
import Link from "next/link";

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
      <section className="bg-cover bg-center bg-[url('/images/home.jpg')] min-h-screen lg:h-screen ">
        <div className="bg-gray-900/90 text-gray-200 min-h-screen lg:h-screen w-full lg:px-16 xl:px-28 2xl:px-52">
          <div className="relative min-h-screen w-full px-6 md:px-12">
            <div className="min-h-[calc(100vh-50px)] flex flex-col justify-between">
              <div className="text-gray-500 text-sm flex flex-row justify-between items-end pt-5 lg:pt-14 mb-10">
                <div className="flex flex-row items-end">
                  <Image
                    src={"/images/sanz.png"}
                    width={30}
                    height={30}
                    alt="Logo"
                  />
                  <h1 className="font-bold">ANZ Technology</h1>
                </div>
                <h1>FB - TW - 1479</h1>
              </div>

              <div className="text-base lg:flex lg:flex-row lg:justify-center xl:pl-20 mb-10">
                <div className="lg:basis-3/5 lg:pt-0">
                  <div className={inter2.className}>
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl mb-10 pt-16 lg:pt-0">
                      Welcome.
                    </h1>
                  </div>
                  <div className="flex flex-row mb-20 lg:mb-0">
                    <h2 className="w-[2px] bg-gradient-to-b from-blue-400 to-pink-300/50"></h2>
                    <p className="w-full leading-7 text-sm lg:text-base pl-7 xl:pl-10">
                      En Sanz Technology somos una empresa experta en servicios
                      de Tecnología de la Información comprometida en brindar
                      servicios de calidad.
                      <br /> <br /> Nos preocupamos por la experiencia de
                      nuestros clientes.
                    </p>
                  </div>
                </div>

                <div className="lg:basis-2/5 xl:ml-20">
                  <h1 className="text-2xl mb-3 xl:mb-7">Servicios</h1>
                  <div className="relative px-7 xl:px-10 text-sm 2xl:text-base pt-7 xl:pt-10">
                    <h2 className="absolute top-0 left-0 w-28 h-0.5 bg-gradient-to-r from-blue-400 to-pink-300/50"></h2>
                    <h2 className="absolute top-0 left-0 w-0.5 h-28 bg-gradient-to-b from-blue-400 to-pink-300/50"></h2>

                    <Link href="/repair" className="cursor-pointer">
                      Reparación de PC Laptop
                    </Link>
                    <h2 className="w-48 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-5"></h2>
                    <Link href="/tecnologia" className="cursor-pointer">
                      Repotenciar computadoras
                    </Link>
                    <h2 className="w-52 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-5"></h2>
                    <Link href="/clases" className="cursor-pointer">
                      Cursos particulares
                    </Link>
                    <h2 className="w-36 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-5"></h2>
                    <Link href="/" className="cursor-pointer">
                      Asesoría Informática
                    </Link>

                    <h2 className="w-40 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-5"></h2>
                  </div>
                </div>
              </div>

              <div className="text-center text-gray-400 lg:text-end text-xs xl:text-sm py-3 lg:py-0">
                @2024 crlscode.com
              </div>
            </div>

            <h2 className="absolute top-0 left-0 lg:top-5 bg-gradient-to-r from-blue-400 to-pink-300/80 flex w-60 lg:w-72  h-3 lg:h-5 md:rounded-tl-3xl rounded-br-[50px]"></h2>
            <h2 className="absolute top-3 lg:top-10 left-0 bg-gradient-to-b from-blue-400 to-pink-300/70 flex w-3 lg:w-5 h-24 lg:h-60 rounded-br-[50px]"></h2>

            <h2 className="hidden absolute bottom-0 right-0 lg:bottom-5 bg-gradient-to-r from-blue-400 to-pink-300/80 md:flex w-60 lg:w-72 h-3 lg:h-5 rounded-br-3xl rounded-tl-[50px]"></h2>
            <h2 className="hidden absolute md:bottom-3 lg:bottom-10 right-0 bg-gradient-to-b from-blue-400 to-pink-300/80 md:flex w-3 lg:w-5 h-24 lg:h-60 rounded-tl-[50px]"></h2>
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
