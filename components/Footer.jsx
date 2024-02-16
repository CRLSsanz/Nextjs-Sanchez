import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-[#111111] text-gray-400">
      {/**
      <section className="bg-[url('/images/tecnologia-footer.jpg')] h-screen">      
    */}
      <div className="bg-cover bg-center bg-[url('/images/tecnologia-footer.jpg')] h-screen">
        <div className="pt-20 px-10 bg-black/80 h-full">
          <div className="text-green-400 text-2xl text-center font-bold tracking-wide mb-5">
            Sanz.
          </div>
          <p className="mb-10">
            Realmente nos preocupamos por la experiencia de nuestros clientes.
            Con nuestros años de experiencia, su computadora está en buenas
            manos. Atendiendo a más de 50 clientes al mes, nos esforzamos por
            construir relaciones duraderas. La satisfacción del cliente
            significa mucho para nosotros. Respaldamos nuestro trabajo el 100%
            del tiempo.
          </p>
          <h1 className="text-white mb-5">Newsletter</h1>
          <p className="mb-5">
            Recibe todas nuestras novedades y promociones exclusivas en tu mail.
          </p>
          <div className="w-full flex flex-col py-10">
            <input
              className="bg-black border-none text-gray-200 focus:outline-none text-center p-3 deco mb-4"
              type="text"
              placeholder="Email Address"
            />
            <button className="uppercase p-3 text-white bg-green-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-gray-500 text-center py-10">
        @ Copyright Sanz 2024 <br /> Site Template by
        <span className="text-gray-200"> Colorval </span>
      </div>
    </section>
  );
};

export default Footer;
