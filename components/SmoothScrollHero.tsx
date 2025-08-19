"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

// Import your images here
// picture 1 will be in middleor center
import Picture1 from "../public/intro.jpg";
import Picture2 from "../public/lalala.jpg";
import Picture3 from "../public/lovelang.jpg";
import Picture4 from "../public/straightouttaktm.jpg";
import Picture5 from "../public/nindra.jpg";
import Picture6 from "../public/nilanila.jpg";
import Picture7 from "../public/iamstar.jpg";

const ImageGallery = () => {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
   });

   const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
   const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
   const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
   const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
   const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

   const pictures = [
      { src: Picture1, scale: scale4, className: "w-1/4 h-1/4" },
      {
         src: Picture2,
         scale: scale5,
         className: "w-[35vw] h-[35vh] -top-[32vh] left-[5vw]",
      },
      {
         src: Picture3,
         scale: scale6,
         className: "w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]",
      },
      { src: Picture4, scale: scale5, className: "w-1/4 h-1/4 left-[27.5vw]" },
      {
         src: Picture5,
         scale: scale6,
         className: "w-[20vw] h-1/3 top-[32.5vh] left-[5vw]",
      },
      {
         src: Picture6,
         scale: scale8,
         className: "w-[30vw] h-1/3 top-[30.5vh] -left-[22.5vw]",
      },
      {
         src: Picture7,
         scale: scale9,
         className: "w-[25vw] h-[45vh] top-[37.5vh] left-[29vw]",
      },
   ];

   return (
      <section
         ref={container}
         className="h-[300vh] relative lg:pt-[5rem] bg-[#fbfaf4]"
      >
         <div className="sticky top-0 overflow-hidden h-screen">
            {pictures.map(({ src, scale, className }, index) => (
               <motion.div
                  key={index}
                  style={{ scale }}
                  className={`absolute inset-0 flex items-center justify-center`}
               >
                  <div className={`relative ${className}`}>
                     <Image
                        src={src}
                        fill
                        alt={`image ${index + 1}`}
                        placeholder="blur"
                        className="object-cover"
                     />
                  </div>
               </motion.div>
            ))}
         </div>
      </section>
   );
};

export default ImageGallery;
