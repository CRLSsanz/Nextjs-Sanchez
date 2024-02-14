import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#3D3E43] text-white text-sm pt-10">
      <div className="px-5 text-center flex flex-col items-center mb-10">
        <Image
          src="/images/footer1.png"
          width={100}
          height={100}
          alt="footer1"
          className="h-20 w-auto"
        />
        <h1 className="text-3xl font-bold pt-5">20+ AÑOS</h1>
        <h1 className="pb-2 text-lg">EXPERIENCIA COMBINADA</h1>
        <h1>
          Realmente nos preocupamos por la experiencia de nuestros clientes. Con
          nuestros años de experiencia, su computadora está en buenas manos.
        </h1>
      </div>

      <div className="px-5 text-center flex flex-col items-center mb-10">
        <Image
          src="/images/footer2.png"
          width={100}
          height={100}
          alt="footer2"
          className="h-16 w-auto"
        />
        <h1 className="text-3xl font-bold pt-5">CLASIFICADO #1</h1>
        <h1 className="pb-2 text-lg">POR UNA RAZÓN</h1>
        <h1>
          Atendiendo a más de 50 clientes al mes. Trabajando duro para nuestros
          clientes y nos esforzamos por construir relaciones duraderas.
        </h1>
      </div>

      <div className="px-5 text-center flex flex-col items-center mb-10">
        <Image
          src="/images/footer3.png"
          width={100}
          height={100}
          alt="footer3"
          className="h-16 w-auto"
        />
        <h1 className="text-3xl font-bold pt-5">TODO EL TRABAJO</h1>
        <h1 className="pb-2 text-lg">100% GARANTIZADO</h1>
        <h1>
          La satisfacción del cliente significa mucho para nosotros. Respaldamos
          nuestro trabajo el 100% del tiempo.
        </h1>
      </div>

      <div className="bg-[#333333] text-center text-gray-400">
        <h1 className="py-4">© 2024 CRLS. All Rights Reserved.</h1>
        <h1 className="bg-gray-900/90 py-5"> </h1>
      </div>
    </div>
  );
};

export default Footer;
