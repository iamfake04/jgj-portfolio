// src/components/about/ProfessionalBioSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ProfessionalBioSection = () => {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-gray-800 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div 
            className="lg:col-span-1 relative w-full max-w-sm mx-auto lg:max-w-none h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-2xl group mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/placeholder-profile-about.jpg" // Replace with your actual image path in /public
              alt="JGJ - Professional Portrait"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-3xl font-bold text-white">JGJ</h3>
              <p className="text-sky-300">Web Developer & Designer</p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
              My Professional Journey
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Hello! I'm JGJ, a passionate and results-driven Web Developer and Designer with a strong foundation in creating intuitive, dynamic, and visually appealing web experiences. My journey into the world of technology began with a fascination for how digital interfaces could seamlessly connect people with information and services.
              </p>
              <p>
                Over the years, I've honed my skills in both front-end and back-end development, allowing me to build comprehensive solutions from the ground up. I thrive on challenges and am constantly exploring new technologies and methodologies to stay at the forefront of web innovation. My approach is user-centric, focusing on delivering not just functional products, but also delightful user experiences.
              </p>
              
              <h3 className="text-2xl font-semibold text-sky-300 pt-4">Education & Credentials</h3>
              <p>
                I hold a [Your Degree, e.g., Bachelor of Science in Computer Science] from [Your University Name], where I developed a strong theoretical understanding and practical skills in software development. Additionally, I've pursued various certifications and online courses in areas like [mention specific areas, e.g., Advanced JavaScript, UI/UX Design, Cloud Computing] to continuously expand my expertise.
              </p>

              <h3 className="text-2xl font-semibold text-sky-300 pt-4">Experience Highlights</h3>
              <p>
                Throughout my career, I've had the opportunity to work on diverse projects, ranging from [mention types of projects, e.g., e-commerce platforms and corporate websites to custom web applications and interactive dashboards]. Each project has been a learning experience, contributing to my growth as a developer and designer. I am adept at collaborating with cross-functional teams and translating complex requirements into elegant and efficient solutions.
              </p>
              <p>
                I believe in the power of good design and clean code to make a tangible impact. I'm always excited to take on new challenges and contribute to projects that push the boundaries of what's possible on the web.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProfessionalBioSection;
