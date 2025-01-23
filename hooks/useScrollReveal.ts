import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    ...options 
  });

  return { ref, isInView };
};