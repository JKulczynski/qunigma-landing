'use client';

import { useEffect, useState } from 'react';

export function MTTAVCounter({ className = "" }: { className?: string }) {
  const [value, setValue] = useState("1.47");

  useEffect(() => {
    // updates every 1500ms with value between 1.1ms–1.9ms (stays within ±0.3ms of previous value)
    const interval = setInterval(() => {
      setValue((prev) => {
        const prevNum = parseFloat(prev);
        // Generate change between -0.3 and 0.3
        let change = (Math.random() * 0.6) - 0.3;
        let nextNum = prevNum + change;
        
        // Clamp between 1.1 and 1.9
        if (nextNum < 1.1) nextNum = 1.1;
        if (nextNum > 1.9) nextNum = 1.9;
        
        return nextNum.toFixed(2);
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`font-mono transition-opacity duration-300 ${className}`}>
      MTTAV: {value}ms
    </span>
  );
}
