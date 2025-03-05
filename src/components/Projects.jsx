import { FaGithub, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Proyecto Hibernate",
    description: "Conexión a base de datos con Hibernate.",
    link: "https://github.com/alvarolc-iesiniesta/ProyectoDGC"
  },
  {
    title: "Proyecto MVC",
    description: "Proyecto modelo, vista y controlador.",
    link: "https://github.com/alvarolc-iesiniesta/ProyectoMVC"
  },
  {
    title: "Videojuego en Godot",
    description: "Juego sencillo de hacer en Godot.",
    link: "https://github.com/alvarolc-iesiniesta/JuegoGodot",
    pdf: "/DOCUMENTACION%20PROYECTO%20GODOT%20(Alvaro).pdf"
  }
];


const Projects = () => {
  return (
    <section id="proyectos" className="min-h-screen bg-gray-900 text-white py-14 text-center">
      <motion.h2 
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         Mis Proyectos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>
            
            {/* Botón para ver en GitHub */}
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-4 text-blue-400 hover:underline flex items-center justify-center space-x-2"
            >
              <FaGithub className="text-2xl" />
              <span>Ver en GitHub</span>
            </a>

            {/* Si el proyecto tiene un PDF, añadir botón de descarga */}
            {project.pdf && (
              <a 
                href={project.pdf} 
                download="DOCUMENTACION_PROYECTO_GODOT.pdf"
                className="inline-block mt-4 text-red-400 hover:underline flex items-center justify-center space-x-2"
              >
                <FaFilePdf className="text-2xl" />
                <span>Descargar Manual</span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
