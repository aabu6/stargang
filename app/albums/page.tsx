"use client";
import Gallery from "../../components/Gallery";
import { useSpring } from "framer-motion";
import Description from "../../components/Mask";
import Project from "../../components/project";
import ParallaxDescription from "@/components/ParallaxDescription";
import Reveal from "@/components/Reveal";
import { SplitText } from "gsap/SplitText";
import CylinderScene from "@/components/SceneCylinder";
// import { Albums } from "@/components/Albums";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CircularText from "@/components/CircularText";
import { Streaming } from "@/components/Streaming";
const projects = [
   {
      name: "Blues Up High",
      handle: "dyal_thak",
   },
   {
      name: "Flyest of All Time",
      handle: "landon_speers",
   },
   {
      name: "love Language",
      handle: "leidinger_matthias",
   },
   // {
   //    name: "Mark Rammers",
   //    handle: "mark_rammers",
   // },
];

const musics = [
   {
      title1: "Jomor",
      title2: "Design",
      src: "lovelang.jpg",
   },
   {
      title1: "La",
      title2: "Grange",
      src: "first.jpg",
   },
   {
      title1: "Deux Huit",
      title2: "Huit",
      src: "first.jpg",
   },
   {
      title1: "Nothing",
      title2: "Design Studio",
      src: "first.jpg",
   },
   {
      title1: "Mambo",
      title2: "Mambo",
      src: "first.jpg",
   },
];

export default function Albums() {
   const spring = {
      stiffness: 150,
      damping: 15,
      mass: 0.1,
   };

   const mousePosition = {
      x: useSpring(0, spring),
      y: useSpring(0, spring),
   };
   const mouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const targetX = clientX - (window.innerWidth / 2) * 0.25;
      const targetY = clientY - (window.innerWidth / 2) * 0.3;
      mousePosition.x.set(targetX);
      mousePosition.y.set(targetY);
   };
   // gsap scroll

   return (
      <main className="">
         {/* <ParallaxDescription /> */}
         <section className="py-[9rem]">
            <div className="flex justify-center ">
               {/* <p className="text-[6vw] uppercase text-center max-w-[80vw] leading-none reveal-text">
                  Stargang is a fresh wave in Nepalese music a label shaping the
                  utopian age where creativity, culture, and community come
                  together.
               </p> */}
               <p className="text-[4.5vw] uppercase text-center max-w-[80vw] leading-none  ">
                  Stargang is a fresh wave in Nepalese music a label shaping the
                  utopian age where creativity, culture, and community come
                  together.
               </p>
            </div>
            <CircularText
               text="ALBUMS AND PROJECTS STARGANG "
               duration={15}
               className="drop-shadow-lg mt-[2rem]"
            />{" "}
         </section>
         <section onMouseMove={mouseMove}>
            {projects.map(({ handle }, i) => {
               return (
                  <Gallery
                     mousePosition={mousePosition}
                     handle={handle}
                     key={i}
                  />
               );
            })}
            <Description mousePosition={mousePosition} projects={projects} />
         </section>
         <Streaming />

         {/* another
          */}
         {/* <section className="h-[100vh]">
            <CylinderScene />
         </section> */}
         {/* <section className="h-[100vh] flex justify-center align-center mt-[10rem]">
            <div className="w-[70%]">
               <p className="text-[3rem]">Musics</p>
               {musics.map((project, i) => {
                  return <Project project={project} key={i} />;
               })}
            </div>
         </section> */}
      </main>
   );
}
