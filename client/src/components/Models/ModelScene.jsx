import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

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
           
            <directionalLight position={[0.36, -3.12, 3.55]} intensity={1.5} color={lightColor}/>            
             
            <OrbitControls
              ref={controls} args={[camera, gl.domElement]}
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              
              target={[0, 17, 0]}           
            />
          </group>          
  );
};

export default ModelScene;
