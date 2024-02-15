import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div>
      <section className="relative">
        <div>
          <Image
            src="/images/tecnologia1.jpg"
            width={1000}
            height={1500}
            alt="repair1"
          />
        </div>

        <div className="w-full h-full absolute top-0 bg-gray-900/40 px-4">
          <div className="h-full pt-4 text-gray-100 flex flex-col justify-between">
            <div className="animate-bounce">
              <Image
                src="/images/logocrl.png"
                width={50}
                height={50}
                alt="logo"
              />
            </div>
            <div>
              <h1 className="w-full px-6 uppercase text-4xl font-bold mb-2">
                Repotenci<span className="text-teal-300">a</span>r
                <br />
                tu eq<span className="text-teal-300">u</span>ipo
              </h1>
              <p className="text-lg font-semibold px-6">
                Aumenta 10 veces
                <br />
                mas la velocidad <br />
                de tu pc o laptop
              </p>
            </div>

            <div className="w-full flex flex-col items-center text-center text-xs">
              <h1 className="w-60 uppercase py-3 border border-white text-white font-semibold tracking-[0.3em] mb-5">
                Reservar ahora
              </h1>

              <h1 className="w-60 uppercase py-3 border bg-white text-black font-semibold tracking-[0.3em]">
                Comprar Tecnologia
              </h1>
            </div>
            <div className="flex justify-center h-10">
              <div className="w-40 border-r-2 border-green-500 text-center">
                <a href="#section2">
                  <span className="text-green-500 mr-2"> v </span>
                  <span className="-mt-5 text-xs tracking-[0.2em]">
                    scroll down
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden w-full absolute -bottom-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
            <path
              fill="#f3f4f6"
              fillOpacity="1"
              //d="modificar el 150L480 por 100L480"
              d="M0,0L480,0L720,120L960,0L1200,0L1440,0L1440,150L1200,150L960,150L720,150L480,150L240,150L0,150Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="bg-gradient-to-br from-green-500 to-green-600 text-black">
        <div className="flex justify-center h-10 mb-10">
          <div className="w-40 border-r-2 border-white text-center"> </div>
        </div>
        <div className="flex flex-col items-center mb-10 pb-5">
          <h1 className="uppercase  font-semibold tracking-[0.2em]">Hello</h1>
          <div className="w-[220px] text-center uppercase text-white text-3xl font-semibold pb-3 border-b border-green-400 mb-5">
            We are CRLS
          </div>
          <p className="text-center px-5 mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
            itaque?
          </p>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-white text-5xl font-bold mb-2">127</h1>
            <h1 className="w-[220px] font-semibold pb-5 border-b border-green-400 mb-5">
              Reconocimientos recibidos
            </h1>

            <h1 className="text-white text-5xl font-bold mb-2">109</h1>
            <h1 className="w-[220px] font-semibold pb-5 border-b border-green-400 mb-5">
              Proyectos completados
            </h1>

            <h1 className="text-white text-5xl font-bold mb-2">102</h1>
            <h1 className="w-[220px] font-semibold mb-5">Clientes felices</h1>
          </div>
        </div>
      </section>

      <section className="bg-white h-[500px]" id="section2">
        <div className="flex flex-col items-center p-10">
          <h1 className="uppercase font-semibold text-green-500 tracking-[0.2em] mb-2">
            Bienvenido
          </h1>
          <p className="text-2xl text-center font-bold mb-10">
            Actualiza los componentes de tu portatil o computadora
          </p>
          <h1 className="text-xl font-semibold tracking-[0.2em]">
            Solido 240GB SSD NVMe
          </h1>
          <p className="text-center px-5 text-gray-800 mb-10">
            Asegura una compu con mucha velocidad, porque los SSD NVMe son mas
            rapidos que los tradicionales
          </p>

          <h1 className="text-xl font-semibold tracking-[0.2em]">
            16GB 4800 MHZ DDR5
          </h1>
          <p className="text-center px-5 text-gray-800">
            +1 slot libre para agregar otra memoria y tener la maxima ram
            soportada 32GB o 64GB.
          </p>
        </div>
      </section>

      <Footer />
      <Navbar />
    </div>
  );
};

export default Page;
