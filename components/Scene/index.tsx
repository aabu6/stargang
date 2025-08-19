"use client";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Environment, Html, OrbitControls } from "@react-three/drei";

export default function Index() {
   return (
      <>
         <Canvas
            className="bg-[#fbfaf4]"
            camera={{ position: [0, 2, 5], fov: 50 }}
         >
            <OrbitControls enableDamping={true} enableZoom={false} />

            <Model />
            <directionalLight intensity={2} position={[0, 3, 4]} />
            <Environment preset="city" />
         </Canvas>
      </>
   );
}

// // blur animations
// "use client";
// import { Canvas } from "@react-three/fiber";
// import { Model } from "./Model";
// import { Environment, OrbitControls, useProgress } from "@react-three/drei";
// import { motion, AnimatePresence } from "framer-motion";

// function CanvasWrapper() {
//    return (
//       <Canvas className="bg-white" camera={{ position: [0, 2, 5], fov: 50 }}>
//          <OrbitControls enableDamping={true} enableZoom={false} />
//          <Model />
//          <directionalLight intensity={2} position={[0, 3, 4]} />
//          <Environment preset="city" />
//       </Canvas>
//    );
// }

// export default function Index() {
//    const { progress } = useProgress(); // model loading progress (0–100)

//    return (
//       <AnimatePresence>
//          {progress === 100 && (
//             <motion.div
//                key="canvas"
//                initial={{ filter: "blur(20px)", opacity: 0 }}
//                animate={{
//                   filter: "blur(0px)",
//                   opacity: 1,
//                }}
//                transition={{
//                   filter: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }, // smooth easeOutExpo-like
//                   opacity: {
//                      duration: 1.8,
//                      delay: 0.3,
//                      ease: [0.22, 1, 0.36, 1],
//                   }, // stagger opacity after blur starts
//                }}
//                style={{ width: "100%", height: "100vh" }}
//             >
//                <CanvasWrapper />
//             </motion.div>
//          )}
//       </AnimatePresence>
//    );
// }
