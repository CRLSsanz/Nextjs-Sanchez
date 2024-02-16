"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
//import Link from "next/link";

const Page = () => {
  return (
    <div>
      <section className="bg-cover bg-center bg-[url('/images/repair1.jpg')] h-screen hHH-[calc(85vh)]">
        <div className="w-full h-full bg-gray-900/50">
          <div className="relative h-full pt-6 text-gray-100 flex flex-col justify-between">
            <div className="text-gray-300 text-2xl font-bold tracking-wide pl-4">
              Sanz<span className="text-green-500">.</span>
            </div>

            <div>
              <h1 className="w-full px-6 uppercase text-5xl font-bold mb-2 leading-tight">
                Repara<span className="text-teal-300">c</span>iòn <br /> de
                <br />
                Computadora<span className="text-teal-300">s</span>
              </h1>

              <p className="text-center text-xl py-4 bg-gray-800/50 ">
                En tu casa <br /> En tu oficina <br /> Donde te encuentres
              </p>
            </div>

            <div className="w-full flex flex-col items-center text-center text-xs px-10">
              <a
                href="#section2"
                className="w-full uppercase py-3 border border-white text-white font-semibold tracking-[0.3em] mb-5"
              >
                Reservar ahora
              </a>

              <a
                href="#section3"
                className="w-full uppercase py-3 bg-gradient-to-br from-red-400 to-red-500 text-white font-semibold tracking-[0.3em]"
              >
                Nuestros servicios
              </a>
            </div>

            <div className="h-10"> </div>
          </div>

          <div className="w-full absolute bottom-0 -mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
              <path
                fill="#f3f4f6"
                fillOpacity="1"
                //d="modificar el 150L480 por 100L480"
                d="M0,0L480,0L720,120L960,0L1200,0L1440,0L1440,150L1200,150L960,150L720,150L480,150L240,150L0,150Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-gray-600 text-center pt-10 pb-20">
        <h1 className="uppercase text-3xl font-bold py-5">Como trabajamos</h1>
        <div className="w-full flex overflow-x-scroll pt-10 mb-10">
          <div className="pl-6 mb-4 relative">
            <div className="w-72 h-full p-8 text-center bg-white flex flex-col items-center justify-between rounded-lg shadow-lg mr-10">
              <Image
                src="/images/repair2.png"
                width={100}
                height={150}
                alt="images"
                className="w-auto h-40"
              />
              <h1 className="text-2xl text-black font-semibold my-4">
                Agendar una cita de trabajo.
              </h1>
              <p className="text-gray-500">
                Solicite una cita en línea, o llámenos hoy para programar su
                próxima visita.
              </p>
            </div>
            <div className="absolute -top-4 left-2 rounded-full w-16 py-4 bg-teal-400 text-white text-2xl font-extrabold">
              1.
            </div>
          </div>
          <div className="mb-4 relative">
            <div className="w-72 h-full p-8 text-center bg-white flex flex-col items-center justify-between rounded-lg shadow-lg mr-10">
              <Image
                src="/images/repair3.png"
                width={100}
                height={150}
                alt="images"
                className="w-auto h-40"
              />
              <h1 className="text-2xl text-black font-semibold my-4">
                Nosotros venimos a ti
              </h1>
              <p className="text-gray-500">
                Uno de nuestros técnicos expertos se reunirá con usted en su
                casa u oficina para reparar su computadora rápidamente.
              </p>
            </div>

            <div className="absolute -top-4 -left-4 rounded-full w-16 py-4 bg-teal-400 text-white text-2xl font-extrabold">
              2.
            </div>
          </div>
          <div className="mb-4 relative">
            <div className="w-72 h-full p-8 text-center bg-white flex flex-col items-center justify-between rounded-lg shadow-lg  mr-6">
              <Image
                src="/images/repair4.png"
                width={100}
                height={150}
                alt="images"
                className="w-auto h-40"
              />
              <h1 className="text-2xl text-black font-semibold my-4">
                Fijado en el sitio o recogido{" "}
              </h1>
              <p className="text-gray-500">
                Repararemos su computadora frente a usted o la recogeremos y se
                la devolveremos cuando esté completa.
              </p>
            </div>
            <div className="absolute -top-4 -left-4 rounded-full w-16 py-4 bg-teal-400 text-white text-2xl font-extrabold">
              3.
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <h1 className="py-2 px-10 bg-gradient-to-br from-red-400 to-red-500 text-white ">
            Programar cita ahora
          </h1>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 py-10">
        <div className="w-full text-white text-center py-5">
          <h1 className="text-3xl font-bold mb-4">NUESTROS SERVICIOS</h1>
          <p className="text-lg mb-4">
            Laptop o PC, Empresarial o Residencial. <br /> Te tenemos cubierto.
          </p>
        </div>
        <div id="section3" className="pl-5 pb-5">
          <div className="w-full text-center bg-white flex flex-col items-center">
            <Image
              src="/images/repairservice1.jpg"
              width={500}
              height={500}
              alt="images"
            />
            <div className="p-4">
              <h1 className="text-2xl text-black font-semibold mb-4">
                AJUSTES DEL SISTEMA
              </h1>
              <p className="text-gray-500 mb-4">
                Reparaciones corruptas de Windows/iOS <br />
                Congelación o fallas en la computadora <br />
                Malware, virus y ventanas emergentes <br />
                Sistemas lentos y lentos <br />
                Problemas de software
              </p>
            </div>
          </div>
        </div>
        <div className="pr-5 pb-5">
          <div className="w-full text-center bg-white flex flex-col items-center">
            <Image
              src="/images/repairservice2.png"
              width={500}
              height={500}
              alt="images2"
            />
            <div className="p-4">
              <h1 className="text-2xl text-black font-semibold mb-4">
                REPARACIÓN DE HARDWARE
              </h1>
              <p className="text-gray-500 mb-4">
                Pantallas de portátiles rotas <br />
                Problemas de carga <br />
                Reemplazo del disco duro <br />
                Actualizaciones de memoria <br />
                Daños por líquidos y derrames de agua
              </p>
            </div>
          </div>
        </div>
        <div className="pl-5 pb-5">
          <div className="w-full text-center bg-white flex flex-col items-center">
            <Image
              src="/images/repairservice3.png"
              width={500}
              height={500}
              alt="images2"
            />
            <div className="p-4">
              <h1 className="text-2xl text-black font-semibold mb-4">REDES</h1>
              <p className="text-gray-500 mb-4">
                Configuraciones WIFI <br />
                VPN/Escritorio remoto <br />
                Compartir archivos e impresoras <br />
                Redes domésticas y comerciales <br />
                Configurar conmutador y enrutador
              </p>
            </div>
          </div>
        </div>
        <div className="pr-5 pb-10">
          <div className="w-full text-center bg-white flex flex-col items-center">
            <Image
              src="/images/repairservice4.png"
              width={500}
              height={500}
              alt="images2"
            />
            <div className="p-4">
              <h1 className="text-2xl text-black font-semibold mb-4">
                RECUPERACIÓN DE DATOS{" "}
              </h1>
              <p className="text-gray-500 mb-4">
                Sistemas Windows o Apple <br />
                Discos duros fallidos <br />
                Particiones eliminadas <br />
                Recuperación de datos del disco duro <br />
                Archivos eliminados accidentalmente
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-white font-bold flex flex-col justify-center items-center py-5">
          <h1 className="text-4xl tracking-[0.2em]">RECUERDA</h1>
          <h1 className="border-b border-gray-200 tracking-widest">
            DAR MANTENIMIENTO A TU
          </h1>
          <h1 className="text-5xl tracking-[0.1em]">PC-LAPTOP</h1>
          <h1 className="text-xs mb-10 text-gray-100 tracking-wide">
            EXTIENDE LA VIDA UTIL DE TUS EQUIPOS Y AHORRA!
          </h1>
          <h1 className="py-3 px-10 bg-gradient-to-br from-red-100 to-pink-100 text-black mb-10">
            Programar cita ahora
          </h1>
        </div>
      </section>

      <Footer />

      <Navbar />
    </div>
  );
};

export default Page;
