import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaJava, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { SiMongodb, SiPython } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500 text-5xl" />, level: 5 },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, level: 4.5 },
  { icon: <FaJs className="text-yellow-500 text-5xl" />, level: 4 },
  { icon: <FaReact className="text-blue-300 text-5xl" />, level: 4 },
  { icon: <FaNodeJs className="text-green-500 text-5xl" />, level: 3.5 },
  { icon: <SiMongodb className="text-green-400 text-5xl" />, level: 3 },
  { icon: <SiPython className="text-yellow-400 text-5xl" />, level: 3.5 },
  { icon: <FaJava className="text-purple-400 text-5xl" />, level: 5 },
  { icon: <FaGit className="text-red-500 text-5xl" />, level: 4.5 },
];

// Función para renderizar estrellas grises dinámicamente con animación
const renderStars = (level) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= level) {
      stars.push(
        <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}>
          <FaStar className="text-gray-400 text-xl" />
        </motion.span>
      );
    } else if (i - 0.5 === level) {
      stars.push(
        <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}>
          <FaStarHalfAlt className="text-gray-400 text-xl" />
        </motion.span>
      );
    } else {
      stars.push(
        <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}>
          <FaRegStar className="text-gray-400 text-xl" />
        </motion.span>
      );
    }
  }
  return stars;
};

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-14 text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skillset
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
          >
            <motion.div className="flex flex-col items-center" whileHover={{ rotate: 5 }}>
              {skill.icon}
              <h3 className="text-xl font-semibold mt-2">{skill.name}</h3>

              {/* Estrellas con animación */}
              <div className="flex space-x-1 mt-3">{renderStars(skill.level)}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
