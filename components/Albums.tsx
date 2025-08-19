"use client";
import React, { useRef } from "react";
import {
   useMotionValue,
   motion,
   useSpring,
   useTransform,
   MotionValue,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";

interface LinkProps {
   heading: string;
   subheading: string;
   imgSrc: string;
   href: string;
}

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
   const ref = useRef<HTMLAnchorElement>(null);
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const mouseXSpring = useSpring(x);
   const mouseYSpring = useSpring(y);

   const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
   const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

   const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;

      x.set(xPct);
      y.set(yPct);
   };

   return (
      <motion.a
         href={href}
         ref={ref}
         onMouseMove={handleMouseMove}
         initial="initial"
         whileHover="whileHover"
         className="group relative flex items-center justify-between border-b-2 border-neutral-300 py-4 transition-colors duration-500 hover:border-white md:py-8 "
      >
         <div>
            <motion.span
               variants={{
                  initial: { x: 0 },
                  whileHover: { x: -16 },
               }}
               transition={{
                  type: "spring",
                  staggerChildren: 0.075,
                  delayChildren: 0.25,
               }}
               className="relative z-10 block text-6xl tracking-wide font-humane uppercase text-neutral-600 transition-colors duration-500 group-hover:text-[#fbfaf4] md:text-[5rem]"
            >
               {heading.split("").map((l, i) => (
                  <motion.span
                     variants={{
                        initial: { x: 0 },
                        whileHover: { x: 16 },
                     }}
                     transition={{ type: "spring" }}
                     className="inline-block"
                     key={i}
                  >
                     {l}
                  </motion.span>
               ))}
            </motion.span>
            <span className="relative z-10 mt-2 block text-base text-neutral-600 transition-colors duration-500 group-hover:text-white">
               {subheading}
            </span>
         </div>

         <motion.img
            style={{
               top,
               left,
               translateX: "-50%",
               translateY: "-50%",
            }}
            variants={{
               initial: { scale: 0, rotate: "-12.5deg" },
               whileHover: { scale: 1, rotate: "12.5deg" },
            }}
            transition={{ type: "spring" }}
            src={imgSrc}
            className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
            alt={`Image representing a link for ${heading}`}
         />

         <motion.div
            variants={{
               initial: {
                  x: "25%",
                  opacity: 0,
               },
               whileHover: {
                  x: "0%",
                  opacity: 1,
               },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 p-4"
         >
            <FiArrowRight className="text-5xl text-neutral-900" />
         </motion.div>
      </motion.a>
   );
};

export const Albums: React.FC = () => {
   return (
      <section className="bg-black lg:my-[2rem] rounded-tl-[6rem] rounded-tr-[6rem]">
         <div className="mx-auto max-w-5xl">
            <header>
               <Reveal>
                  <h4 className="font-humane text-[#fff] uppercase text-[7rem] text-center">
                     Albums
                  </h4>
               </Reveal>
            </header>
            <Link
               heading="Blue Up High"
               subheading="Lala aabha ma pani garxu mera adhura sapana pura"
               imgSrc="https://t2.genius.com/unsafe/600x600/https://images.genius.com/f5daaeccc0a652d7bb13959d3d53b196.1000x1000x1.jpg"
               href="albums/blue-up"
            />
            <Link
               heading="Flyest of All Time"
               subheading="Chahanaley Rokhney xaina Bahanaley?"
               imgSrc="https://m.media-amazon.com/images/I/51tQqwrZYjL.jpg"
               href="albums/flyest-of-all-time"
            />
            <Link
               heading="Love Language"
               subheading="Chalachitra Jasto Lagxa aailey?"
               imgSrc="/lovelang.jpg"
               href="albums/love-language"
            />
         </div>
      </section>
   );
};

// "use client";
// import React, { useRef, useState } from "react";
// import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";

// interface LinkProps {
//    heading: string;
//    subheading: string;
//    imgSrc: string;
//    href: string;
// }

// const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
//    const ref = useRef<HTMLAnchorElement>(null);
//    const [isHovered, setIsHovered] = useState(false);
//    const x = useMotionValue(0);
//    const y = useMotionValue(0);

//    const mouseXSpring = useSpring(x);
//    const mouseYSpring = useSpring(y);

//    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
//    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

//    const handleMove = (clientX: number, clientY: number) => {
//       if (!ref.current) return;

//       const rect = ref.current.getBoundingClientRect();
//       const mouseX = clientX - rect.left;
//       const mouseY = clientY - rect.top;

//       const xPct = mouseX / rect.width - 0.5;
//       const yPct = mouseY / rect.height - 0.5;

//       x.set(xPct);
//       y.set(yPct);
//    };

//    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
//       handleMove(e.clientX, e.clientY);
//    };

//    const handleTouchMove = (e: React.TouchEvent<HTMLAnchorElement>) => {
//       handleMove(e.touches[0].clientX, e.touches[0].clientY);
//    };

//    return (
//       <motion.a
//          href={href}
//          ref={ref}
//          onMouseMove={handleMouseMove}
//          onTouchMove={handleTouchMove}
//          onMouseEnter={() => setIsHovered(true)}
//          onMouseLeave={() => setIsHovered(false)}
//          onTouchStart={() => setIsHovered(true)}
//          onTouchEnd={() => setIsHovered(false)}
//          className="group relative flex items-center justify-between border-b-2 border-neutral-300 py-4 transition-colors duration-500 hover:border-neutral-800 md:py-8"
//       >
//          <div>
//             <motion.span
//                animate={isHovered ? { x: -16 } : { x: 0 }}
//                transition={{
//                   type: "spring",
//                   staggerChildren: 0.075,
//                   delayChildren: 0.25,
//                }}
//                className="relative z-10 block text-4xl tracking-wide font-humane uppercase text-neutral-600 transition-colors duration-500 group-hover:text-neutral-900 md:text-6xl"
//             >
//                {heading.split("").map((l, i) => (
//                   <motion.span
//                      animate={isHovered ? { x: 16 } : { x: 0 }}
//                      transition={{ type: "spring" }}
//                      className="inline-block"
//                      key={i}
//                   >
//                      {l}
//                   </motion.span>
//                ))}
//             </motion.span>
//             <span className="relative z-10 mt-2 block text-sm text-neutral-600 transition-colors duration-500 group-hover:text-neutral-900 md:text-base">
//                {subheading}
//             </span>
//          </div>

//          <motion.img
//             style={{
//                top,
//                left,
//                translateX: "-50%",
//                translateY: "-50%",
//             }}
//             animate={
//                isHovered
//                   ? { scale: 1, rotate: "12.5deg" }
//                   : { scale: 0, rotate: "-12.5deg" }
//             }
//             transition={{ type: "spring" }}
//             src={imgSrc}
//             className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
//             alt={`Image representing a link for ${heading}`}
//          />

//          <motion.div
//             animate={
//                isHovered ? { x: "0%", opacity: 1 } : { x: "25%", opacity: 0 }
//             }
//             transition={{ type: "spring" }}
//             className="relative z-10 p-4"
//          >
//             <FiArrowRight className="text-3xl text-neutral-900 md:text-5xl" />
//          </motion.div>
//       </motion.a>
//    );
// };

// export const Albums: React.FC = () => {
//    return (
//       <section className="bg-white p-4 md:p-8">
//          <div className="mx-auto max-w-5xl">
//             <header>
//                <h4 className="font-humane text-[#2E60C8] uppercase text-5xl md:text-[7rem] text-center">
//                   Albums
//                </h4>
//             </header>
//             <Link
//                heading="Blue Up High"
//                subheading="Lala aabha ma pani garxu mera adhura sapana pura"
//                imgSrc="https://t2.genius.com/unsafe/600x600/https://images.genius.com/f5daaeccc0a652d7bb13959d3d53b196.1000x1000x1.jpg"
//                href="albums/blue-up"
//             />
//             <Link
//                heading="Flyest of All Time"
//                subheading="Chahanaley Rokhney xaina Bahanaley?"
//                imgSrc="https://m.media-amazon.com/images/I/51tQqwrZYjL.jpg"
//                href="albums/flyest-of-all-time"
//             />
//             <Link
//                heading="Love Language"
//                subheading="Chalachitra Jasto Lagxa aailey?"
//                imgSrc="/lovelang.jpg"
//                href="albums/love-language"
//             />
//          </div>
//       </section>
//    );
// };
