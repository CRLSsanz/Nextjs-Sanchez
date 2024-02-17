import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div>
      <section className="h-screen flex flex-col justify-between bg-gray-100">
        <div className="h-full text-gray-200">
          <div className="bg-gray-950 text-center py-4">
            <div>
              ICO
              <span>+51.990.441.430</span>
            </div>
            <div>
              ICO
              <span>ventas@sanz-tech.com</span>
            </div>
            <div>
              ICO
              <span>Horario Oficina: L-V de 08 AM - 06 PM</span>
            </div>
            <div>Redes sociales</div>
          </div>

          <div className="sticky top-0 bg-white h-20 flex flex-row justify-between items-center px-5">
            <div> LOGO</div>
            <div className="p-2 bg-gray-900">MENU</div>
          </div>

          <div className="bg-cover bg-center bg-[url('/images/clases1.jpg')] h-52 ">
            <div className="h-full flex flex-col justify-center items-center bg-gray-800/80 text-white">
              <div className="text-3xl font-bold mb-2">
                Cursos de su preferencia
              </div>
              <div className="text-xl bg-blue-600 px-4 py-1 rounded-full">
                Online y Presencial
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4">
          <div className="bg-white rounded-t-lg p-4">
            <Image
              src="/images/curso2.jpg"
              className="rounded-lg"
              width={600}
              height={400}
              alt="curso office"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4">
        <div className="bg-white p-4">
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500  p-4 text-white rounded-lg">
            <h1 className="text-xl font-bold py-2">Valores Agregados</h1>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div> ICO Manual Digital </div>
              <h1 className="font-bold">Sì</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div> ICO Horario </div>
              <h1 className="font-bold">Personalizado</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div> ICO Duracion </div>
              <h1 className="font-bold">7 a 20 Horas</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div> ICO Diploma</div>
              <h1 className="font-bold">Sì</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div> ICO Aprendizaje Garantizado</div>
              <h1 className="font-bold">Sì</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div> ICO Clases en vivo</div>
              <h1 className="font-bold">Sì</h1>
            </div>
            <div className="pt-3 flex flex-row justify-between">
              <div> ICO Interacciòn con Instructor</div>
              <h1 className="font-bold">Sì</h1>
            </div>
          </div>

          <div className="text-gray-800 my-5">
            <div className="flex flex-row mb-5">
              <div className="w-16">IMA</div>
              <div>
                <h1 className="font-semibold">INSTRUCTOR</h1>
                <h1 className="text-gray-500">Instructor Certificado</h1>
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <div className="w-16">IMA</div>
              <div>
                <h1 className="font-semibold">MODALIDAD</h1>
                <h1 className="text-gray-500">Online, en vivo y presencial</h1>
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <div className="w-16">IMA</div>
              <div>
                <h1 className="font-semibold">ESTUDIANTES</h1>
                <h1 className="text-gray-500">+500 Estudiantes felices</h1>
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <div className="w-16">IMA</div>
              <div>
                <h1 className="font-semibold">DURACION POR NIVEL</h1>
                <h1 className="text-gray-500">07/20 Horas</h1>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="text-xl text-white bg-blue-600 px-4 py-1 rounded-full">
              Temario
            </div>
            <div>Lista</div>
            <div>Lista</div>
            <div>Lista</div>
            <div>Lista</div>
            <div>Lista</div>
          </div>

          <div className="text-gray-700">
            <h1 className="text-2xl text-blue-600 mb-5">
              ¿Estudias o trabajas y quieres aprender una herramienta de
              Microsoft Office?
            </h1>
            <h1 className="text-xl font-semibold">
              Cursos de Microsoft Office
            </h1>
            <p className="text-justify">
              En Sanz Technology ofrecemos cursos de Microsoft Office para que
              conozcas y manejes esta paquetería básica de Microsoft (Word,
              Excel, PowerPoint, Outlook, Curso de Project, Access, etc.),
              además de cursos en plataformas de alto nivel para servidores
              (Windows Server, SQL, Oracle, etc.). Te garantizamos la mayor
              calidad en capacitación pues contamos con personal certificado,
              además de avalar su capacidad para impartir el curso. Ofrecemos
              además el curso para obtener la certificación Office.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="text-center font-semibold text-3xl mb-5">Cursos</h1>
            <div className="mb-5">
              <div className=" text-white bg-blue-600 px-4 py-3 rounded-full">
                Cursos de Microsoft Office
              </div>
            </div>

            <div className="mb-5">
              <div className=" text-white bg-blue-600 px-4 py-3 rounded-full">
                Cursos de Hardware y Software
              </div>
            </div>

            <div className="mb-5">
              <div className=" text-white bg-blue-600 px-4 py-3 rounded-full">
                Cursos de Diseno grafico
              </div>
            </div>

            <div className="mb-5">
              <div className=" text-white bg-blue-600 px-4 py-3 rounded-full">
                Cursos de Programacion Junior
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 px-5 text-gray-600 ">
        <h1 className="text-3xl font-semibold mb-5 text-gray-800">
          Modalidades
        </h1>
        <p className="text-justify mb-2">
          <span className="font-semibold"> Cursos Cerrados.-</span> Si requieres
          de cursos privados en forma grupal o individual, nosotros ofrecemos
          cursos en nuestras instalaciones con horarios y temas de tu elección.
        </p>
        <p className="text-justify mb-2">
          <span className="font-semibold">Cursos On-Site.-</span> Si lo que
          busca es un curso dentro de las instalaciones de su empresa, esta es
          la mejor opción. Nos ajustamos a los requerimientos de horario y a los
          temas que quieras tratar en el curso.
        </p>
        <p className="text-justify mb-5">
          <span className="font-semibold">Renta de Aulas.-</span> Si necesitas
          una sala para impartir cursos o pláticas a tu personal o clientes,
          Corporativo IT cuenta con las instalaciones adecuadas para ofrecer el
          servicio de renta de salas.
        </p>

        <div className="text-2xl text-center font-semibold text-gray-800 pt-5">
          <h1 className="mb-5">
            Si requieres información más detallada sobre cursos de Microsoft
            Office u otro curso.
          </h1>

          <h1>
            Contáctanos: <br /> Teléfonos: +51.990.441.430 <br /> Mail:
            ventas@sanz-tech.com
          </h1>
        </div>
      </section>

      <section className="hidden bg-cover bg-center bg-[url('/images/clases1.jpg')] h-screen pl-20">
        <div className="flex flex-col justify-between h-full bg-gray-900/30 text-white px-6">
          <div>hola</div>
          <div className="text-3xl font-bold tracking-widest">
            HERRAMIENTAS DE MICROSOFT OFFICE 365
          </div>
          <div>hola</div>
        </div>
      </section>

      {/** FOOTER */}
      <section className="bg-gray-900 text-gray-300 pt-20">
        <div className="px-5 mb-10">
          <h1 className="text-white font-bold tracking-[0.1em] mb-4">
            <span className="text-4xl font-bold">S</span>
            <span className="text-3xl">ANZ</span> Technology
          </h1>
          <p>
            Art in Technology es una empresa mexicana experta en servicios de
            Tecnología de la Información comprometida en brindar servicios de
            calidad a cada uno de sus clientes.Contamos con presencia en toda
            Latinoamérica..
          </p>
          <div className="py-5">
            <div>
              ICO
              <span>+51.990.441.430</span>
            </div>
            <div>
              ICO
              <span>ventas@sanz-tech.com</span>
            </div>
            <div>
              ICO
              <span>Presencia en Lima - Perù</span>
            </div>
            <div>Redes sociales</div>
          </div>
        </div>

        <div className="mb-20 px-5">
          <h1 className="text-white text-xl font-semibold mb-4">Blog</h1>
          <p className="mb-4">
            Visita nuestro blog y mantente actualizado en el mundo de Tecnología
            de la Información
          </p>
          <input
            type="text"
            className="w-full py-2 px-4 focus:outline-none "
            placeholder="Enter your email"
          />
        </div>

        <div className="bg-gray-950 text-center py-5">
          © Copyright 2024 Sanz Technology <br /> All Rights Reserved.
        </div>
      </section>

      <Navbar />
    </div>
  );
};

export default Page;
