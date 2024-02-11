import Image from "next/image";
//import Link from "next/link";

export default function page() {
  return (
    <div className="bg-gray-100 text-gray-600">
      <section className="w-full fixed bottom-0">
        <div className="w-full h-16 bg-gray-900/85 text-teal-400 flex justify-between items-center px-4">
          <div>A</div>
          <div> = </div>
        </div>
      </section>

      <section className="mb-20 relative">
        <div>
          <Image
            src="/images/fondo1.jpg"
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

      {/** PRODUCTS MONITOR  */}
      <section className="mb-6">
        <h1 className="p-6 uppercase">Monitor HD</h1>
        <div className="w-full flex overflow-x-scroll">
          <div className="pl-6">
            <div className="h-full p-4 bg-white rounded mr-4">
              <div className="w-60 h-60 flex items-center">
                <Image
                  src="/images/monitor-uw-curvo.png"
                  width={1000}
                  height={1000}
                  alt="images"
                />
              </div>
              <div>
                <div className="text-center mb-2">
                  ACER Predator Z35P Nvidia G-Sync 21:9
                </div>
                <div className="text-sm text-gray-400">
                  <h1>Dimenciones: 34" 29" 27" 25"</h1>
                  <h1>Resolucion: UHD QHD 2K 4K</h1>
                  <h1>Marca: ACER ASUS HP LG SAMSUMG</h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-full p-4 bg-white rounded mr-4">
              <div className="w-60 h-60 flex items-center">
                <Image
                  src="/images/monitor-uw.png"
                  width={1000}
                  height={1000}
                  alt="images"
                />
              </div>
              <div>
                <div className="text-center mb-2">
                  ASUS ROG Swift PG-8Q Nvidia G-Sync 21:9 Republic of Gamers
                </div>
                <div className="text-sm text-gray-400">
                  <h1>Dimenciones: 34" 29" 27" 25"</h1>
                  <h1>Resolucion: UHD QHD 2K 4K</h1>
                  <h1>Marca: ACER ASUS HP LG SAMSUMG</h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-full p-4 bg-white rounded mr-4">
              <div className="w-60 h-60 flex items-center">
                <Image
                  src="/images/monitor-hd.png"
                  width={1000}
                  height={1000}
                  alt="images"
                />
              </div>
              <div>
                <div className="text-center mb-2">
                  Dell, U2518D UltraSharp Monitor (Black) PC Computer LED HD
                </div>
                <div className="text-sm text-gray-400">
                  <h1>Dimenciones: 27" 25" 22" 19"</h1>
                  <h1>Resolucion: HD UHD 2K </h1>
                  <h1>Marca: ACER DELL HP LG SAMSUMG</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** PRODUCTS RAM  */}
      <section className="mb-6">
        <h1 className="p-6 uppercase">Memoria RAM</h1>
        <div className="w-full flex overflow-x-scroll">
          <div className="pl-6">
            <div className="h-full p-4 bg-white rounded mr-4">
              <div className="w-60 h-48 flex items-center">
                <Image
                  src="/images/ram-ddr5.png"
                  width={1000}
                  height={1000}
                  alt="images"
                />
              </div>
              <div>
                <div className="text-center mb-2">
                  DDR5 SDRAM Computer data storage G.Skill DIMM, sunshine light
                </div>
                <div className="text-sm text-gray-400">
                  <h1>Tecnologia : DDR5 SDRAM</h1>
                  <h1>Dimenciones : 16GB 32GB</h1>
                  <h1>Transferencia : 4800Mhz 5600Mhz</h1>
                  <div className="flex flex-row">
                    <h1 className="mr-1 inline text-nowrap">Marca :</h1>
                    <h1 className="uppercase">
                      Corsair Crucial Kingston Lexar Patriot
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-full p-4 bg-white rounded mr-4">
              <div className="w-60 h-48 flex items-center">
                <Image
                  src="/images/ram-ddr4.png"
                  width={1000}
                  height={1000}
                  alt="images"
                />
              </div>
              <div>
                <div className="text-center mb-2">
                  Black Fury Hyper DDR4 RAM stick, memory Kingston Technology
                </div>
                <div className="text-sm text-gray-400">
                  <h1>Tecnologia : DDR4 SDRAM</h1>
                  <h1>Dimenciones : 8GB 16GB</h1>
                  <h1>Transferencia : 2400 3200 3600</h1>
                  <div className="flex flex-row">
                    <h1 className="mr-1 inline text-nowrap">Marca :</h1>
                    <h1 className="uppercase">
                      Corsair Gigastone Kingston Lexar Patriot
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-full p-4 bg-white rounded mr-4">
              <div className="w-60 h-48 flex items-center">
                <Image
                  src="/images/ram-ddr3.png"
                  width={1000}
                  height={1000}
                  alt="images"
                />
              </div>
              <div>
                <div className="text-center mb-2">
                  DDR3 SDRAM Computer data storage Kingston Technology DIMM
                </div>
                <div className="text-sm text-gray-400">
                  <h1>Tecnologia : DDR3 SDRAM</h1>
                  <h1>Dimenciones : 4GB 8GB</h1>
                  <h1>Transferencia : 1333Mhz 1600Mhz </h1>
                  <div className="flex flex-row">
                    <h1 className="mr-1 inline text-nowrap">Marca :</h1>
                    <h1 className="uppercase">
                      Corsair Gigastone Kingston Patriot
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-full p-4 bg-white rounded mr-4">
              <div className="w-60 h-48 flex items-center">
                <Image
                  src="/images/ram-laptop.png"
                  width={1000}
                  height={1000}
                  alt="images"
                />
              </div>
              <div>
                <div className="text-center mb-2">
                  Laptop SO-DIMM DDR4 SDRAM, Laptop, electronics, transfer, ram
                  png
                </div>
                <div className="text-sm text-gray-400">
                  <h1>Tecnologia : DDR3 DDR4 SDRAM</h1>
                  <h1>Dimenciones : 4GB 8GB 16GB</h1>
                  <h1>Transferencia : 1600 - 2400 - 3200 </h1>
                  <div className="flex flex-row">
                    <h1 className="mr-1 inline text-nowrap">Marca :</h1>
                    <h1 className="uppercase">
                      Corsair Crucial Kingston Patriot
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="mb-20">
            <Image
              src="/images/ima1.png"
              width={1000}
              height={1000}
              alt="images"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
