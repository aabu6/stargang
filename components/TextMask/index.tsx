// "use client";
// import { useRef, useEffect } from "react";
// import styles from "./style.module.css";

// export default function TextMask() {
//    const container = useRef(null);
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
//       <section className={styles.main}>
//          <div ref={container} className={styles.container}>
//             <div ref={stickyMask} className={styles.stickyMask}>
//                <video autoPlay muted loop>
//                   <source src="/medias/nature.mp4" type="video/mp4" />
//                </video>
//             </div>
//          </div>
//       </section>
//    );
// }

"use client";
import { useRef, useEffect } from "react";
import styles from "./style.module.css";

export default function TextMask() {
   const container = useRef<HTMLDivElement | null>(null);
   const stickyMask = useRef<HTMLDivElement | null>(null);

   const initialMaskSize = 0.8;
   const targetMaskSize = 30;
   const easing = 0.15;
   let easedScrollProgress = 0;

   const getScrollProgress = () => {
      if (!stickyMask.current || !container.current) return 0;
      const scrollProgress =
         stickyMask.current.offsetTop /
         (container.current.getBoundingClientRect().height -
            window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
   };

   const animate = () => {
      if (!stickyMask.current) {
         requestAnimationFrame(animate);
         return;
      }
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      stickyMask.current.style.webkitMaskSize =
         (initialMaskSize + maskSizeProgress) * 100 + "%";
      requestAnimationFrame(animate);
   };

   useEffect(() => {
      requestAnimationFrame(animate);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <section className={styles.main}>
         <div ref={container} className={styles.container}>
            <div ref={stickyMask} className={styles.stickyMask}>
               <video autoPlay muted loop>
                  <source src="/arko.mp4" type="video/mp4" />
               </video>
            </div>
         </div>
      </section>
   );
}
