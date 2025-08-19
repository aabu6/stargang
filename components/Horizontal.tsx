"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Horizontal() {
   const targetRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: targetRef,
   });
   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-93%"]);

   return (
      <section className="bg-white">
         <div className="text-center  ">
            {/* <span className="font-outfit text-gray-400 ">stargangvibes.</span> */}

            <Reveal>
               <h3 className="text-7xl uppercase   font-vanguard lg:text-8xl">
                  Merch Series{" "}
               </h3>
            </Reveal>
            <div>
               <article ref={targetRef} className="relative h-[300vh]">
                  <div className="sticky top-[50px] flex  h-[75vh] lg:h-screen items-center overflow-hidden">
                     <motion.div style={{ x }} className="flex gap-4">
                        {cards.map((card) => (
                           <Card card={card} key={card.id} />
                        ))}
                     </motion.div>
                  </div>
               </article>
            </div>
         </div>
      </section>
   );
}
const Card = ({ card }: any) => {
   return (
      <Link href="/events">
         <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
         >
            <div
               style={{
                  backgroundImage: `url(${card.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
               }}
               className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
         </div>
      </Link>
   );
};

const cards = [
   {
      url: "/mone.jpg",
      title: "Title 1",
      id: 1,
   },
   {
      url: "/mtwo.jpg",
      title: "Title 2",
      id: 2,
   },
   {
      url: "/mthree.jpg",
      title: "Title 3",
      id: 3,
   },
   {
      url: "mfour.jpg",
      title: "Title 4",
      id: 4,
   },
   {
      url: "mfive.jpg",
      title: "Title 5",
      id: 5,
   },
   {
      url: "/msix.jpg",
      title: "Title 6",
      id: 6,
   },
   {
      url: "/mseven.jpg",
      title: "Title 7",
      id: 7,
   },
   {
      url: "/meight.jpg",
      title: "Title 8",
      id: 8,
   },
   {
      url: "/meight.jpg",
      title: "Title 8",
      id: 9,
   },
   {
      url: "/meight.jpg",
      title: "Title 8",
      id: 10,
   },
   // {
   //    url: "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/449434494_487407606998954_2891937306824391911_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=urttC3B58QoQ7kNvgGFtgdf&_nc_ht=scontent.fktm6-1.fna&oh=00_AYAAwmEWrho4_faCBYXVbsjBdILO3pzALyn4MAVrsP2X7A&oe=66A9351C",
   //    title: "Title 7",
   //    id: 9,
   // },
];
