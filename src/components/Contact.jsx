import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        setResult(res.message || "Mensaje enviado correctamente");
        event.target.reset();
      } else {
        setResult(res.message || "Ocurrió un error");
      }
    } catch (error) {
      setResult("Error de conexión");
    }
  };

  return (
    <section>
      <h4 id="contact" className="w-full px-[6%] py-16 mt-2 scroll-mt-80 text-center text-lg font-semibold text-[#16a34a]">
      Contáctame 
        </h4>

      <h2 className="text-center text-5xl -mt-16 mb-0 font-semibold text-[#14532d] dark:text-[#bbf7d0]">
        Ponte en contacto
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-[#166534]/80 dark:text-[#bbf7d0]/80">
        ¡Me encantaría saber de ti! Si tienes alguna pregunta, comentario o
        sugerencia, utiliza el formulario a continuación.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <input
          type="hidden"
          name="subject"
          value="Nuevo envío de formulario"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            required
            placeholder="Ingresa tu nombre"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Ingresa tu correo electrónico"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          required
          placeholder="Escribe tu mensaje"
          className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
        />

        <button
          type="submit"
          className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
        >
          Enviar ahora
          <img
            src="./assets/right-arrow-white.png"
            alt=""
            className="w-4"
          />
        </button>

        <p className="mt-4 text-center">{result}</p>
      </form>
    </section>
  );
}
