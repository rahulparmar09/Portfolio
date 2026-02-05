import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../Animation/ParticlesBackground";

const itemAnim = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Education = () => {
    return (
        <section
            id="education"
            className="w-full min-h-screen relative bg-black py-24 overflow-x-hidden"
        >
            {/* Galaxy BG */}
            <div className="absolute inset-0">
                <ParticlesBackground
                    particleColors={["#FFD166", "#F4C430"]}
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

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 text-center mb-24"
            >
                <h2 className="text-4xl md:text-5xl font-bold
          bg-gradient-to-r from-cyan-400 to-blue-500
          bg-clip-text text-transparent">
                    Education
                </h2>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">

                {/* Center Line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 top-0 h-full w-0.5
          bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500
          -translate-x-1/2 hidden md:block"
                />

                <div className="space-y-20">

                    {/* Item 1 */}
                    <motion.div
                        variants={itemAnim}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:flex md:justify-start relative"
                    >
                        <div className="md:w-1/2 md:pr-10">
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur
                border border-cyan-400/30
                hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                transition">
                                <h3 className="text-xl font-semibold text-white">
                                    Bachelor of Engineering (CE)
                                </h3>
                                <p className="text-cyan-400 text-sm mt-1">
                                    LDRP Institute of Technology and Research • 2022 – 2026
                                </p>
                                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                    I am currently pursuing a Bachelor of Computer (BE) at LDRP
                                    Institute of Technology and Research. This program allows me
                                    to develop a strong foundation in computer science and
                                    emerging technologies.
                                </p>
                            </div>
                        </div>

                        <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="absolute left-1/2 top-6 h-4 w-4 bg-cyan-400
              rounded-full -translate-x-1/2 hidden md:block"
                        />
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        variants={itemAnim}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:flex md:justify-end relative"
                    >
                        <div className="md:w-1/2 md:pl-10">
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur
                              border border-blue-400/30
                              hover:shadow-[0_0_25px_rgba(96,165,250,0.4)]
                              transition">
                                <h3 className="text-xl font-semibold text-white">
                                    Higher Secondary (12th Sci)
                                </h3>
                                <p className="text-blue-400 text-sm mt-1">
                                    Vedant International School • 2021 – 2022
                                </p>
                                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                    I completed my Higher Secondary Certificate (HSC) in 2023 from Vedant International School. During my time there, I gained valuable knowledge and developed essential skills that have prepared me for future academic and professional challenges.
                                </p>
                            </div>
                        </div>

                        <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="absolute left-1/2 top-6 h-4 w-4 bg-blue-400
              rounded-full -translate-x-1/2 hidden md:block"
                        />
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div
                        variants={itemAnim}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:flex md:justify-start relative"
                    >
                        <div className="md:w-1/2 md:pr-10">
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur
                border border-purple-400/30
                hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
                transition">
                                <h3 className="text-xl font-semibold text-white">
                                    Secondary School (10th)
                                </h3>
                                <p className="text-purple-400 text-sm mt-1">
                                    Vedant International School • 2019 – 2020
                                </p>
                                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                    I completed my Secondary School Certificate (SSC) in 2021 from Vedant International School. My time at the school provided me with a solid educational foundation, helping me develop both academically and personally. The school’s supportive environment and dedicated teachers played a crucial role in shaping my learning experience.
                                </p>
                            </div>
                        </div>

                        <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="absolute left-1/2 top-6 h-4 w-4 bg-purple-400
              rounded-full -translate-x-1/2 hidden md:block"
                        />
                    </motion.div>

                </div>
            </div>

            {/* Scroll Arrow */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16 flex justify-center animate-bounce text-cyan-400 text-3xl cursor-pointer"
                onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            >
                <i className="fa-solid fa-arrow-down"></i>
            </motion.div>
        </section>
    );
};

export default Education;
