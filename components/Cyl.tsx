import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
export default function Cyl() {
   let tex = useTexture("/cylinder.png");
   let cyl = useRef<THREE.Mesh>(null);

   useFrame((delta: any) => {
      if (cyl.current) {
         cyl.current.rotation.y += delta;
      }
   });

   return (
      <group rotation={[0, 1.4, 0.5]}>
         <mesh ref={cyl}>
            <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
            <meshStandardMaterial
               map={tex}
               transparent
               side={THREE.DoubleSide}
            />
         </mesh>
      </group>
   );
}
