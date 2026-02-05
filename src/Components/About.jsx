import React from "react";
import ParticlesBackground from "../Animation/ParticlesBackground";
import { motion } from "framer-motion";


const About = () => {
  //Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen relative bg-[#000000] flex items-center py-24 "
    >
      {/* Particles */}
      <div className="absolute inset-0">
        <ParticlesBackground
          particleColors={["#38bdf8"]}
          particleCount={400}
          particleSpread={12}
          speed={0.2}
          particleBaseSize={90}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl md:max-w-7xl mx-auto px-6 pb-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}

          className="flex justify-center">
          <motion.img
            src="https://i.pinimg.com/originals/a5/35/60/a53560c8088900e266880f779dacced7.gif"
            alt="about"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

            className="w-[320px] md:w-95 rounded-2xl
                       border border-cyan-400 animate-float
                       shadow-[0_0_40px_rgba(34,211,238,0.4)]
                       hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-4
                         bg-gradient-to-r from-cyan-400 to-blue-500
                         bg-clip-text text-transparent">
            About Me
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-300 text-lg leading-relaxed">
            I’m a passionate <span className="text-white font-semibold">React Developer </span>
            who loves building fast, scalable and visually appealing web applications.
            I focus on clean code, modern UI and great user experience.
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-400 mt-4">
            I enjoy working with modern frontend tools and continuously improving
            my skills to build real-world products 🚀
          </motion.p>

          {/* Info Boxes */}
          <motion.div variants={stagger}
            className="grid grid-cols-2 gap-4 mt-8">
            {[
              { title: "Experience", value: "Fresher" },
              { title: "Projects", value: "10+" },
              { title: "Tech Stack", value: "MERN" },
              { title: "Focus", value: "Frontend" },
            ].map((item) => (
              <motion.div
                variants={fadeUp}
                key={item.title}
                className="p-4 rounded-xl bg-white/5 border border-white/10
                           hover:border-cyan-400 transition"
              >
                <p className="text-cyan-400 font-semibold">{item.title}</p>
                <p className="text-gray-300">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="pt-5 absolute bottom-[-70px] md:bottom-[-80px] left-1/2 -translate-x-1/2
               animate-bounce text-cyan-400 text-3xl cursor-pointer"
          onClick={() =>
            document.getElementById("skills")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <i className="fa-solid fa-arrow-down"></i>
        </motion.div>


      </div>



    </section >
  );
};

export default About;
