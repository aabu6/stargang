"use client";

import { useTransform, motion } from "framer-motion";
import Reveal from "./Reveal";

const Landing = ({ scrollYProgress }: any) => {
   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
   const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

   return (
      <motion.section
         style={{ scale, rotate }}
         className="sticky top-0 h-screen bg-[#0f172a] flex flex-col items-center justify-center text-white overflow-hidden"
      >
         <div className="absolute inset-0 z-0">
            <video
               autoPlay
               loop
               muted
               playsInline
               className="object-cover w-full h-full"
               onError={(e) => console.error("Video error:", e)}
            >
               <source src="/arko.mp4" type="video/mp4" />
               <source src="/hero.webm" type="video/webm" />
               Your browser does not support the video tag.
            </video>
         </div>

         <div className="relative z-10 text-center">
            <h1 className="text-6xl sm:text-5xl md:text-9xl  mb-4 uppercase font-vanguard">
               Arko Barsha{" "}
            </h1>
         </div>
      </motion.section>
   );
};

export default Landing;
