// src/components/about/TimelineSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Star } from 'lucide-react'; // Icons for timeline items

const timelineEvents = [
  {
    id: 1,
    date: '2023 - Present',
    title: 'Lead Web Developer',
    institution: 'Tech Solutions Inc.',
    description: 'Leading a team of developers in creating innovative web applications. Responsible for project architecture, code reviews, and mentoring junior developers. Successfully launched three major client projects.',
    icon: Briefcase,
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 2,
    date: '2021 - 2023',
    title: 'Full Stack Developer',
    institution: 'Creative Web Agency',
    description: 'Developed and maintained responsive websites and e-commerce solutions for various clients. Worked extensively with React, Node.js, and cloud platforms.',
    icon: Briefcase,
    iconColor: 'text-sky-400',
    borderColor: 'border-sky-500/30',
  },
  {
    id: 3,
    date: '2017 - 2021',
    title: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    description: 'Graduated with honors. Specialized in software engineering and web technologies. Active member of the coding club and participated in several hackathons.',
    icon: GraduationCap,
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 4,
    date: 'Ongoing',
    title: 'Continuous Learning & Certifications',
    institution: 'Online Platforms & Workshops',
    description: 'Actively pursuing certifications in advanced JavaScript, UI/UX design principles, and cloud computing to stay updated with industry trends.',
    icon: Star,
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
  },
  // Add more events as needed, ensure IDs are unique
];

const TimelineItem = ({ event, isLast }: { event: typeof timelineEvents[0], isLast: boolean }) => {
  const IconComponent = event.icon;
  return (
    <motion.div 
      className="relative pl-12 pb-10 group"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className={`absolute left-[22px] top-5 h-full w-0.5 bg-gray-700 group-hover:bg-gradient-to-b ${event.iconColor.replace('text-', 'from-')} to-gray-700 transition-all duration-300`}></div>
      )}
      {/* Icon */}
      <div className={`absolute left-0 top-0 flex items-center justify-center w-11 h-11 rounded-full bg-gray-800 border-2 ${event.borderColor} shadow-md`}>
        <IconComponent className={`w-5 h-5 ${event.iconColor}`} />
      </div>
      
      <div className="ml-4">
        <p className={`text-sm font-semibold ${event.iconColor} mb-1`}>{event.date}</p>
        <h4 className="text-xl font-bold text-white mb-1.5">{event.title}</h4>
        <p className="text-md font-medium text-gray-400 mb-2">{event.institution}</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-gray-800 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
            Career & Education Highlights
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A timeline of my key milestones, experiences, and educational achievements that have shaped my professional journey.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.id} event={event} isLast={index === timelineEvents.length - 1} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TimelineSection;
