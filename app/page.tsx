import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Roboto_Condensed,
  Roboto,
  Poppins,
  Orbitron,
  Raleway,
  Inter,
  Montserrat_Alternates,
  Comfortaa,
} from "next/font/google";
import "./globals.css";

const inter = Comfortaa({
  weight: ["400", "700"],
  //style: ["normal"],
  subsets: ["latin"],
  //display: "swap",
});

export default function page() {
  return (
    <div className={inter.className}>
      <div className="">
        <section className="bg-cover bg-center bg-[url('/images/home.jpg')] h-screen ">
          <div className="bg-gray-900/95 text-gray-200 h-full w-full p-0 lg:p-10">
            <div className="relative h-full w-full px-6 py-8">
              <div className="text-gray-500 flex flex-row justify-between mb-10">
                <h1 className="text-6xl -tracking-[0.25em]">CS</h1>
                <h1>FB - TW - 1479</h1>
              </div>

              <div className="h-[calc(100%-0130px)] flex flex-col justify-between">
                <div className="text-base lg:flex lg:flex-row">
                  <div className="lg:basis-3/5 lg:pt-0 lg:pr-20">
                    <h1 className="text-4xl font-extralight mb-3">Welcome.</h1>
                    <div className="flex flex-row mb-10">
                      <h2 className="w-[3px] bg-gradient-to-b from-blue-400 to-pink-300/50"></h2>
                      <p className="w-full leading-7 text-sm pl-7">
                        En Sanz Technology somos una empresa experta en
                        servicios de Tecnología de la Información comprometida
                        en brindar servicios de calidad, nos preocupamos por la
                        experiencia de nuestros clientes.
                      </p>
                    </div>
                  </div>

                  <div className="lg:basis-2/5">
                    <h1 className="text-xl mb-3">Servicios</h1>
                    <div className="relative px-7 pt-7">
                      <h2 className="absolute top-0 left-0 w-24 h-[3px] bg-gradient-to-r from-blue-400 to-pink-300/50"></h2>
                      <h2 className="absolute top-0 left-0 w-[3px] h-24 bg-gradient-to-b from-blue-400 to-pink-300/50"></h2>
                      <h2 className="">Reparacion de PC Laptop</h2>
                      <h2 className="w-40 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-4"></h2>
                      <h2 className="">Repontenciar Computadoras</h2>
                      <h2 className="w-44 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-4"></h2>
                      <h2 className="">Clases particulares</h2>
                      <h2 className="w-28 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-4"></h2>
                      <h2 className="">Asesoria Informatica</h2>
                      <h2 className="w-32 h-0.5 bg-gradient-to-r from-blue-400/50 to-pink-300/80 mb-4"></h2>
                    </div>
                  </div>
                </div>

                <div className="">@2024 crlscode.com</div>
              </div>

              <h2 className="absolute top-0 left-0 bg-gradient-to-r from-blue-400 to-pink-300/80 flex w-60  h-3 lg:h-5 rounded-tl-3xl rounded-br-[50px]"></h2>
              <h2 className="absolute top-3 lg:top-5 left-0 bg-gradient-to-b from-blue-400 to-pink-300/50 flex w-3 lg:w-5 h-24 lg:h-60 rounded-br-[50px]"></h2>
            </div>
          </div>
        </section>
        <section className="mb-20 relative">
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
        <Footer />
        <Navbar />
      </div>
    </div>
  );
}
