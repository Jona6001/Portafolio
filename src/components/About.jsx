import {
  Code2,
  GraduationCap,
  FolderCode,
  Atom,
  GitBranch,
} from "lucide-react";
import { AiFillHtml5,AiOutlineCoffee} from "react-icons/ai";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs,FaPython } from "react-icons/fa";


export default function About() {
  const data = [
    {
      name: "Lenguajes",
      icon: <Code2 className="w-7 h-7 text-[#16a34a]" />,
      description: "HTML, CSS, JavaScript, React, Node.js, Python",
    },
    {
      name: "Educación",
      icon: <GraduationCap className="w-9 h-7 text-[#16a34a]" />,
      description:
        " Formación continua en desarrollo de aplicaciones web en la Universidad Tecnológica de Durango, con enfoque en tecnologías modernas y buenas prácticas de programación. Nivel de inglés: B2 (intermedio-avanzado).",
    },
    {
      name: "Proyectos",
      icon: <FolderCode className="w-7 h-7 text-[#16a34a]" />,
      description:
        "He desarrollado más de 5 proyectos web con enfoque educativo y empresarial.",
    },
  ];

  const tools = [
{ name: "HTML", icon: <AiFillHtml5 className="w-6 h-6 text-[#E34F26]" /> },        
{ name: "Tailwind", icon: <RiTailwindCssLine className="w-6 h-6 text-[#38BDF8]" /> },       
{ name: "JavaScript", icon: <IoLogoJavascript className="w-6 h-6 text-[#F7DF1E]" /> },     
{ name: "React", icon: <Atom className="w-6 h-6 text-[#61DAFB]" /> },           
{ name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-[#339933]" /> },      
{ name: "Git", icon: <GitBranch className="w-6 h-6 text-[#F05032]" /> },        
{ name: "Python", icon: <FaPython className="w-6 h-6 text-[#3776AB]" /> },          

  ];

  return (
    <div
      id="about"
      className="w-full px-[12%] py-1 scroll-mt-20 text-[#14532d] dark:text-[#bbf7d0] font-montserrat"
    >
      <h4 className="text-center mb-4 text-lg text-[#16a34a] dark:text-[#4ade80]">
        Introducción
      </h4>
      <h2 className="text-center text-5xl mb-10 text-[#14532d] dark:text-[#bbf7d0]">
        Sobre mí
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-5">
        {/* Imagen de perfil */}
        <div className="max-w-max mx-auto relative mt-13 sm:-mt-15">

          <img
            src="./assets/Jona2.jpg"
            alt="Jonathan Rios"
            className="w-64 sm:w-80 rounded-3xl max-w-none border-4 border-[#FFFFFF] border-[#FFFFFF]"
          />
          <div className="bg-white dark:bg-[#53ED6F] w-30 h-30 sm:w-40 sm:h-40 absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(22,197,94,0.2)] flex items-center justify-center border-4 border-[#16a34a]/10 dark:border-[#4ade80]/30">
            <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32">
              <svg viewBox="0 0 100 100" className="w-23 h-23 sm:w-32 sm:h-32 animate-spin_slow">
                <defs>
                  <path id="circlePath" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                </defs>
                <text fontSize="10.6" fill="#000000" fontWeight="bold">
                  <textPath xlinkHref="#circlePath" startOffset="0">
                    FULL-STACK • DEVELOPER • FULL-STACK - - - 
                  </textPath>
                </text>
              </svg>
              <AiOutlineCoffee className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#5E1EBD] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-[#166534]/80 dark:text-[#bbf7d0]/80">
            Soy{" "}
            <span className="text-[#4ade80] font-semibold">Jonathan Rios</span>,
            desarrollador de páginas y aplicaciones web de Durango, Durango México. Inicié en el mundo de la
            programación a principios de 2021, creando proyectos con JavaScript,
            React, Node.js, Python . También soy el creador y Developer de{" "}
            <a
              href="https://www.instagram.com/makeitreal_devs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16a34a] font-semibold hover:underline"
            >
              MakitReal
            </a>
            , Proyecto personal desarrollado junto a compañeros del ámbito del desarrollo, enfocado en la creación de proyectos tecnológicos que nos permitan crecer profesionalmente, compartir conocimientos y ofrecer soluciones reales mediante software.
          </p>

          {/* Secciones de información */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl">
            {data.map((item) => (
              <li
                key={item.name}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-[#16a34a]/10 dark:hover:bg-[#4ade80]/10 hover:-translate-y-1 duration-500"
              >
                {item.icon}
                <h3 className="my-2 font-semibold text-[#14532d] dark:text-[#bbf7d0]">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Herramientas */}
          <h4 className="my-3 text-[#16a34a] dark:text-[#4ade80]">
            Herramientas que utilizo
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3.5">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1 text-center transition-transform duration-200 hover:scale-110"
            >
              {tool.icon}
              <span className="text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300">
                {tool.name}
              </span>
            </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
