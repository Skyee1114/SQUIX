import { Canvas,useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import { Group } from "three";

const lightColor = "#fff0c7"

const ModelScene = () => {
  const controls = useRef();
  const { camera, gl } = useThree();
  camera.position.set(0, 10, 20); // Set the initial camera position
//   camera.rotation.set(0, 1, 0);
  useFrame(() => controls.current.update());

  return (
        <group position={[0, 0, 0]}>
            <Model />
            <directionalLight position={[-0.2, 2.2, 4.2]} intensity={1.5} color={lightColor}/>
            <directionalLight position={[1, 2.2, 4.2]} intensity={1.5} color={lightColor}/>
            <directionalLight position={[1, 2.2, -4.2]} intensity={1.5} color={lightColor}/>
            {/* <directionalLight position={[1, -2.2, 4.2]} intensity={1.5} />


            {/* <directionalLight position={[-1, -2.2, 4.2]} intensity={1.5} />
            <directionalLight position={[5.8, 0.4, -0.2]} intensity={1.5} />
            <directionalLight position={[-1, -2.2, -4.2]} intensity={2} /> */}


            <directionalLight position={[0.36, -3.12, 3.55]} intensity={1.5} color={lightColor}/>
            
              
            
            {/* <axesHelper args={[10, 10, 10]} /> */}
            <OrbitControls
              ref={controls} args={[camera, gl.domElement]}
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              
              target={[0, 17, 0]}
            // minPolarAngle={Math.PI * 4.35 / 10}
            // maxPolarAngle={Math.PI * 4.35 / 10}
            />
          </group>
          
  );
};

export default ModelScene;
