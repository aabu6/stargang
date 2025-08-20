"use client";
import React, { ReactElement, ReactNode, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);
interface RevealProps {
   children: ReactNode;
   animateOnScroll?: boolean;
   delay?: number;
}

type SplitTextInstance = ReturnType<typeof SplitText.create>;

export default function Reveal({
   children,
   animateOnScroll = true,
   delay = 0,
}: RevealProps): ReactElement {
   const containerRef = useRef<HTMLDivElement>(null);
   const elementRef = useRef<HTMLElement[]>([]);
   const splitRef = useRef<HTMLElement[]>([]);
   const lines = useRef<HTMLElement[]>([]);

   useGSAP(
      () => {
         if (!containerRef.current) return;
         splitRef.current = [];
         elementRef.current = [];
         lines.current = [];

         let elements = [];

         if (containerRef.current.hasAttribute("data-copy-wrapper")) {
            elements = Array.from(containerRef.current.children);
         } else {
            elements = [containerRef.current];
         }

         elements.forEach((element: any) => {
            elementRef.current.push(element);
            const split = SplitText.create(element, {
               type: "lines",
               mask: "lines",
               linesClass: "line++",
            });
            // @ts-ignore
            splitRef.current.push(split);

            const computedStyle = window.getComputedStyle(element);
            const textIndent = computedStyle.textIndent;
            if (textIndent && textIndent === "0px") {
               if (split.lines.length > 0) {
                  (split.lines[0] as HTMLElement).style.paddingLeft =
                     textIndent;
               }
               element.style.textIndent = "0";
            }
            // @ts-ignore
            lines.current.push(...split.lines);
         });

         gsap.set(lines.current, { y: "100%" });
         const animationProps = {
            y: "0%",
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: delay,
         };
         if (animateOnScroll) {
            gsap.to(lines.current, {
               ...animationProps,
               scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 75%",
                  once: true,
               },
            });
         } else {
            gsap.to(lines.current, animationProps);
         }
         return () => {
            splitRef.current.forEach((split: any) => {
               if (split) {
                  split.revert();
               }
            });
         };
      },
      {
         scope: containerRef,
         dependencies: [animateOnScroll, delay],
      }
   );
   //    return React.cloneElement(children, { ref: containerRef });
   if (React.Children.count(children) === 1) {
      // @ts-ignore
      return React.cloneElement(children, { ref: containerRef });
   }
   return (
      <div ref={containerRef} data-copy-wrapper="true">
         {children}
      </div>
   );
}
// framer motion
