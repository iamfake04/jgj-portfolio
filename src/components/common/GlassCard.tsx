import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = false,
}) => {
  return (
    <motion.div
      className={`
        bg-white/10 dark:bg-slate-800/20 
        backdrop-blur-lg 
        rounded-xl 
        border border-white/20 dark:border-slate-700/30 
        shadow-lg dark:shadow-slate-900/30 
        overflow-hidden 
        transition-all duration-300 ease-in-out
        ${hoverEffect ? 'hover:shadow-xl hover:border-white/30 dark:hover:border-slate-600/40 hover:scale-[1.02]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      whileTap={onClick && hoverEffect ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
