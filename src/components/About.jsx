import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-purple-300 to-white py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Imagen con animación */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-1 mb-6"
        >
          <img
            src="/imagen.jpg"
            alt="Foto de perfil"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </motion.div>

        {/* Título animado */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl font-extrabold mt-6 text-gray-800"
        >
          Sobre Mí
        </motion.h2>

        {/* Descripción resumida y animada */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-gray-600 mt-4 max-w-2xl leading-relaxed"
        >
          Soy desarrollador de aplicaciones multiplataforma (DAM), con experiencia en 
          <span className="text-blue-500 font-semibold"> React</span>, 
          <span className="text-indigo-500 font-semibold"> Tailwind CSS</span> y 
          <span className="text-purple-500 font-semibold"> animaciones con Framer Motion</span>. 
          Me apasiona crear interfaces atractivas y funcionales.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
