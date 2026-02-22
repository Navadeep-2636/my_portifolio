import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div
            name="experience"
            className="w-full bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-slate-200 py-20 transition-colors duration-300 relative"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-primary dark:border-blue-400 p-2 relative text-slate-900 dark:text-white">
                        Experience & Achievements
                        <motion.span
                            className="absolute -bottom-[2px] left-0 w-0 h-[4px] bg-primary-dark dark:bg-blue-600"
                            initial={{ width: '0%' }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        />
                    </p>
                    <p className="py-6 text-slate-600 dark:text-slate-400 mt-2 text-lg">
                        My professional journey and milestones
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-4">
                    {/* Experience Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-6 md:p-8 rounded-2xl relative border-l-4 border-l-primary dark:border-l-blue-500"
                    >
                        <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-primary dark:bg-blue-500 animate-pulse"></div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Experience</h3>
                        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h4 className="text-xl font-semibold text-primary dark:text-blue-400">Campus Ambassador</h4>
                            <p className="text-slate-600 dark:text-slate-400 font-medium my-1">Smart Interviews</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                                Represented Smart Interviews on campus, facilitating communication between students and the organization. Promoted coding culture and organized events.
                            </p>
                        </div>
                    </motion.div>

                    {/* Achievements Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-6 md:p-8 rounded-2xl relative border-l-4 border-l-yellow-500 dark:border-l-yellow-400"
                    >
                        <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-yellow-500 dark:bg-yellow-400 animate-pulse"></div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Achievements</h3>
                        <ul className="mt-6 space-y-4">
                            <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 flex items-start">
                                <span className="text-2xl mr-4">🏆</span>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">LeetCode Rating: 1700+</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Demonstrating strong problem-solving and Data Structures & Algorithms skills.</p>
                                </div>
                            </li>
                            <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 flex items-start">
                                <span className="text-2xl mr-4">💻</span>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">330+ Problems Solved</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Extensive practice across Arrays, Dynamic Programming, Recursion, and Bit Manipulation.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
