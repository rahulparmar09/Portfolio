import React from 'react'
import ParticlesBackground from "../Animation/ParticlesBackground"
import SplashCursor from '../Animation/SplashCursor';
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";




const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">

      {/* Splash Cursor (Desktop only) */}
      <div className="hidden md:block">
        <SplashCursor />
      </div>

      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground
          particleColors={["#38bdf8", "#22d3ee", "#60a5fa"]}
          particleCount={700}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Home Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-10">

        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-36 w-36 rounded-full border-4 border-cyan-400
          shadow-[0_0_30px_rgba(34,211,238,0.6)]
          hover:scale-95 transition duration-300 my-4 mt-10"
          src="https://thumbs.dreamstime.com/b/happy-boy-cartoon-illustration-smiling-child-hands-cheeks-cheerful-his-big-smile-376270151.jpg"
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-3
           bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
           bg-clip-text text-transparent"
        >
          Hello, I'm Rahul Parmar
        </motion.h1>

        {/* Typewriter */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl text-gray-300 mt-2">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1400}
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 max-w-xl text-gray-400 text-base md:text-lg"
        >          I create modern, scalable and responsive web applications with
          clean UI, smooth animations and performance-focused code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.8 },
            },
          }}
          className="mt-6 flex flex-wrap gap-6 justify-center"
        >
          <a
            href="\Rahul_resume.pdf"
            download
            className="px-8 py-4 rounded-full font-semibold text-black
             bg-gradient-to-r from-cyan-400 to-blue-500
             hover:scale-105 transition
              w-full sm:w-auto"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="md:px-8 md:py-4 px-4 py-4 rounded-full font-semibold
            border border-cyan-400 text-cyan-400
           hover:bg-cyan-400 hover:text-black
             hover:scale-105 transition
             w-full sm:w-auto"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-14 animate-bounce text-cyan-400 text-3xl cursor-pointer"
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <i className="fa-solid fa-arrow-down"></i>
        </motion.div>
      </div>
    </div >
  );
};

export default Hero