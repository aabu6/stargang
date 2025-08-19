import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cyl from "./Cyl";
import {
   Bloom,
   EffectComposer,
   ToneMapping,
} from "@react-three/postprocessing";

function SceneCylinder() {
   return (
      <Canvas flat camera={{ fov: 22, position: [0, 0, 5] }}>
         <OrbitControls enableZoom={false} />
         <ambientLight />
         <Cyl />
         <EffectComposer>
            <Bloom
               mipmapBlur
               intensity={12.0}
               luminanceThresHold={0}
               luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
         </EffectComposer>
      </Canvas>
   );
}

export default SceneCylinder;
