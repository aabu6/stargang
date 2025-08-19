import React from "react";
import { motion } from "framer-motion";

interface CircularTextProps {
   text: string;
   duration?: number;
   className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
   text,
   duration = 20,
   className = "",
}) => {
   const letters = Array.from(text);
   const radius = 80; // Fixed radius for positioning

   return (
      <motion.div
         className={`relative w-[200px] h-[200px] mx-auto ${className}`}
         animate={{ rotate: 360 }}
         transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
         }}
      >
         {letters.map((letter, i) => {
            const angle = (360 / letters.length) * i;
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            return (
               <span
                  key={i}
                  className="absolute text-4xl font-bold text-black font-vanguard"
                  style={{
                     left: "50%",
                     top: "50%",
                     transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle + 90}deg)`,
                  }}
               >
                  {letter}
               </span>
            );
         })}
      </motion.div>
   );
};

export default CircularText;
