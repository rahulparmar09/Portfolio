import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Education from "./Components/Education";

const App = () => {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>

      {/* EDUCATION */}
      <section id="education" className="min-h-screen">
        <Education />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>


    </>
  );
};

export default App;
