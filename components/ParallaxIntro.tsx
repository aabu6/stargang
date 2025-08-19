import React from "react";
import Image from "next/image";
import Background from "../public/iamstar.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ParallaxIntro() {
   const container = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end start"],
   });

   const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

   return (
      <motion.section
         className=" relative h-screen overflow-hidden pt-[4rem]"
         ref={container}
      >
         <motion.div style={{ y }} className="relative h-full">
            <Image
               src={Background}
               fill
               alt="image"
               loading="lazy"
               placeholder="blur"
               style={{ objectFit: "cover" }}
            />
         </motion.div>
      </motion.section>
   );
}
