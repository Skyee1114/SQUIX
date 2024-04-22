import { Canvas } from "@react-three/fiber";
import ModelScene from "./ModelScene";

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
