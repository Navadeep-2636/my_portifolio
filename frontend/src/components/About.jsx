import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div
            name="about"
            className="w-full min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 py-20 flex flex-col justify-center items-center relative transition-colors duration-300"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="pb-8"
                >
                    <p className="text-4xl font-bold inline border-b-4 border-primary-dark dark:border-blue-400 text-slate-900 dark:text-white pb-2 relative">
                        About Me
                        <motion.span
                            className="absolute -bottom-[2px] left-0 w-0 h-[4px] bg-primary dark:bg-blue-500"
                            initial={{ width: '0%' }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                        />
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-card p-8 rounded-2xl shadow-xl mt-8"
                >
                    <p className="text-lg leading-relaxed sm:text-xl text-slate-700 dark:text-slate-300">
                        I am a 3rd-year BTech student in Computer Science and Engineering at G. Pulla Reddy Engineering College, passionate about software development and problem solving. I am strengthening my fundamentals in Java and Data Structures & Algorithms and regularly practice coding to improve my logical thinking.
                    </p>
                    <br />
                    <p className="text-lg leading-relaxed sm:text-xl text-slate-700 dark:text-slate-300 mb-6">
                        Currently, I am building full-stack MERN applications and exploring AI chatbot systems. My goal is to join a product-based company where I can learn from experienced engineers and build impactful solutions.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mt-8">
                        <div className="bg-light-bg dark:bg-dark-bg p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-light dark:hover:border-blue-500 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Education</h3>
                            <p className="text-slate-700 dark:text-slate-300 font-medium">BTech in Computer Science & Engineering</p>
                            <p className="text-slate-600 dark:text-slate-400 mt-1">G. Pulla Reddy Engineering College</p>
                            <p className="text-slate-500 text-sm mt-2 flex items-center">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Expected Graduation: 2027
                            </p>
                        </div>

                        <div className="bg-light-bg dark:bg-dark-bg p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-light dark:hover:border-blue-500 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Career Goal</h3>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                "To become a skilled software engineer in a top product-based company and build efficient, real-world applications using Java, DSA, and the MERN stack."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
