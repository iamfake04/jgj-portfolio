// src/components/home/HeroSection.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Using lucide-react for icons, will install if not present

const HeroSection = () => {
  const name = "JGJ"; // Your Name
  const title = "Web Developer & Designer";
  const introTexts = [
    "Crafting modern web experiences.",
    "Passionate about clean code.",
    "Turning ideas into reality.",
    "Focused on user-centric design."
  ];

  return (
    <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle background shapes for glassmorphism feel */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-2xl animate-pulse-slow"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-sky-500 rounded-full opacity-20 blur-2xl animate-pulse-slower"
        animate={{ scale: [1, 0.9, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {name}
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8 font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {title}
        </motion.p>

        <motion.div
          className="relative text-lg sm:text-xl text-gray-400 mb-12 h-16" // Changed h-12 sm:h-auto to h-16 for consistent height
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {introTexts.map((text, index) => (
            <motion.span
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 w-full px-2" // Ensure text is centered
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [10, 0, 0, -10],
                transitionEnd: {
                  display: index === introTexts.length -1 ? "block" : "none", // Keep last item visible if needed or adjust logic
                }
              }}
              transition={{
                duration: 4, // Duration for one text to show and hide
                delay: index * 4 + 0.5, // Stagger start times
                repeat: Infinity,
                repeatDelay: (introTexts.length -1) * 4, // Full cycle delay
                ease: "easeInOut",
              }}
            >
              {text}
            </motion.span>
          ))}
           {/* Fallback static text if animations are complex or for no-JS */}
           <span className="opacity-0 md:hidden">{introTexts[0]}</span>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
