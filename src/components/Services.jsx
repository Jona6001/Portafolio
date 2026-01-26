
import { Code2, Layout} from "lucide-react";

export default function Services() {

  const services = [
    {
      name: "Desarrollo Web",
      icon: <Layout className="w-8 h-8 text-[#16a34a]" />,
      description:
        "Diseño y desarrollo de sitios web modernos, responsivos y optimizados, utilizando HTML, CSS y JavaScript, enfocados en la experiencia de usuario, el rendimiento y la compatibilidad entre navegadores, aplicando buenas prácticas de desarrollo web y estándares actuales. ",
    },
    {
      name: "Aplicaciones Web",
      icon: <Code2 className="w-8 h-8 text-[#16a34a]" />,
      description:
        "Desarrollo de aplicaciones web full-stack utilizando ReactJS y NodeJS, integrando bases de datos como MongoDB y PostgreSQL. Experiencia en la creación de soluciones modernas, escalables y seguras, aplicando buenas prácticas de desarrollo, arquitectura limpia y enfoque en rendimiento y experiencia de usuario. Fundador y desarrollador de MakitReal Devs, participando activamente en el diseño y desarrollo de proyectos digitales.",
    }
  ];

  return (
    <section
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-10 text-[#14532d] dark:text-[#bbf7d0] transition-colors duration-500 font-montserrat"
    >
      {/* Encabezado */}
      <h4 className="text-center mb-2 text-lg text-[#16a34a] dark:text-[#4ade80]">
        Servicios que ofrezco
      </h4>
      <h2 className="text-center text-5xl mb-12 font-semibold">
        Mis servicios
      </h2>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Sección de texto y servicios */}
        <div className="flex flex-col gap-8 w-full max-w-xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex gap-4 items-start cursor-pointer group transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center p-3 rounded-full bg-[#16a34a]/10 group-hover:bg-[#4ade80]/20 transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-[#16a34a] dark:group-hover:text-[#4ade80] transition-colors">
                  {service.name}
                </h3>
                <p className="text-base leading-9 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Imagen lateral */}
        <img
          src="./assets/img-service.png"
          alt="Servicios de desarrollo web"
          className="max-w-md w-full md:max-w-lg rounded-xl select-none"
        />
      </div>
    </section>
  );
}


