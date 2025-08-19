// "use client";
// import Image from "next/image";
// import Scene from "../components/Scene";
// const Scene = dynamic(() => import("../components/Scene"));
// import Galaxy from "@/components/Galaxy/Galaxy";
// import { Albums } from "@/components/Albums";
// import Landing from "@/components/Landing";
// import About from "@/components/About";
// import { useScroll } from "framer-motion";
// import CylinderScene from "@/components/SceneCylinder";
// import { useRef } from "react";
// import Stack from "@/components/Stack";
// import ImageGallery from "@/components/SmoothScrollHero";
// import Horizontal from "@/components/Horizontal";
// import ParallaxIntro from "@/components/ParallaxIntro";
// import ParallaxDescription from "@/components/ParallaxDescription";
// import ParallaxSection from "@/components/ParallaxSection";
// import { Streaming } from "@/components/Streaming";
// import TextMask from "@/components/TextMask";
// import dynamic from "next/dynamic";
// export default function Home() {
//    const container = useRef(null);
//    // const containernext = useRef(null);
//    const { scrollYProgress } = useScroll({
//       target: container,
//       offset: ["start start", "end end"],
//    });
//    // const { scrollYProgress: scrollY } = useScroll({
//    //    target: containernext,
//    // });

//    // sample data
//    const projects = [
//       {
//          title: "Om Mani Padme Hum",
//          description:
//             "Om Mane Padme Hum by Bluesss, you may enjoy the rest of this album for its artistically rich and emotionally resonant tracks that reflect a similar depth and musical style. Each song is crafted to engage listeners not only musically but also emotionally and spiritually.ongs combine smooth melodies with thoughtful storytelling, often carrying an intimate and soulful vibe. The music showcases meticulous craftsmanship and a blend of various musical styles, creating a unique and engaging listening experience.",
//          src: "/iamstar.jpg",
//          link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
//          color: "#efefef",
//       },
//       {
//          title: "Adhi Raati",
//          description:
//             "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’ ).",
//          src: "/aadhirati.jpg",
//          link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//          color: "#977F6D",
//       },
//       {
//          title: "Chahanaley X Yoddha",
//          description:
//             "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
//          src: "/chahanaley.jpg",
//          link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
//          color: "#efefef",
//       },
//       {
//          title: "Aaudina Ma Ghar",
//          description:
//             "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
//          src: "/aaudinamaghar.jpg",
//          link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
//          color: "#977F6D",
//       },
//       {
//          title: "Love Language",
//          description:
//             "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
//          src: "/lovelang.jpg",
//          link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
//          color: "#efefef",
//       },
//    ];

//    const stack = useRef(null);
//    const { scrollYProgress: stackProgress } = useScroll({
//       target: stack,
//       offset: ["start start", "end end"],
//    });

//    // masking
//    const maskContainer = useRef(null);
//    const stickyMask = useRef(null);

//    const initialMaskSize = 0.8;
//    const targetMaskSize = 30;
//    const easing = 0.15;
//    let easedScrollProgress = 0;

//    const animate = () => {
//       const maskSizeProgress = targetMaskSize * getScrollProgress();
//       stickyMask.current.style.webkitMaskSize =
//          (initialMaskSize + maskSizeProgress) * 100 + "%";
//       requestAnimationFrame(animate);
//    };

//    const getScrollProgress = () => {
//       const scrollProgress =
//          stickyMask.current.offsetTop /
//          (container.current.getBoundingClientRect().height -
//             window.innerHeight);
//       const delta = scrollProgress - easedScrollProgress;
//       easedScrollProgress += delta * easing;
//       return easedScrollProgress;
//    };
//    return (
//       <main className="">
//          {/* <h1>EHello</h1> */}
//          <ParallaxIntro />
//          <ParallaxDescription />
//          <ParallaxSection />
//          <section className="flex h-[100vh]">
//             <Scene />
//          </section>{" "}
//          {/* <div
//             style={{ width: "100%", height: "600px", position: "relative" }}
//             className="bg-black"
//          >
//             <Galaxy
//                mouseRepulsion={true}
//                mouseInteraction={true}
//                density={1.5}
//                glowIntensity={0.5}
//                hueShift={240}
//             />
//          </div> */}
//          {/* <section className="h-[100vh]">
//             <h1>Projects</h1>
//             </section> */}
//          <ImageGallery />
//          <Albums />
//          <section className="relative h-[200vh]" ref={container}>
//             <Landing scrollYProgress={scrollYProgress} />
//             <About scrollYProgress={scrollYProgress} />
//          </section>
//          <Horizontal />
//          {/* <section className="relative h-[200vh]" ref={containernext}>
//             <Landing scrollYProgress={scrollY} />
//             <About scrollYProgress={scrollY} />
//          </section> */}
//          <section ref={stack} className="pt-[8vh] bg-black">
//             <h4 className="text-[8rem] text-gray-50 text-center uppercase">
//                Latest Release
//             </h4>
//             {projects.map((project, i) => {
//                const targetScale = 1 - (projects.length - 1 - i) * 0.05;
//                // test
//                const multiplier = 100 / projects.length - 1 / 100;
//                return (
//                   <Stack
//                      key={`p_${i}`}
//                      i={i}
//                      {...project}
//                      progress={scrollYProgress}
//                      // range={[i * 0.2, 1]}
//                      range={[i * multiplier, 1]}
//                      targetScale={targetScale}
//                   />
//                );
//             })}
//          </section>
//          <Streaming />
//          <TextMask />
//          {/* Splitmasking */}
//       </main>
//    );
// }

"use client";

import Image from "next/image";
import { Suspense, useMemo, useRef, startTransition } from "react";
import { useScroll } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load heavy components with proper loading states
const Scene = dynamic(() => import("../components/Scene"), {
   loading: () => <div className="h-[100vh] bg-gray-900 animate-pulse" />,
   ssr: false, // 3D scenes typically don't need SSR
});

const Galaxy = dynamic(() => import("@/components/Galaxy/Galaxy"), {
   loading: () => <div className="h-[600px] bg-black animate-pulse" />,
   ssr: false,
});

// Group related components for better code splitting
const ParallaxComponents = dynamic(
   () =>
      Promise.all([
         import("@/components/ParallaxIntro"),
         import("@/components/ParallaxDescription"),
         import("@/components/ParallaxSection"),
      ]).then(([intro, description, section]) => ({
         default: () => (
            <>
               <intro.default />
               <description.default />
               <section.default />
            </>
         ),
      })),
   {
      loading: () => <div className="h-[200vh] bg-gray-900 animate-pulse" />,
   }
);

// Static imports for above-the-fold content
import { Albums } from "@/components/Albums";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Stack from "@/components/Stack";
import ImageGallery from "@/components/SmoothScrollHero";
import Horizontal from "@/components/Horizontal";
import { Streaming } from "@/components/Streaming";
import TextMask from "@/components/TextMask";

// Move static data outside component to prevent recreation
const PROJECTS_DATA = [
   {
      title: "Om Mani Padme Hum",
      description:
         "Om Mane Padme Hum by Bluesss, you may enjoy the rest of this album for its artistically rich and emotionally resonant tracks that reflect a similar depth and musical style. Each song is crafted to engage listeners not only musically but also emotionally and spiritually.ongs combine smooth melodies with thoughtful storytelling, often carrying an intimate and soulful vibe. The music showcases meticulous craftsmanship and a blend of various musical styles, creating a unique and engaging listening experience.",
      src: "/iamstar.jpg",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#efefef",
   },
   {
      title: "Adhi Raati",
      description:
         "Om Mane Padme Hum by Bluesss, you may enjoy the rest of this album for its artistically rich and emotionally resonant tracks that reflect a similar depth and musical style. Each song is crafted to engage listeners not only musically but also",
      src: "/aadhirati.jpg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#977F6D",
   },
   {
      title: "Chahanaley X Yoddha",
      description:
         "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal, they're encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "/chahanaley.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#efefef",
   },
   {
      title: "Aaudina Ma Ghar",
      description:
         "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      src: "/aaudinamaghar.jpg",
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#977F6D",
   },
   {
      title: "Love Language",
      description:
         "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, 'all over again'—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled 'Beginnings', the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
      src: "/lovelang.jpg",
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#efefef",
   },
] as const;

export default function Home() {
   const container = useRef<HTMLElement>(null);
   const stack = useRef<HTMLElement>(null);

   // Memoize scroll progress calculations
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
   });

   const { scrollYProgress: stackProgress } = useScroll({
      target: stack,
      offset: ["start start", "end end"],
   });

   // Memoize heavy calculations
   const projectsWithCalculations = useMemo(() => {
      const multiplier = 100 / (PROJECTS_DATA.length - 1) / 100;

      return PROJECTS_DATA.map((project, i) => ({
         ...project,
         targetScale: 1 - (PROJECTS_DATA.length - 1 - i) * 0.05,
         range: [i * multiplier, 1] as [number, number],
         index: i,
      }));
   }, []);

   // Memoize masking refs and functions
   const maskContainer = useRef<HTMLDivElement>(null);
   const stickyMask = useRef<HTMLDivElement>(null);

   const maskingConfig = useMemo(
      () => ({
         initialMaskSize: 0.8,
         targetMaskSize: 30,
         easing: 0.15,
      }),
      []
   );

   return (
      <main className="">
         <Suspense
            fallback={<div className="h-screen bg-gray-900 animate-pulse" />}
         >
            <ParallaxComponents />
         </Suspense>

         <Suspense
            fallback={<div className="h-[100vh] bg-gray-900 animate-pulse" />}
         >
            <section className="flex h-[100vh]">
               <Scene />
            </section>
         </Suspense>

         <Suspense
            fallback={<div className="h-[50vh] bg-gray-900 animate-pulse" />}
         >
            <ImageGallery />
         </Suspense>

         <Suspense
            fallback={<div className="h-[50vh] bg-gray-900 animate-pulse" />}
         >
            <Albums />
         </Suspense>

         <section className="relative h-[200vh]" ref={container}>
            <Landing scrollYProgress={scrollYProgress} />
            <About scrollYProgress={scrollYProgress} />
         </section>

         <Suspense
            fallback={<div className="h-[50vh] bg-gray-900 animate-pulse" />}
         >
            <Horizontal />
         </Suspense>

         <section ref={stack} className="pt-[8vh] bg-black">
            <h4 className="text-[8rem] text-gray-50 text-center uppercase">
               Latest Release
            </h4>
            {projectsWithCalculations.map((project) => (
               <Suspense
                  key={`p_${project.index}`}
                  fallback={
                     <div className="h-[100vh] bg-gray-800 animate-pulse" />
                  }
               >
                  <Stack
                     i={project.index}
                     title={project.title}
                     description={project.description}
                     src={project.src}
                     link={project.link}
                     color={project.color}
                     progress={stackProgress}
                     range={project.range}
                     targetScale={project.targetScale}
                  />
               </Suspense>
            ))}
         </section>

         <Suspense
            fallback={<div className="h-[50vh] bg-gray-900 animate-pulse" />}
         >
            <Streaming />
         </Suspense>

         <Suspense
            fallback={<div className="h-[50vh] bg-gray-900 animate-pulse" />}
         >
            <TextMask />
         </Suspense>
      </main>
   );
}
