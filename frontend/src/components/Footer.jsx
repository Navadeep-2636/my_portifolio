import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-light-bg dark:bg-dark-bg py-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4">
                <p className="text-slate-600 dark:text-slate-400 text-center font-medium">
                    © {new Date().getFullYear()} Veluru Navadeep Reddy. All Rights Reserved.
                </p>
                <div className="flex space-x-4 mt-4 text-sm text-slate-500 dark:text-slate-500">
                    <p>Built with React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
