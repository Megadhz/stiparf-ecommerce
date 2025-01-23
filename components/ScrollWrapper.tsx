'use client'
import { motion, MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';

export default function ScrollWrapper({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}