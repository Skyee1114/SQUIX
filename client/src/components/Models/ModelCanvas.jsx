import { Canvas,useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import { Group } from "three";
import ModelScene from "./ModelScene";

const lightColor = "#fff0c7"

const ModelCanvas = () => {

  return (
    <div className="h-[600px] md:h-[800px] 2xl:h-[1500px] mx-auto ">
      <Canvas className="w-[250px] md:w-[300px] 2xl:w-[600px] top-[-200px] md:top-[-300px] 2xl:top-[-630px] " >
          <ModelScene/>
      </Canvas>
    </div>
  );
};

export default ModelCanvas;
