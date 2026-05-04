import React from "react";
import ParticlesBackground from "../Animation/ParticlesBackground";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black pt-24 pb-10"
    >
      {/* Particles BG */}
      <div className="absolute inset-0">
        <ParticlesBackground
          particleColors={["#22d3ee", "#a855f7", "#38bdf8"]}
          particleCount={600}
          particleSpread={12}
          speed={0.25}
          particleBaseSize={120}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
            bg-clip-text text-transparent">
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hello?
            Let’s build something amazing together.
          </motion.p>
        </div>

        {/* Contact Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="flex justify-center mb-20">
          <div className="w-full max-w-xl p-8 rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-cyan-400/30
            shadow-[0_0_40px_rgba(34,211,238,0.25)]
            hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]
            transition">

            <motion.form
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/40
                border border-gray-600 text-white
                focus:border-cyan-400 outline-none"
              />

              <motion.input variants={fadeUp}
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black/40
                border border-gray-600 text-white
                focus:border-cyan-400 outline-none"
              />

              <motion.textarea variants={fadeUp}
                rows="4"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-black/40
                border border-gray-600 text-white
                focus:border-cyan-400 outline-none resize-none"
              />

              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-xl font-semibold text-black
                bg-gradient-to-r from-cyan-400 to-purple-500
                hover:scale-95 transition">
                Send Message 🚀
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex justify-center items-center animate-bounce text-cyan-400 text-3xl cursor-pointer"
          onClick={() =>
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <i className="fa-solid fa-arrow-up"></i>
        </motion.div>


        {/* Social Icons */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-8 text-3xl text-gray-400 mb-16">
          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.3, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://github.com/rahulparmar09" target="_blank" className="hover:text-white hover:scale-125 transition">
            <i className="devicon-github-original"></i>
          </motion.a>

          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.3, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://www.linkedin.com/in/rahul-parmar0912/" target="_blank" className="hover:text-cyan-400 hover:scale-125 transition">
            <i className="fa-brands fa-linkedin"></i>
          </motion.a>

          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.3, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://instagram.com" target="_blank" className="hover:text-pink-500 hover:scale-125 transition">
            <i className="fa-brands fa-instagram"></i>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <p className="font-medium text-cyan-500">Rahul Parmar</p>
          <p>© {new Date().getFullYear()} Rahul Parmar. All rights reserved.</p>
        </footer>

      </div>
    </section >
  );
};

export default Contact;
