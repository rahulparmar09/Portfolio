import React from "react";
import ParticlesBackground from "../Animation/ParticlesBackground";
import { motion } from "framer-motion";


const skills = [
  { name: "HTML5", icon: "devicon-html5-plain", color: "text-orange-500" },
  { name: "CSS3", icon: "devicon-css3-plain", color: "text-blue-500" },
  { name: "JavaScript", icon: "devicon-javascript-plain", color: "text-yellow-400" },
  { name: "React", icon: "devicon-react-original", color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original", color: "text-cyan-300" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "text-purple-500" },
  { name: "Node.js", icon: "devicon-nodejs-plain", color: "text-green-500" },
  { name: "Express.js", icon: "devicon-express-original", color: "text-gray-300" },
  { name: "MongoDB", icon: "devicon-mongodb-plain", color: "text-green-400" },
  { name: "Git", icon: "devicon-git-plain", color: "text-red-500" },
  { name: "GitHub", icon: "devicon-github-original", color: "text-white" },
  { name: "VS Code", icon: "devicon-vscode-plain", color: "text-blue-400" },
  { name: "Netlify", icon: "devicon-netlify-plain", color: "text-cyan-400" },
  { name: "Python", icon: "devicon-python-plain", color: "text-yellow-400" },
];

const Skills = () => {
  //Animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen relative bg-[#000000] flex items-center pb-22 md:pb-28"
    >
      {/* Galaxy BG */}
      <div className="absolute inset-0">
        <ParticlesBackground
          particleColors={["#38bdf8", "#60a5fa", "#22d3ee"]}
          particleCount={800}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={130}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6
                       bg-gradient-to-r from-cyan-400 to-blue-500
                       bg-clip-text text-transparent">
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
          Technologies and tools I use to build fast, modern and scalable web
          applications with clean UI and smooth user experience.
        </motion.p>


        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-8 place-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                boxShadow: "0px 0px 30px rgba(34,211,238,0.6)",
              }}
              transition={{ type: "spring", stiffness: 260 }}

              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur
                 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                 hover:scale-110 transition duration-300"
            >
              <motion.i
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`${skill.icon} ${skill.color} text-5xl`}>
              </motion.i>
              <p className="text-gray-300 text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center animate-bounce text-cyan-400 text-3xl cursor-pointer"
          onClick={() =>
            document.getElementById("education")?.scrollIntoView({
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

export default Skills;
