import Image from "next/image";
import Background from "../public/intro.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

export default function ParallaxSection() {
   const container = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });
   const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

   return (
      <div
         ref={container}
         className="relative flex items-center justify-center h-screen overflow-hidden"
         style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
         <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
            <Reveal animateOnScroll={true} delay={1}>
               <p className="w-[50vw] text-[2vw] self-end uppercase mix-blend-difference">
                  Stargang is a vibrant music collective that brings together
                  talented artists to create soulful,{" "}
               </p>
            </Reveal>
            <Reveal animateOnScroll={true} delay={0.5}>
               <p className="text-[5vw] uppercase mix-blend-difference">
                  A label for the utopian age{" "}
               </p>
            </Reveal>
         </div>
         <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
            <motion.div style={{ y }} className="relative w-full h-full">
               <Image
                  src={Background}
                  fill
                  alt="image"
                  style={{ objectFit: "cover" }}
               />
            </motion.div>
         </div>
      </div>
   );
}
