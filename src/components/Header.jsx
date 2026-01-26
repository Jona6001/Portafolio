export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 text-[#14532d] dark:text-[#bbf7d0] font-montserrat">

            {/* Imagen de perfil */}
            <img 
                src="./assets/Jona.jpg" 
                alt="Jonathan Rios" 
                className="rounded-full w-32 border-4 border-[green]" 
            />

            {/* Saludo */}
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 text-[#4ade80] dark:text-[#22c55e]">
                ¡Hola! Soy Jonathan Rios
                <img src="./assets/hand-icon.png" alt="mano saludando" className="w-6 mb-1" />
            </h3>

            {/* Descripción principal */}
            <h1 className="text-2xl sm:text-6xl lg:text-[50px]">
                Desarrollador web 
            </h1>
            <h2>con sede en Durango,Durango México.</h2>

            {/* Información adicional */}
            <p className="max-w-2xl mx-auto text-[#166534]/80 dark:text-[#bbf7d0]/80">
                Comencé mi trayectoria en la programación a inicios de 2021, impulsado por el interés en crear soluciones digitales. Desde entonces, me he formado de manera continua en el desarrollo de aplicaciones web modernas, aplicando buenas prácticas y tecnologías actuales.  <br />
                Actualmente, soy fundador y desarrollador de{" "} 
                <a 
                    href="https://www.instagram.com/makeitreal_devs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#16a34a] font-semibold hover:underline"
                >
                    MakitReal Devs
                </a>{" "}, donde participo en la creación de proyectos digitales orientados a la calidad y la innovación. 
    
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a
                    href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-[#16a34a] text-white flex items-center gap-2 hover:bg-[#166534] transition dark:border-transparent"
                >
                    Contáctame <img src="./assets/right-arrow-white.png" alt="flecha derecha" className="w-4" />
                </a>

                <a
                    href="#work"
                    className="px-10 py-2.5 rounded-full border border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a]/10 flex items-center gap-2 transition dark:text-[#bbf7d0] dark:border-[#4ade80]/25 dark:hover:bg-[#4ade80]/10"
                >
                    Ver portafolio <img src="./assets/right-arrow-bold.png" alt="flecha derecha" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}
