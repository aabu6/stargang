// "use client";

// import { AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { ReactLenis } from "../lib/lenis";
// import PreLoader from "../components/Preloader";
// import Nav from "./Nav";
// import { ThemeProvider } from "next-themes";
// interface LayoutWrapperProps {
//    children: React.ReactNode;
// }
// export default function LayoutWrapper({ children }: LayoutWrapperProps) {
//    const [isLoading, setIsLoading] = useState(true);
//    useEffect(() => {
//       const timer = setTimeout(() => {
//          setIsLoading(true);
//       }, 3500);
//       return () => clearTimeout(timer);
//    }, []);
//    return (
//       <>
//          <AnimatePresence mode="wait">
//             {isLoading && <PreLoader key="preloader" />}
//          </AnimatePresence>
//          <AnimatePresence mode="wait">
//             {!isLoading && (
//                <div className="relative" key="main-content">
//                   <ThemeProvider
//                      attribute="class"
//                      defaultTheme="dark"
//                      enableSystem
//                      disableTransitionOnChange
//                   >
//                      <ReactLenis root>
//                         <Nav />
//                         {children}
//                      </ReactLenis>
//                   </ThemeProvider>
//                </div>
//             )}
//          </AnimatePresence>
//       </>
//    );
// }

"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "../lib/lenis";
import Header from "../components/header";
import { ThemeProvider } from "next-themes";

import Preloader from "./Preloader/index";

interface LayoutWrapperProps {
   children: React.ReactNode;
}

const PRELOADER_DURATION = 1500;

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), PRELOADER_DURATION);
      return () => clearTimeout(timer);
   }, []);

   return (
      <ThemeProvider
         attribute="class"
         defaultTheme="dark"
         enableSystem
         disableTransitionOnChange
      >
         <ReactLenis root>
            <AnimatePresence mode="wait">
               {isLoading ? (
                  <Preloader key="preloader" />
               ) : (
                  <>
                     <Header />
                     {children}
                  </>
               )}
            </AnimatePresence>
         </ReactLenis>
         {/* <Footer /> */}
      </ThemeProvider>
   );
}
