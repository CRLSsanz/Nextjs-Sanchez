import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-gray-100 text-gray-600">
      <section className="mb-20 relative">
        <div>
          <Image
            src="/images/fondo.jpg"
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
              Computer Setup <br />G<span className="text-teal-300">a</span>ming
              Room.
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
