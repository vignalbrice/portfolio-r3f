import React, { useRef } from "react";
import { Sphere, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

const Background = () => {
  const color = useRef({
    color: "#212121",
  });

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          side={THREE.BackSide}
          color={color.current.color}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};

export default Background;
