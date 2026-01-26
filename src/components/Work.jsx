

export default function Work() {

  const work = [
    {
      name: 'Clinica Dental Dr Eddie Vega de la paz',
      icon: './assets/clinica1.png',
      description: 'Diseño Web',
    },
    {
      name: 'Dashboard Clinica Dental',
      icon: './assets/clinica.png',
    },
    {
      name: 'Petro Arte Control',
      icon: './assets/petroArt.png',
      description: 'Login Page Petro Arte',
    },
    {
      name: 'Petro Arte Dash board',
      icon: './assets/petroDash.png',
      description: 'Diseño de interfaz',
    }
  ];


  return (


      <div
        id="work"
        className="w-full px-[10%] py-12 scroll-mt-3 text-[#14532d] dark:text-[#bbf7d0] transition-colors duration-500"
      >
        <h4 className="text-center mb-1 text-lg text-[#16a34a] dark:text-[#4ade80]">
          Mi portafolio
        </h4>
        <h2 className="text-center text-5xl mb-5 font-semibold">
          Proyectos Destacados
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-[#166534]/80 dark:text-[#bbf7d0]/80">
          Bienvenido a mi portafolio de desarrollo web. Explora una colección de proyectos que reflejan mi experiencia y crecimiento en el desarrollo FRONT y BACK END.
        </p>
        <div className="w-full flex flex-wrap justify-center gap-4 max-w-9xl mx-auto">
          {work.map((project, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "w-64 h-[18rem] mx-2 relative group rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-200 dark:bg-gray-800"
                  : "w-[24rem] aspect-video mx-3 relative group rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-200 dark:bg-gray-800"
              }
              style={{
                backgroundImage: `url(${project.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
                <h3 className="font-semibold text-2xl text-white text-center">
                  {project.name}
                </h3>
                <p className="text-lg text-white/80 text-center">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
          {/* Tarjeta de 'Más proyectos en camino...' */}
          <div className="w-[18rem] aspect-video mx-1æ relative flex items-center justify-center rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-[#16a34a]/80 to-[#4ade80]/80 dark:from-[#14532d]/90 dark:to-[#4ade80]/60 border-2 border-dashed border-[#16a34a] dark:border-[#4ade80]">
            <span className="text-2xl font-bold text-white drop-shadow-lg text-center select-none">
              Más proyectos en camino...
            </span>
          </div>
        </div>
      </div>

  );
}
