import { Box, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";

export default function MyElement() {
  const refMesh = useRef();
  const refWireMesh = useRef();
  const { radiusTop, radiusBottom, height } = useControls({
    radiusTop: { value: 1, min: 0.1, max: 5, step: 0.01 },
    radiusBottom: { value: 1, min: 0.1, max: 5, step: 0.01 },
    height: { value: 1, min: 0.1, max: 5, step: 0.01 },
  });
  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry;
  }, [radiusTop, radiusBottom, height]);
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 3]} intensity={0.5} />
      <mesh ref={refMesh}>
        <cylinderGeometry args={[radiusTop, radiusBottom, height]} />
        <meshStandardMaterial color="#1abc9c" />
      </mesh>
      <mesh ref={refWireMesh}>
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>
      <axesHelper scale={10} />
    </>
  );
}
// https://www.youtube.com/watch?v=pDsf-mrjBHo&list=PLe6NQuuFBu7HUeJkowKRkLWwkdOlhwrje&index=7
{
  /* <mesh ref={refMesh}>
<boxGeometry
  args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]}
/>
<meshStandardMaterial color="#1abc9c" />
</mesh> */
}
