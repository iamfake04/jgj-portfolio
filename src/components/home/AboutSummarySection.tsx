// src/components/home/AboutSummarySection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutSummarySection = () => {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-gray-800 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative w-full max-w-md mx-auto md:max-w-none h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* Placeholder for professional photo */}
            <Image
              src="/placeholder-profile.jpg" // Replace with your actual image path in /public
              alt="JGJ - Web Developer & Designer"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
              A Bit About Me
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm JGJ, a dedicated Web Developer and Designer passionate about creating beautiful, functional, and user-centric digital experiences. With a keen eye for detail and a love for clean, efficient code, I transform ideas into engaging online realities.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My journey in web development is driven by a constant curiosity and a desire to learn and implement the latest technologies to build innovative solutions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors duration-300 group"
            >
              Learn More About Me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSummarySection;
