'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories, Project } from './projectData';
import GlassCard from '../common/GlassCard'; // Import GlassCard
import GlassModal from '../common/GlassModal'; // Import GlassModal

// Placeholder for an actual Image component if you use next/image or similar
const ImagePlaceholder: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => (
  <div className={`bg-gray-700/50 animate-pulse ${className}`} aria-label={alt}></div> // Adjusted placeholder bg
);

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    // Use GlassCard for the project card
    <GlassCard onClick={onClick} hoverEffect className="h-full flex flex-col">
      <ImagePlaceholder src={project.previewImage} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-3 flex-grow">{project.briefDescription}</p>
        <div className="mb-3">
          <h4 className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-sky-500/30 text-sky-200 px-2 py-1 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-auto pt-3">
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium"
              onClick={(e) => e.stopPropagation()} 
            >
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors text-sm font-medium"
              onClick={(e) => e.stopPropagation()} 
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

interface ProjectModalContentProps {
  project: Project;
}

// Separate component for Modal content to be passed as children to GlassModal
const ProjectModalContent: React.FC<ProjectModalContentProps> = ({ project }) => {
  return (
    <>
      <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {project.images.map((img, index) => (
          <ImagePlaceholder key={index} src={img} alt={`${project.title} image ${index + 1}`} className="w-full h-32 sm:h-40 object-cover rounded-md border border-white/10" />
        ))}
      </div>

      <div className="mb-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-100">Full Description:</h3>
        <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{project.detailedDescription}</p>
      </div>

      <div className="mb-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-100">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-green-500/30 text-green-200 px-3 py-1 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-100">Challenges:</h3>
        <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{project.challenges}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-100">Solutions:</h3>
        <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{project.solutions}</p>
      </div>
      
      {(project.liveDemoLink || project.githubLink) && (
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-white/10">
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-sky-600/70 text-white rounded-md hover:bg-sky-500/70 transition-colors duration-300 text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gray-600/70 text-white rounded-md hover:bg-gray-500/70 transition-colors duration-300 text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </>
  );
};

const ProjectsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-10 sm:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-sky-300 dark:to-blue-400"
      >
        My Projects
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
      >
        {projectCategories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-300 ease-in-out 
                        border border-transparent
                        ${selectedCategory === category 
                          ? 'bg-sky-500/80 dark:bg-sky-600/80 text-white shadow-lg' 
                          : 'bg-white/20 dark:bg-slate-700/30 text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-slate-700/50 hover:border-sky-500/50'}`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ProjectCard project={project} onClick={() => openModal(project)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedProject && (
        <GlassModal 
          isOpen={!!selectedProject} 
          onClose={closeModal} 
          title={selectedProject.title}
          className="max-w-2xl" // Example of customizing modal width
        >
          <ProjectModalContent project={selectedProject} />
        </GlassModal>
      )}
    </div>
  );
};

export default ProjectsGallery;
