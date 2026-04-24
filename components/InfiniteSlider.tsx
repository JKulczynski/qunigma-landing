'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export function InfiniteSlider({ children, speed = 20, className = "" }: { children: React.ReactNode, speed?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);
  
  return (
    <div className="overflow-hidden w-full relative h-[40px] flex items-center">
      <div ref={ref} className="absolute flex">
         <motion.div 
            className={`flex items-center ${className}`}
            animate={{ x: width ? -width / 2 : 0 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: speed }}
         >
            {children}
            {children}
         </motion.div>
      </div>
    </div>
  );
}
