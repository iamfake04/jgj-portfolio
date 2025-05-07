'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'; // Example icons

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, icon, label, className }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-2xl">{icon}</span>
    <span className="font-medium">{label}</span>
  </motion.a>
);

const AlternativeContactMethods: React.FC = () => {
  const email = "your.email@example.com"; // Replace with your actual email

  const socialLinks = [
    {
      href: "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn URL
      icon: <FiLinkedin />,
      label: "LinkedIn",
      className: "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/70",
    },
    {
      href: "https://github.com/yourusername", // Replace with your GitHub URL
      icon: <FiGithub />,
      label: "GitHub",
      className: "bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-400",
    },
    {
      href: "https://twitter.com/yourusername", // Replace with your Twitter URL
      icon: <FiTwitter />,
      label: "Twitter / X",
      className: "bg-sky-400 dark:bg-sky-600 text-white hover:bg-sky-500 dark:hover:bg-sky-500",
    },
    {
      href: "https://instagram.com/yourusername", // Replace with your Instagram URL
      icon: <FiInstagram />,
      label: "Instagram",
      className: "bg-pink-500 dark:bg-pink-700 text-white hover:bg-pink-600 dark:hover:bg-pink-600",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.4, staggerChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div 
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-lg p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl mt-10 lg:mt-0"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Other Ways to Connect</h2>
      
      <motion.div variants={itemVariants} className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Direct Email</h3>
        <ContactLink
          href={`mailto:${email}`}
          icon={<FiMail />}
          label={email}
          className="bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-800/70 w-full justify-center sm:justify-start"
        />
      </motion.div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Social & Professional</h3>
        <div className="space-y-4">
          {socialLinks.map(link => (
            <motion.div key={link.label} variants={itemVariants}>
              <ContactLink
                href={link.href}
                icon={link.icon}
                label={link.label}
                className={link.className}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AlternativeContactMethods;
