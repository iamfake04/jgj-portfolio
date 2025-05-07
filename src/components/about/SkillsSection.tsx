// src/components/about/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Code, Database, LayoutDashboard, Palette, Server } from 'lucide-react'; // Example icons

const skillsData = [
  {
    category: 'Frontend Development',
    icon: Code,
    color: 'text-sky-400',
    fillColor: 'bg-sky-300', // Added explicit fill color
    bgColor: 'bg-sky-500/10',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / SASS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'React / Next.js', level: 93 },
      { name: 'Vue.js', level: 75 }, // Example of another framework
      { name: 'TailwindCSS', level: 95 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    category: 'Backend Development',
    icon: Server,
    color: 'text-emerald-400',
    fillColor: 'bg-emerald-300', // Added explicit fill color
    bgColor: 'bg-emerald-500/10',
    skills: [
      { name: 'Node.js / Express.js', level: 85 },
      { name: 'Python (Flask/Django)', level: 78 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
      { name: 'Database Management (SQL/NoSQL)', level: 82 },
    ],
  },
  {
    category: 'Design & UI/UX',
    icon: Palette,
    color: 'text-purple-400',
    fillColor: 'bg-purple-300', // Added explicit fill color
    bgColor: 'bg-purple-500/10',
    skills: [
      { name: 'UI Design Principles', level: 88 },
      { name: 'UX Research & Strategy', level: 80 },
      { name: 'Wireframing & Prototyping', level: 85 },
      { name: 'Figma / Adobe XD', level: 90 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    category: 'Tools & Other Technologies',
    icon: LayoutDashboard,
    color: 'text-amber-400',
    fillColor: 'bg-amber-300', // Added explicit fill color
    bgColor: 'bg-amber-500/10',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD Pipelines', level: 75 },
      { name: 'Agile Methodologies', level: 85 },
      { name: 'Problem Solving', level: 90 },
    ],
  },
];

// Updated SkillBar props to include fillColor
const SkillBar = ({ name, level, color, fillColor }: { name: string; level: number; color: string; fillColor: string }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className={`text-sm font-medium ${color}`}>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-600">
        <motion.div
          // Use the explicit fillColor prop for the background class
          className={`h-2.5 rounded-full ${fillColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        ></motion.div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
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
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            My Technical Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my proficiency across various technologies and tools essential for modern web development and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              className={`p-6 md:p-8 rounded-xl shadow-2xl ${category.bgColor} border border-gray-700/50 hover:shadow-lg hover:shadow-current transition-shadow duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="flex items-center mb-6">
                <category.icon className={`w-10 h-10 mr-4 ${category.color}`} />
                <h3 className={`text-2xl font-semibold ${category.color}`}>{category.category}</h3>
              </div>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    color={category.color} 
                    fillColor={category.fillColor} // Pass fillColor to SkillBar
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
