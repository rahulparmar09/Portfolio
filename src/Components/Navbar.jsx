import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const sections = ["home", "about", "skills", "education", "projects", "contact"];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (!el) return;

                const rect = el.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActive(section);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = (id) =>
        active === id
            ? "text-cyan-400"
            : "text-white hover:text-cyan-400 transition";

    return (
        <>
            {/* Desktop Center Nav */}
            {/* <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"> */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
            >

                {/* <nav className="flex gap-8 px-8 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white font-medium shadow-lg"> */}
                <motion.nav
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: { staggerChildren: 0.12 }
                        }
                    }}
                    className="flex gap-8 px-8 py-3 rounded-full backdrop-blur-md
                     bg-white/10 border border-white/20 text-white font-medium shadow-lg"
                >

                    {/* {sections.map((id) => (
                        <a key={id} href={`#${id}`} className={linkClass(id)}>
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    ))} */}
                    {sections.map((id) => (
                        <motion.a
                            key={id}
                            href={`#${id}`}
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                show: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ scale: 1.05 }}
                            className={linkClass(id)}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </motion.a>
                    ))}

                </motion.nav>
            </motion.header>

            {/* Right Icons Desktop */}
            <div className="fixed top-6 right-6 z-50 hidden md:flex cursor-pointer gap-4 text-white text-2xl">
                <motion.a
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://github.com/rahulparmar09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition"
                >
                    <i className="fa-brands fa-github"></i>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://www.linkedin.com/in/rahul-parmar0912/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </motion.a>

                {/* Instagram */}
                <motion.a
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://www.instagram.com/yourusername/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                >
                    <i className="fa-brands fa-instagram"></i>
                </motion.a>
            </div>

            {/* Mobile Top Bar */}
            <div className="fixed top-4 left-4 right-4 z-50 md:hidden flex justify-between items-center px-4 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20">
                <p className="text-white font-semibold capitalize">{active}</p>
                <button onClick={() => setOpen(!open)} className="text-white text-2xl">
                    <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed top-20 left-4 right-4 z-50 md:hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-white p-6 space-y-4">
                        {sections.map((id) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={() => setOpen(false)}
                                className={`block capitalize ${active === id ? "text-cyan-400" : "hover:text-cyan-400"
                                    }`}
                            >
                                {id}
                            </a>
                        ))}

                        {/* Mobile icon */}

                        <div className="flex gap-6 pt-4 text-2xl cursor-pointer">
                            <a
                                href="https://github.com/rahulparmar09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400 transition"
                            >
                                <i className="fa-brands fa-github"></i>

                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/yourusername/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition"
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/yourusername/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 transition"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </motion.div>

                )}
            </AnimatePresence>

        </>
    );
};

export default Navbar;
