import { OrbitControls, Stage } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { Table } from "./Table";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export const Experience = () => {
  const { takeScreenshot, setTakeScreenshot } = useConfigurator(); // Force rerender the stage & shadows
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    console.log(takeScreenshot);
    if (takeScreenshot) {
      screnshot();
      setTakeScreenshot(false);
    }

  }, [takeScreenshot]);


  const screnshot = () => {
    const link = document.createElement("a");
    link.setAttribute('download', 'screnshot.png');
    link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
    link.click();
  }

  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
        <Table />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};
