import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#3D3E43] text-white text-sm pt-10">
      <div className="px-5 text-center flex flex-col items-center mb-10">
        <Image src="/images/footer1.png" width={100} height={100} />
        <h1 className="text-3xl font-bold pt-5">20+ AÑOS</h1>
        <h1 className="pb-2 text-lg">EXPERIENCIA COMBINADA</h1>
        <h1>
          Contamos con los técnicos mejor capacitados y realmente nos
          preocupamos por la experiencia de nuestros clientes. Con más de 20
          años de experiencia combinada, su computadora está en buenas manos.
        </h1>
      </div>

      <div className="px-5 text-center flex flex-col items-center mb-10">
        <Image src="/images/footer2.png" width={100} height={100} />
        <h1 className="text-3xl font-bold pt-5">CLASIFICADO #1</h1>
        <h1 className="pb-2 text-lg">POR UNA RAZÓN</h1>
        <h1>
          Atendiendo a más de 50 clientes al mes y con una calificación perfecta
          de 5 estrellas. Trabajamos duro para nuestros clientes y nos
          esforzamos por construir relaciones duraderas.
        </h1>
      </div>

      <div className="px-5 text-center flex flex-col items-center mb-10">
        <Image src="/images/footer3.png" width={100} height={100} />
        <h1 className="text-2xl font-bold pt-5">TODO EL TRABAJO</h1>
        <h1 className="pb-2 text-lg">100% GARANTIZADO</h1>
        <h1>
          La satisfacción del cliente significa mucho para nosotros y nos
          esforzamos por asegurarnos que esté realmente satisfecho con los
          servicios que brindamos. Respaldamos nuestro trabajo el 100% del
          tiempo.
        </h1>
      </div>

      <div className="bg-[#333333] py-5 text-center text-gray-400">
        © 2024 CRLSetup. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
