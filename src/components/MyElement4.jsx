import React from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useEffect } from "react";
export default function MyElement4() {
  const ref1 = useRef();
  const ref2 = useRef();
  useEffect(() => {
    ref2.current.material = ref1.current.material;
  }, []);
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh ref={ref1} position={[0.7, 0, 0]}>
        <boxGeometry />
        <meshPhongMaterial
          visible={true} // 재질을 보이게 할건지 안할건지
          transparent={true} // 재질에 대한 투명 효과를 사용할 것인지
          opacity={0.5}
          depthTest={true}
          // 렌더링 되고있는 mesh의 픽셀을 화면에 그릴 때 depthBuffer 값을 이용해서 검수할 것인지에 대한 여부
          depthWrite={true}
          // 렌더링 되고있는 mesh의 픽셀에 대한 z 값을 depthBuffer에 기록할 것인지에 대한 여부

          color="yellow"
          wireframe={false}
          side={THREE.FrontSide} // mesh를 구성하는 면에 대해서 앞면만 아니면 뒷면 아니면 앞면과 뒷면을 렌더링할 것인지를 지정
        />
      </mesh>

      <mesh ref={ref2} position={[-0.7, 0, 0]}>
        <boxGeometry />
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  );
}
