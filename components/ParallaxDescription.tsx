import React from "react";
import Copy from "./Reveal";
import Reveal from "./Reveal";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export default function ParallaxDescription() {
   useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const splitElements = document.querySelectorAll(".reveal-text");
      const splitInstances = [] as any;
      const scrollTriggers = [] as any;

      splitElements.forEach((el) => {
         const splitText = SplitText.create(el, { type: "chars" });
         splitInstances.push(splitText);
         const tween = gsap.from(splitText.chars, {
            scrollTrigger: {
               trigger: el,
               start: "top 40%",
               end: "top 20%",
               scrub: true,

               onKill: () => {
                  // Optional cleanup when ScrollTrigger is killed
                  splitText.revert();
               },
            },
            opacity: 0.2,
            stagger: 0.15,
            ease: "sine.inOut",
            duration: 1.5,
         });
         scrollTriggers.push(tween.scrollTrigger);
      });
      return () => {
         scrollTriggers.forEach((st: any) => st.kill());
         splitInstances.forEach((inst: any) => inst.revert());
         gsap.killTweensOf("*");
      };
   });
   return (
      <div className="flex justify-center my-40">
         <p className="text-[6vw] uppercase text-center max-w-[80vw] leading-none reveal-text">
            Stargang is a fresh wave in Nepalese music a label shaping the
            utopian age where creativity, culture, and community come together.
         </p>
         {/* <Reveal animateOnScroll={true} delay={0.5}>
            <p className="text-[7.5vw] uppercase text-center max-w-[50vw] leading-none">
               The quick brown fox jumps over the lazy dog
            </p>
         </Reveal> */}
      </div>
   );
}
