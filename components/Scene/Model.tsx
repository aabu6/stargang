// import React, { useRef } from "react";
// import { useGLTF, Text } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";

// export function Model(props) {
//    const { nodes, materials } = useGLTF("/medias/stargang.glb");
//    const { viewport } = useThree();
//    const star = useRef(null);
//    useFrame(() => {
//       star.current.rotation.x += 0.02;
//    });
//    return (
//       <group {...props} dispose={null} scale={viewport.width / 6.75}>
//          <Text
//             font={"/vanguard.otf"}
//             position={[0, 0, -1]}
//             fontSize={1.9}
//             color="black"
//             anchorX="center"
//             anchorY="middle"
//          >
//             STAR GANG{" "}
//          </Text>{" "}
//          <mesh
//             ref={star}
//             castShadow
//             receiveShadow
//             geometry={nodes.mesh_0.geometry}
//             material={nodes.mesh_0.material}
//          />
//       </group>
//    );
// }

// useGLTF.preload("/medias/stargang.glb");
import React, { JSX, useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, Mesh } from "three";

type GLTFResult = {
   nodes: {
      mesh_0: Mesh;
   };
   materials: Record<string, any>;
};

type ModelProps = JSX.IntrinsicElements["group"];

export function Model(props: ModelProps) {
   const { nodes, materials } = useGLTF("/medias/stargang.glb") as any;
   const { viewport } = useThree();
   const star = useRef<Mesh>(null);

   useFrame(() => {
      if (star.current) {
         star.current.rotation.x += 0.02;
      }
   });

   return (
      <group {...props} dispose={null} scale={viewport.width / 6.75}>
         <Text
            font={"/vanguard.otf"}
            position={[0, 0, -1]}
            fontSize={1.9}
            color="black"
            anchorX="center"
            anchorY="middle"
         >
            STAR GANG{" "}
         </Text>
         <mesh
            ref={star}
            castShadow
            receiveShadow
            geometry={nodes.mesh_0.geometry}
            material={nodes.mesh_0.material}
         />
      </group>
   );
}

useGLTF.preload("/medias/stargang.glb");
