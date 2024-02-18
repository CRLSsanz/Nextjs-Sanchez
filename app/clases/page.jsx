import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div>
      <section className="h-screen flex flex-col justify-between bg-gray-100">
        <div className="h-full text-gray-200">
          <div className="bg-gray-950 text-center py-4">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="ml-2">+51.990.441.430</span>
            </div>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="ml-2">ventas@sanz-tech.com</span>
            </div>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="ml-2">
                Horario Oficina: L-V de 08 AM - 06 PM
              </span>
            </div>

            {/** SVG - REDES SOCIALES */}
            <div className="flex flex-wrap justify-center text-gray-300 py-1">
              <div className="bg-transparent border border-gray-300 rounded-full w-6 h-6 flex mr-2">
                <svg
                  className="m-auto"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fillRule="nonzero"
                      d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="bg-transparent border border-gray-300 rounded-full w-6 h-6 flex mr-2">
                <svg
                  className="m-auto"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                  </g>
                </svg>
              </div>
              <div className="bg-transparent border border-gray-300 rounded-full w-6 h-6 flex mr-2">
                <svg
                  className="m-auto"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path>
                  </g>
                </svg>
              </div>
              {/** prueba */}
              <div className="bg-transparent border border-gray-300 rounded-full w-6 h-6 flex mr-0">
                <svg
                  className="m-auto"
                  fill="currentColor"
                  viewBox="-337 273 123.5 256"
                  height="1rem"
                  width="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="sticky top-0 bg-white h-20 flex flex-row justify-between items-center px-5">
            <h1 className="text-gray-700 text-sm font-bold tracking-[0.1em]">
              <span className="text-4xl font-bold">S</span>
              <span className="text-2xl">ANZ</span> Technology
            </h1>

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

      <section className="bg-gray-100  px-4 pb-10">
        <div className="bg-white rounded-b-xl p-4">
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500  p-4 text-white rounded-lg">
            <h1 className="text-xl font-bold py-2">Valores Agregados</h1>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
                Manual Digital
              </div>
              <h1 className="font-bold">Sì</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
                Horario
              </div>
              <h1 className="font-bold">Personalizado</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Duracion{" "}
              </div>
              <h1 className="font-bold">7 a 20 Horas</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
                Diploma
              </div>
              <h1 className="font-bold">Sì</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                Aprendizaje Garantizado
              </div>
              <h1 className="font-bold">Sì</h1>
            </div>
            <div className="py-3 border-b border-blue-300 flex flex-row justify-between">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                Clases en vivo
              </div>
              <h1 className="font-bold">Sì</h1>
            </div>
            <div className="pt-3 flex flex-row justify-between">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Interacciòn con Instructor
              </div>
              <h1 className="font-bold">Sì</h1>
            </div>
          </div>

          <div className="text-gray-800 my-5">
            <div className="flex flex-row items-center mb-5">
              <div className="w-16 mr-3">
                <Image
                  src={"/images/clases-instructor.png"}
                  width={60}
                  height={60}
                  alt="Instructor"
                />
              </div>
              <div>
                <h1 className="font-semibold">INSTRUCTOR</h1>
                <h1 className="text-gray-500">Instructor Certificado</h1>
              </div>
            </div>
            <div className="flex flex-row items-center mt-5">
              <div className="w-16 mr-3">
                <Image
                  src={"/images/clases-online.png"}
                  width={60}
                  height={60}
                  alt="Online"
                />
              </div>
              <div>
                <h1 className="font-semibold">MODALIDAD</h1>
                <h1 className="text-gray-500">Online, en vivo y presencial</h1>
              </div>
            </div>
            <div className="flex flex-row items-center mt-5">
              <div className="w-16 mr-3">
                <Image
                  src={"/images/clases-participantes.png"}
                  width={60}
                  height={60}
                  alt="Participantes"
                />
              </div>
              <div>
                <h1 className="font-semibold">ESTUDIANTES</h1>
                <h1 className="text-gray-500">+500 Estudiantes felices</h1>
              </div>
            </div>
            <div className="flex flex-row items-center mt-5">
              <div className="w-16 mr-3">
                <Image
                  src={"/images/clases-duracion.png"}
                  width={60}
                  height={60}
                  alt="Duracion"
                />
              </div>
              <div>
                <h1 className="font-semibold">DURACION POR NIVEL</h1>
                <h1 className="text-gray-500">07/20 Horas</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <a
              href="#cursos"
              className=" text-white text-center bg-blue-600 px-10 py-2 rounded-full"
            >
              Ver temario
            </a>
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

          <div id="cursos" className="mt-10">
            <h1 className="text-center font-semibold text-3xl mb-5">Cursos</h1>
            <div className="hidden mb-5">
              <div className=" text-white bg-blue-600 px-4 py-3 rounded-full">
                Cursos de Microsoft Office
              </div>
            </div>

            <div
              id="accordion-color"
              data-accordion="collapse"
              data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
              className="mb-5"
            >
              <h2 id="accordion-color-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-color-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-color-body-1"
                >
                  <span>Cursos de Microsoft Office</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-1"
                className="hidden"
                aria-labelledby="accordion-color-heading-1"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Microsoft Word <br />
                    Microsoft Excel <br />
                    Microsoft PowerPoint <br />
                    Microsoft Access
                  </p>
                </div>
              </div>

              <h2 id="accordion-color-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-color-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-color-body-2"
                >
                  <span>Cursos de Hardware y Software</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-2"
                className="hidden"
                aria-labelledby="accordion-color-heading-2"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Partes de la computadora <br />
                    Perifericos <br />
                    Aplicaciones <br />
                    Sistema Operativo <br />
                    Manejo de Windows 11 <br />
                  </p>
                </div>
              </div>

              <h2 id="accordion-color-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-color-body-3"
                  aria-expanded="true"
                  aria-controls="accordion-color-body-3"
                >
                  <span>Cursos de Diseno Grafico</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-3"
                className="hidden"
                aria-labelledby="accordion-color-heading-3"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Photoshop <br />
                    CorelDraw <br />
                    Adobe Premier <br />
                  </p>
                </div>
              </div>

              <h2 id="accordion-color-heading-4">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-color-body-4"
                  aria-expanded="true"
                  aria-controls="accordion-color-body-4"
                >
                  <span>Cursos de Programacion Junior</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-4"
                className="hidden"
                aria-labelledby="accordion-color-heading-4"
              >
                <div className="rounded-b-xl p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Principios basicos <br />
                    Algoritmos <br />
                    Programando con Scract <br />
                    Diseno web HTML
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-10 text-gray-600 ">
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
        <div className="px-10 mb-10">
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

        <div className="mb-20 px-10">
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
