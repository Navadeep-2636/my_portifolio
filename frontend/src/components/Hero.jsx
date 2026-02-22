import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-light-bg dark:bg-dark-bg flex flex-col justify-center items-center overflow-hidden relative transition-colors duration-300"
        >
            {/* Animated Background Particles / Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-light/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row z-10 w-full relative">
                <div className="flex flex-col justify-center h-full items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl font-bold text-slate-800 dark:text-white"
                    >
                        Hi, I'm <span className="text-gradient">Veluru Navadeep Reddy</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl sm:text-4xl font-semibold text-slate-600 dark:text-slate-300 mt-4 h-12"
                    >
                        I am a{' '}
                        <span className="text-primary-dark dark:text-blue-400">
                            <Typewriter
                                words={['Java & DSA Enthusiast', 'MERN Stack Developer', 'Problem Solver']}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-slate-600 dark:text-slate-400 py-6 max-w-2xl leading-relaxed text-lg"
                    >
                        I am a 3rd-year BTech student in Computer Science passionate about problem solving and software development, with strong foundations in Java and Data Structures & Algorithms. Currently building full-stack applications using the MERN stack.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-primary to-indigo-600 cursor-pointer shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 font-medium text-lg"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
