import React from 'react'
import ParticlesBackground from "../Animation/ParticlesBackground";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Stylora – Salon Booking System",
    desc: "A full-stack salon booking application with JWT authentication, role-based access, online payments (Razorpay & Stripe), and real-time appointment slot management.",
    img: "/Stylora.png",
    tech: ["React.js", "Tailwind Css", "Node.js", "Express.js", "MongoDb"],
    github: "https://github.com/rahulparmar09/Stylora",
  },
  {
    title: "Ferrano – E-commerce Project",
    desc: "A full-stack e-commerce platform with product listing, cart system, secure checkout, multiple payment options, and real-time order tracking with admin management.",
    img: "/Ferrano.png",
    tech: ["React.js", "Tailwind Css", "Node.js", "Express.js", "MongoDb"],
    github: "https://github.com/rahulparmar09/Ecommerce-store-ferrano-Mern",
  },
  {
    title: "Blogify – AI-Powered Blog Platform",
    desc: "A blog platform with user authentication, post creation, commenting system, and AI-based content generation with a responsive user interface.",
    img: "/Blogify.png",
    tech: ["React.js", "Tailwind Css", "Node.js", "Express.js", "MongoDb"],
    github: "https://github.com/rahulparmar09/BOLDBLOG",
  },
  {
    title: "Vegist Grocery Store",
    desc: "A fully responsive modern Grocery Store Frontend built using Tailwind CSS and JavaScript. Includes dynamic cart functionality with localStorage.",
    img: "/Vegist.png",
    tech: ["Javascipt", "Tailwind", "Html", "Flowbite"],
    github: "https://github.com/rahulparmar09/vegist-grocery-store",
  },
  {
    title: "Ecomall",
    desc: "Ecomall is a responsive eCommerce site built with JavaScript, HTML, and Tailwind CSS, using JSON server for product management and CRUD operations.",
    img: "/Ecomall2.png",
    tech: ["Javascipt", "Tailwind", "Html", "Css3"],
    github: "https://github.com/rahulparmar2004/Electro",
  },
  {
    title: "Weather App",
    desc: " Using technologies like HTML, CSS, JavaScript, and OpenWeatherMap API, it offers a user-friendly interface.",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*f8p3zchpvcWL-eyKE1PeSw.png",
    tech: ["Javascipt", "Html", "Css3"],
    github: "https://github.com/rahulparmar2004/javascript/blob/main/weather.html",
  },
];



const Projects = () => {
  //Animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


  return (
    <section
      id="projects"
      className="w-full min-h-screen relative bg-[#000000] flex items-center"
    >
      {/* Particles */}
      <div className="absolute inset-0">
        <ParticlesBackground
          particleColors={["#B084F9", "#00F5FF", "#F5F7FA"]}
          particleCount={300}
          particleSpread={12}
          speed={0.2}
          particleBaseSize={90}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Project Page Content */}
      <div className="relative z-10 mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-5
                       bg-gradient-to-r from-cyan-400 to-blue-500
                       bg-clip-text text-transparent">
          PROJECTS
        </motion.h2>

        <p className="mb-8 max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
          Technologies and tools I use to build fast, modern and scalable web
          applications with clean UI and smooth user experience.
        </p>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pb-13 place-items-center">

          {projects.map((project, i) => (
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
              key={i}
              className="group relative w-full max-w-sm
             rounded-2xl overflow-hidden
             bg-white/5 backdrop-blur border border-white/10
             hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:border-cyan-500
             transition duration-500"
            >

              {/* Image Section */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-fill
                      transition duration-700"
                />

                {/* GitHub Hover Icon */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center
                     bg-black/60 opacity-0 group-hover:opacity-100
                     transition duration-500"
                >
                  <i className="fa-brands fa-github text-white text-4xl
                        hover:text-cyan-400 transition"></i>
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-left font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-left text-gray-400 leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full
                         bg-cyan-400/10 text-cyan-300 border border-cyan-400/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 flex justify-center animate-bounce text-cyan-400 text-3xl cursor-pointer"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <i className="fa-solid fa-arrow-down"></i>
        </motion.div>




      </div>




    </section>
  )
}

export default Projects
