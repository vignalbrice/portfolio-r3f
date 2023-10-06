import React, { useState } from "react";
import {
  useGLTF,
  useTexture,
  Center,
  Decal,
  Text3D,
  OrbitControls,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Text = ({ children }) => {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <Center position={[-width / 2 + 8, height / 2 - 0.5, 1]} rotation-y={0}>
      <Text3D
        letterSpacing={-0.06}
        height={0.5}
        curveSegments={32}
        size={0.5}
        font="/fonts/Manrope ExtraLight_Regular.json"
      >
        {children}
        <meshStandardMaterial color="white" />
      </Text3D>
    </Center>
  );
};

export default Text;
