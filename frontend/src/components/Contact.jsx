import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            // Assuming backend is running on port 5000 during dev
            // Replace with your actual deployed backend URL later
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <div name="contact" className="w-full min-h-screen bg-white dark:bg-slate-900 px-4 py-20 text-slate-800 dark:text-slate-200 transition-colors duration-300">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-primary dark:border-blue-400 text-slate-900 dark:text-white pb-2 relative">
                        Contact Me
                        <motion.span
                            className="absolute -bottom-[2px] left-0 w-0 h-[4px] bg-primary-dark dark:bg-blue-600"
                            initial={{ width: '0%' }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        />
                    </p>
                    <p className="py-6 text-slate-600 dark:text-slate-400 mt-2 text-lg">
                        Submit the form below to get in touch with me
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-10 justify-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-6"
                    >
                        <div className="glass-card p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Location</h3>
                            <p className="text-slate-700 dark:text-slate-300">Kurnool, Andhra Pradesh, India</p>
                        </div>

                        <div className="glass-card p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Email</h3>
                            <a href="mailto:velurunavadeepreddy@gmail.com" className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                                velurunavadeepreddy@gmail.com
                            </a>
                        </div>

                        <div className="glass-card p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Phone</h3>
                            <p className="text-slate-700 dark:text-slate-300">9346786489</p>
                        </div>

                        <div className="glass-card p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Social Profiles</h3>
                            <div className="flex space-x-4 mt-2">
                                <a href="https://github.com/Navadeep-2636" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/veluru-navadeep-reddy-396220291/" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 flex justify-center items-center"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col w-full glass-card p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send a Message</h3>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="p-3 bg-transparent border-2 rounded-md border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:border-primary dark:focus:border-blue-500 transition-colors"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="my-4 p-3 bg-transparent border-2 rounded-md border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:border-primary dark:focus:border-blue-500 transition-colors"
                            />

                            <textarea
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message..."
                                required
                                className="p-3 bg-transparent border-2 rounded-md border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white focus:outline-none focus:border-primary dark:focus:border-blue-500 transition-colors resize-none"
                            ></textarea>

                            <button className="text-white bg-gradient-to-r from-primary to-indigo-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 shadow-md font-medium text-lg w-full justify-center">
                                Let's Talk
                            </button>

                            {status && (
                                <p className={`text-center mt-2 ${status.includes('success') ? 'text-green-600 dark:text-green-400' : 'text-slate-600 dark:text-slate-400'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
