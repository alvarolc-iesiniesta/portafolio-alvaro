import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

const roles = [
  "Desarrollador Web ",
  "Diseñador UI/UX ",
  "Creador de Experiencias Digitales ",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [animationData, setAnimationData] = useState(null);

  // Cargar la animación desde public/animacion.json
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/animacion.json`)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error al cargar la animación:", error));
  }, []);

  // Efecto de máquina de escribir
  useEffect(() => {
    if (subIndex === roles[index].length + 1) {
      setTimeout(() => setSubIndex(0), 1000); // Pausa antes de cambiar
      setIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setText(roles[index].substring(0, subIndex));
      setSubIndex((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  // Parpadeo del cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      
      {/* Animación de fondo */}
      {animationData && (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Lottie animationData={animationData} loop={true} className="w-full h-full object-cover" />
        </div>
      )}

      <motion.h1
        className="text-5xl font-bold mb-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PORTFOLIO
      </motion.h1>

      {/* Animación de máquina de escribir */}
      <h2 className="text-2xl font-medium mb-6 relative z-10">
        {text}
        <span className="text-white">{blink ? "|" : " "}</span>
      </h2>

     
    </section>
  );
};

export default Hero;
