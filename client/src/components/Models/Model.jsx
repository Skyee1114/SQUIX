import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = () => {
  useFrame(({ camera }) => {
    // console.log(camera.position);
  });
  useThree(({ camera }) => {
    // camera.position.set(camera.position.x, camera.position.y, camera.position.z);
    // console.log(camera.position)
    // camera.lookAt(0, 10, 0);
    // camera.rotation.set([0, 0.2, 0])
  });
  const gltf = useLoader(GLTFLoader, "model/model.glb");

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = false;
      child.material.side = THREE.FrontSide;
    }
  });
  return (
      <primitive
        object={gltf.scene}
        rotation={[0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        position={[0, 2, 0]}
      />
  );
};

export default Model;


