import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiGlobe } from "react-icons/fi";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const translations = {
  es: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
    language: "Idioma",
    subProjects: [
      { name: "CinesYelmo", link: "https://github.com/alvarolc-iesiniesta/CinesYelmo", external: true },
      { name: "ExistDB", link: "https://github.com/alvarolc-iesiniesta/ExistDB", external: true },
      { name: "PSP", link: "https://github.com/alvarolc-iesiniesta/CreacionHilos", external: true },
    ],
  },
  en: {
    home: "Home",
    about: "About me",
    projects: "Projects",
    contact: "Contact",
    language: "Language",
    subProjects: [
      { name: "CinesYelmo", link: "https://github.com/alvarolc-iesiniesta/CinesYelmo", external: true },
      { name: "ExistDB", link: "https://github.com/alvarolc-iesiniesta/ExistDB", external: true },
      { name: "PSP", link: "https://github.com/alvarolc-iesiniesta/CreacionHilos", external: true },
    ],
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [language, setLanguage] = useState("es");

  return (
    <nav className="fixed top-0 w-full p-4 bg-black bg-opacity-80 text-white shadow-lg z-50">
      <div className="flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Portfolio Álvaro</h1>

        {/* Menú Hamburguesa en Móvil (Derecha) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl bg-gray-200 text-gray-800 p-2 rounded-lg shadow-md ml-auto"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menú en Escritorio */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#inicio" className="hover:text-gray-400">{translations[language].home}</a></li>
          <li><a href="#sobre-mi" className="hover:text-gray-400">{translations[language].about}</a></li>

          {/* Proyectos con Submenú */}
          <li className="relative group cursor-pointer">
            <button onClick={() => setSubmenuOpen(!submenuOpen)} className="flex items-center space-x-2 hover:text-gray-400">
              <span>{translations[language].projects}</span>
              {submenuOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            <AnimatePresence>
              {submenuOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 bg-gray-800 text-white rounded-lg shadow-md overflow-hidden"
                >
                  {translations[language].subProjects.map((subProject, index) => (
                    <li key={index} className="p-3 hover:bg-gray-700">
                      <a href={subProject.link} target="_blank" rel="noopener noreferrer">🔹 {subProject.name}</a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li><a href="#contacto" className="hover:text-gray-400">{translations[language].contact}</a></li>

          {/* Selector de Idioma */}
          <li className="flex items-center space-x-2">
            <FiGlobe className="text-xl" />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-white border-none outline-none cursor-pointer">
              <option value="es">🇪🇸 Español</option>
              <option value="en">🇬🇧 English</option>
            </select>
          </li>

          {/* Redes Sociales */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-blue-500 hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-blue-500 hover:text-blue-600 transition duration-300" />
            </a>
          </div>
        </ul>
      </div>

      {/* Menú Desplegable en Móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="mt-4 bg-gray-900 p-4 rounded-lg md:hidden absolute right-4"
          >
            <ul className="text-lg">
              <li className="p-4 hover:bg-gray-700 cursor-pointer"><a href="#inicio">{translations[language].home}</a></li>
              <li className="p-4 hover:bg-gray-700 cursor-pointer"><a href="#sobre-mi">{translations[language].about}</a></li>

              {/* Proyectos en Móvil */}
              <li className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer"
                  onClick={() => setSubmenuOpen(!submenuOpen)}>
                <span>{translations[language].projects}</span>
                {submenuOpen ? <FiChevronUp /> : <FiChevronDown />}
              </li>

              <AnimatePresence>
                {submenuOpen && (
                  <motion.ul initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-800">
                    {translations[language].subProjects.map((subProject, index) => (
                      <li key={index} className="p-3 pl-8 hover:bg-gray-700 cursor-pointer">
                        <a href={subProject.link} target="_blank" rel="noopener noreferrer">🔹 {subProject.name}</a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <li className="p-4 hover:bg-gray-700 cursor-pointer"><a href="#contacto">{translations[language].contact}</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
