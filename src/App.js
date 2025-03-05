import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>
      <section id="sobre-mi">
        <Projects />
      </section>
      <section id="skills">
        <Skills />  {}
      </section>
      <section id="proyectos">
        <About />
      </section>
      <section id="contacto">
        <Contact />
      </section>
    </>
  );
}

export default App;
