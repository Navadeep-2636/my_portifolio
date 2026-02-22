import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'experience' },
        { id: 5, link: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'
                }`}
        >
            <div className="flex justify-between items-center w-full h-full px-4 sm:px-8 max-w-7xl mx-auto">
                <div>
                    <h1 className="text-3xl font-bold font-sans cursor-pointer text-primary-dark dark:text-blue-400">
                        Navadeep
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-2 cursor-pointer capitalize font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Link to={link} smooth duration={500} offset={-80}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? (
                            <FaSun className="text-yellow-400 text-xl" />
                        ) : (
                            <FaMoon className="text-slate-700 text-xl" />
                        )}
                    </button>
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        {theme === 'dark' ? (
                            <FaSun className="text-yellow-400 text-xl" />
                        ) : (
                            <FaMoon className="text-slate-700 text-xl" />
                        )}
                    </button>
                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer z-10 text-slate-600 dark:text-slate-300"
                    >
                        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                    </div>
                </div>

                {/* Mobile Menu */}
                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 pt-20">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-2xl text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400"
                            >
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth
                                    duration={500}
                                    offset={-80}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
