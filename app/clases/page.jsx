import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div>
      <section className="relative mb-20">
        <div>
          <Image
            src="/images/clases1.jpg"
            width={1000}
            height={1500}
            alt="repair1"
          />
        </div>

        <div className="w-full h-full absolute top-0 bg-gray-900/40 px-4">
          <div className="h-full pb-12 pt-4 text-gray-100 flex flex-col justify-between">
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
                Curso<span className="text-teal-300">s</span>
                <br />
                parti<span className="text-teal-300">c</span>ulares
              </h1>
              <p className="text-lg px-6">
                En tu casa, en tu oficina <br /> Nosotros vamos a ti
              </p>
            </div>
            <div className="w-full flex justify-center">
              <h1 className="py-2 px-10 rounded bg-red-400 text-white ">
                Reservar ahora
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full absolute -bottom-1">
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

      <section className="w-full h-1/2 m-auto"></section>
      <Footer />
      <Navbar />
    </div>
  );
};

export default Page;
