"use client";

import { useTransform, motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

const About = ({ scrollYProgress }: any) => {
   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
   const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

   return (
      <motion.section
         style={{ scale, rotate }}
         className="relative h-screen bg-[#000] p-9"
      >
         <div className="text-center">
            <span className="font-thin text-white font-mono">stargang</span>
            <h2 className="text-7xl lg:text-9xl uppercase font-vanguard text-[#fff] mb-9">
               ABOUT Us
            </h2>
         </div>
         <div>
            <p className="font-light lg:text-xl font-mono lg:mx-[5rem] text-white">
               From the dusty streets of Kathmandu to the global stage, Bluesss
               embodies the soul of the blues, reimagined for a new generation.
               Hear the echo of Delta lamentations in his hip-hop beats, the
               whisper of smoky jazz lounges in his haunting melodies. This is
               more than music; it's a journey into the raw honesty of human
               experience. A Nepali hip-hop/rap artist from Kathmandu, Nepal. He
               is known for his genre-blending beats, catchy hooks, and haunting
               melodies. His debut album, "Blue Up High," was released in 2019
               and revolutionized the Nepali music scene.
            </p>
            {/* <Link href="/about" className="text-white underline">
               Learn more
            </Link> */}
            {/* <div className="grid place-items-center mt-[2rem]">
               {" "}
               <Button href="/about">My Story</Button>
            </div> */}
         </div>
      </motion.section>
   );
};

export default About;
