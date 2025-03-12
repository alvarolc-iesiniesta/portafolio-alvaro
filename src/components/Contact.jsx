import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-700 text-white p-6"
    >
      <motion.div
        className="w-full max-w-2xl bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>

        <div className="flex flex-col space-y-4 mt-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl text-blue-400" />
            <a href="mailto:lopezcanoalvaro@gmail.com" className="hover:underline">
              lopezcanoalvaro@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-xl text-green-400" />
            <a href="tel:+34678546789" className="hover:underline">
              +34 678546789
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-xl text-red-400" />
            <span>Quintanar del Rey, España</span>
          </div>
        </div>

        {/* Botón para enviar mensaje por email */}
        <motion.a
          href="mailto:lopezcanoalvaro@gmail.com?subject=Contacto%20desde%20tu%20portafolio&body=Hola%20Álvaro,"
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition duration-300 inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Enviar Mensaje
        </motion.a>

        {/* Botón para descargar el CV */}
        <motion.a
          href="/AlvaroCV.pdf"
          download="Alvaro_Lopez_CV.pdf"
          className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md transition duration-300 inline-flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaDownload className="text-lg" />
          <span>Descargar CV</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
