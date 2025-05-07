// src/components/layout/Navbar.tsx
'use client'; // Add this directive for client-side interactivity (useState, Framer Motion)

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu on path change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // isOpen was removed from deps to prevent re-render loops with some menu logic, ensure this is intended.

  const navLinkClasses = (path: string) =>
    `block py-2 px-3 rounded md:p-0 transition-colors duration-300 ${
      pathname === path
        ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-500 dark:md:text-blue-400'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:md:hover:bg-transparent dark:hover:text-blue-400'
    }`;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-40 w-full 
                 bg-white/70 dark:bg-slate-900/70 
                 backdrop-blur-lg 
                 shadow-lg dark:shadow-slate-900/40 
                 border-b border-white/30 dark:border-slate-700/50 
                 transition-all duration-300 ease-in-out"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">JGJ</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden mt-3 pt-3 pb-2 border-t border-gray-700"
          >
            <div className="flex flex-col space-y-3 px-2">
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
