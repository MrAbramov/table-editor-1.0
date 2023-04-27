import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Html } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }} gl={{ preserveDrawingBuffer: true }}>
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
