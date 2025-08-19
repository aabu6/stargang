// "use client";

// import Logo from "./Logo";
// import { useEffect, useRef } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { gsap } from "gsap";
// const PageTransition = ({ children }: any) => {
//    const router = useRouter();
//    const pathname = usePathname();
//    const overLayRef = useRef<HTMLDivElement>(null);
//    const logoOverlayRef = useRef<HTMLDivElement>(null);
//    const logoRef = useRef<SVGSVGElement>(null);
//    const blockRef = useRef<HTMLDivElement[]>([]);
//    const isTransitioning = useRef<boolean>(false);

//    //Function to create animation blocks
//    const createBlocks = (): void => {
//       if (!overLayRef.current) return;
//       overLayRef.current.innerHTML = "";
//       blockRef.current = [];
//       for (let i = 0; i < 20; i++) {
//          const block = document.createElement("div");
//          block.className = "block";
//          overLayRef.current.appendChild(block);
//          blockRef.current.push(block);
//       }
//    };

//    const handleRouteChange = (url: string): void => {
//       if (isTransitioning.current) return;
//       isTransitioning.current = true;
//       coverPage(url);
//    };
//    useEffect(() => {
//       // create the blocks

//          //  called the blocks
//          createBlocks();

//          // we'll use the gsap now
//          gsap.set(blockRef.current, { scaleX: 0, transformOrigin: "left" });

//          //  prepare the logo for the stroke animation
//          if (logoRef.current) {
//             const path = logoRef.current.querySelector("path");
//             if (path) {
//                const length = path.getTotalLength();
//                gsap.set(path, {
//                   strokeDasharray: length,
//                   strokeDashoffset: length,
//                   fill: "transparent",
//                });
//             }
//          }

//       //   revealPage();

//       //   handles the routes

//       const links = document.querySelectorAll(
//          'a[href^="/"]'
//       ) as NodeListOf<HTMLAnchorElement>;
//       links.forEach((link) => {
//          link.addEventListener("click", (e) => {
//             e.preventDefault();
//             const target = e.currentTarget as HTMLAnchorElement;
//             const href = target.href;
//             const url = new URL(href).pathname;
//             if (url !== pathname) {
//                handleRouteChange(uri);
//             }
//          });
//       });

//       //    killing the event listener for event bubbles

//       return () => {
//          links.forEach((link) => {
//             link.removeEventListener("click", handleRouteChange);
//          });
//       };
//    }, [router, pathname]);
//    return (
//       <>
//          <div className="transition-overlay" ref={overLayRef}>
//             <div className="logo-overlay" ref={logoOverlayRef}>
//                <div className="logo-container">
//                   <Logo ref={logoRef} />
//                </div>
//             </div>
//          </div>
//          {children}
//       </>
//    );
// };

// export default PageTransition;

"use client";

import Logo from "./Logo";
import { useEffect, useRef, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { opacity } from "./Preloader/anim";

interface PageTransitionProps {
   children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
   const router = useRouter();
   const pathname = usePathname();
   const overLayRef = useRef<HTMLDivElement>(null);
   const logoOverlayRef = useRef<HTMLDivElement>(null);
   const logoRef = useRef<SVGSVGElement>(null);
   const blockRef = useRef<HTMLDivElement[]>([]);
   const isTransitioning = useRef<boolean>(false);

   // Function to create animation blocks
   const createBlocks = (): void => {
      if (!overLayRef.current) return;
      overLayRef.current.innerHTML = "";
      blockRef.current = [];

      for (let i = 0; i < 20; i++) {
         const block = document.createElement("div");
         block.className = "block";
         overLayRef.current.appendChild(block);
         blockRef.current.push(block);
      }

      // Set initial state for blocks
      gsap.set(blockRef.current, { scaleX: 0, transformOrigin: "left" });

      // Prepare the logo for stroke animation
      if (logoRef.current) {
         const path = logoRef.current.querySelector("path");
         if (path) {
            const length = path.getTotalLength();
            gsap.set(path, {
               strokeDasharray: length,
               strokeDashoffset: length,
               fill: "transparent",
            });
         }
      }
   };

   // Function to reveal the page
   const revealPage = (): void => {
      gsap.set(blockRef.current, {
         scaleX: 1,
         transformOrigin: "right",
      });

      gsap.to(blockRef.current, {
         scaleX: 0,
         duration: 0.4,
         stagger: 0.02,
         ease: "power2.out",
         transformOrigin: "right",
         onComplete: () => {
            isTransitioning.current = false;
         },
      });
   };

   // Function to cover the page during transition
   const coverPage = (url: string): void => {
      if (!logoOverlayRef.current || !logoRef.current) return;

      const logoPath = logoRef.current.querySelector("path");
      if (!logoPath) return;

      const pathLength = logoPath.getTotalLength();

      const timeline = gsap.timeline({
         onComplete: () => router.push(url),
      });

      timeline
         .to(blockRef.current, {
            scaleX: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "left",
         })
         .set(
            logoOverlayRef.current,
            {
               opacity: 1,
            },
            "-=0.2"
         )
         .set(
            logoPath,
            {
               strokeDashoffset: pathLength,
               fill: "transparent",
            },
            "-=0.25"
         )
         .to(
            logoPath,
            {
               strokeDashoffset: 0,
               duration: 2,
               ease: "power2.inOut",
            },
            "-=0.5"
         )
         .to(
            logoPath,
            {
               fill: "#e3e4d8",
               duration: 1,
               ease: "power2.out",
            },
            "-=0.5"
         )
         .to(logoOverlayRef.current, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.out",
         });
   };

   // Handle route changes
   const handleRouteChange = (url: string): void => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
   };

   useEffect(() => {
      createBlocks();
      revealPage();

      // Handle link clicks for page transitions
      const links = document.querySelectorAll(
         'a[href^="/"]'
      ) as NodeListOf<HTMLAnchorElement>;

      const handleLinkClick = (e: Event): void => {
         e.preventDefault();
         const target = e.currentTarget as HTMLAnchorElement;
         const href = target.href;
         const url = new URL(href).pathname;

         if (url !== pathname) {
            handleRouteChange(url);
         }
      };

      links.forEach((link) => {
         link.addEventListener("click", handleLinkClick);
      });

      // Cleanup event listeners
      return () => {
         links.forEach((link) => {
            link.removeEventListener("click", handleLinkClick);
         });
      };
   }, [router, pathname]);

   return (
      <>
         <div className="transition-overlay" ref={overLayRef}>
            <div className="logo-overlay" ref={logoOverlayRef}>
               <div className="logo-container">
                  <Logo ref={logoRef} />
               </div>
            </div>
         </div>
         {children}
      </>
   );
};

export default PageTransition;
