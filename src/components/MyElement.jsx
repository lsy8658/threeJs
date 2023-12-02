import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
export default function MyElement() {
  const refMesh = useRef();
  useFrame((state, delta) => {
    refMesh.current.rotation.y += delta;
  });
  return (
    <>
      <OrbitControls />
      <directionalLight castShadow position={[1, 1, 1]} intensity={0.56} />
      <axesHelper scale={10} />
      <mesh
        ref={refMesh}
        position={[0, 2, 0]}
        rotation-z={THREE.MathUtils.degToRad(45)}
        scale={[2, 1, 1]}
      >
        {/* rotation-y={(45 * Math.PI) / 180} */}
        <boxGeometry />
        <meshStandardMaterial
          color="#e67e22"
          opacity={0.7}
          transparent={true}
        />
        <axesHelper />

        <mesh scale={[0.1, 0.1, 0.1]} position-y={2}>
          {/* <sphereGeometry /> */}
          <coneGeometry />
          <meshStandardMaterial color="red" />
          <axesHelper scale={5} />
        </mesh>
      </mesh>
    </>
  );
}
