import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const techs = [
        {
            id: 1,
            category: 'Programming Languages',
            skills: ['Java', 'C', 'JavaScript', 'SQL'],
            style: 'shadow-orange-500/50 dark:shadow-orange-400/30'
        },
        {
            id: 2,
            category: 'Core Concepts',
            skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
            style: 'shadow-blue-500/50 dark:shadow-blue-400/30'
        },
        {
            id: 3,
            category: 'Web Technologies',
            skills: ['HTML', 'CSS', 'JS', 'Supabase'],
            style: 'shadow-yellow-500/50 dark:shadow-yellow-400/30'
        },
        {
            id: 4,
            category: 'Tools',
            skills: ['Git', 'GitHub', 'VS Code'],
            style: 'shadow-pink-500/50 dark:shadow-pink-400/30'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div
            name="skills"
            className="w-full bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-slate-200 py-20 transition-colors duration-300 relative z-10"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white relative z-20">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-primary dark:border-blue-400 p-2 relative text-slate-900 dark:text-white">
                        Skills
                        <motion.span
                            className="absolute -bottom-[2px] left-0 w-0 h-[4px] bg-primary-dark dark:bg-blue-600"
                            initial={{ width: '0%' }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        />
                    </p>
                    <p className="py-6 text-slate-600 dark:text-slate-400 mt-2 text-lg">
                        These are the technologies I've worked with and mastered
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-center py-8"
                >
                    {techs.map(({ id, category, skills, style }) => (
                        <motion.div
                            key={id}
                            variants={itemVariants}
                            className={`shadow-md hover:scale-105 duration-500 py-6 rounded-2xl glass-card transition-all ${style}`}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-primary-dark dark:text-blue-300">{category}</h3>
                            <div className="flex flex-wrap justify-center gap-3 px-4">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-blue-500 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
