'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ClientMotionProps {
  children: ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
  className?: string;
}

export default function ClientMotion({ 
  children, 
  initial = { opacity: 0, y: 20 }, 
  animate = { opacity: 1, y: 0 }, 
  transition = { duration: 0.6, ease: "easeOut" },
  className = ""
}: ClientMotionProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
