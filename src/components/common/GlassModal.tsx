import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const GlassModal: React.FC<GlassModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className = '',
}) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30, duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 10,
      transition: { duration: 0.2 }
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose} // Close on backdrop click
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <motion.div
            className={`
              relative 
              bg-white/60 dark:bg-slate-800/60 
              backdrop-blur-xl 
              rounded-xl 
              border border-white/30 dark:border-slate-700/40 
              shadow-2xl dark:shadow-slate-900/50 
              max-w-lg w-full 
              overflow-hidden
              ${className}
            `}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {title && (
              <div className="px-6 py-4 border-b border-white/20 dark:border-slate-700/30">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              </div>
            )}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {children}
            </div>
            <div className="px-6 py-3 border-t border-white/20 dark:border-slate-700/30 flex justify-end">
              <button 
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-slate-700/50 hover:bg-gray-300/70 dark:hover:bg-slate-600/70 rounded-md transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlassModal;
