"use client";
import ParallaxDescription from "@/components/ParallaxDescription";
import TextMask from "@/components/TextMask";
import dynamic from "next/dynamic";
import React from "react";
import Scene from "@/components/Scene";
import { Streaming } from "@/components/Streaming";

// const Scene = dynamic(() => import("@/components/Scene"), {
//    //    loading: () => <div className="h-[100vh] bg-gray-900 animate-pulse" />,
//    ssr: false, // 3D scenes typically don't need SSR
// });

function About() {
   return (
      <main>
         <TextMask />
         <ParallaxDescription />
         <section className="flex h-[100vh]">
            <Scene />
         </section>
         <Streaming />
      </main>
   );
}
export default About;
