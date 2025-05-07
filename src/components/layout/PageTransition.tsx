// src/components/layout/PageTransition.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Hook to get the current path
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Start slightly down
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20, // Exit slightly up
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate', // Smoother easing
  duration: 0.5, // Adjust duration as needed
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname(); // Get current route to use as key for AnimatePresence

  return (
    <AnimatePresence mode="wait"> {/* 'wait' ensures one page animates out before the next animates in */}
      <motion.div
        key={pathname} // Unique key for each page route
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
