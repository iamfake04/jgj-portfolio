// src/components/home/FeaturedProjectsSection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';

// Sample project data - replace with your actual project details
const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with modern UI/UX, payment integration, and admin dashboard.',
    imageUrl: '/project-ecommerce.jpg', // Replace with your image in /public
    tags: ['Next.js', 'TailwindCSS', 'Stripe', 'Firebase'],
    liveLink: '#', // Replace with actual link
    codeLink: '#', // Replace with actual link
  },
  {
    id: 2,
    title: 'Portfolio Website API',
    description: 'A robust REST API to power a dynamic portfolio, built with Node.js and Express.',
    imageUrl: '/project-api.jpg', // Replace with your image in /public
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    liveLink: null,
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Interactive Data Dashboard',
    description: 'A responsive dashboard for visualizing complex datasets with interactive charts and filters.',
    imageUrl: '/project-dashboard.jpg', // Replace with your image in /public
    tags: ['React', 'D3.js', 'Python', 'Flask'],
    liveLink: '#',
    codeLink: '#',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // Stagger animation
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeaturedProjectsSection = () => {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here's a glimpse of some projects I've passionately worked on. Check out my projects page for a more comprehensive list.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl flex flex-col group transition-all duration-300 hover:shadow-emerald-500/30 hover:scale-[1.02]"
              custom={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-emerald-500 bg-opacity-20 text-emerald-300 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex space-x-3 pt-2 border-t border-gray-700/50">
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors duration-300">
                      View Live
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  )}
                  {project.codeLink && (
                    <Link href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300">
                      View Code
                      <Briefcase className="ml-1.5 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: featuredProjects.length * 0.2 + 0.2, ease: "easeOut" }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-lg shadow-md text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Explore All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjectsSection;
