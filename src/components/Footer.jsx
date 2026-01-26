import { Instagram} from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-[#14532d] dark:text-[#bbf7d0] font-sans">
      {/* Logo */}
      <div className="text-center">
        <img src="./assets/logoMR.png" alt="Logo" className="w-20 mx-auto mb-1 dark:hidden" />
        <img src="./assets/logoMR.png" alt="Logo" className="w-20 mx-auto mb-1 hidden dark:block" />

        {/* Email */}
        <div className="w-max flex items-center gap-2 mx-auto mb-4">
          <img src="./assets/mail_icon.png" alt="Correo" className="w-5 dark:hidden" />
          <img src="./assets/mail_icon_dark.png" alt="Correo" className="w-5 hidden dark:block" />
          <a href="mailto:jonathanrioscontact@gmail.com" className="hover:underline">
           jonathanrioscontact@gmail.com
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.instagram.com/makeitreal_devs/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-[#4ade80] transition-colors" />
          </a>
        </div>
      </div>

      {/* Pie de página */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p>
          © {new Date().getFullYear()} <a href="https://www.instagram.com/makeitreal_devs/" className="hover:underline">MakiReal</a>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
