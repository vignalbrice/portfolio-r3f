import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Center,
  Environment,
  Image,
  MeshPortalMaterial,
  RoundedBox,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import * as THREE from "three";
const Project = (props) => {
  const { project, hightlighted } = props;
  const background = useRef();
  const bgOpacity = useMotionValue(0.4);
  const [hovered, setHover] = useState(false);
  const handlePointerOver = (event) => {
    setHover(true);
    const edges = new EdgesGeometry(meshRef.current.geometry);
    const material = new THREE.LineBasicMaterial({
      color: new Color("white"),
    });
    const lineSegments = new LineSegments(edges, material);
    meshRef.current.add(lineSegments);
  };

  const handlePointerOut = (event) => {
    setHover(false);
    meshRef.current?.remove(
      meshRef.current.children[meshRef.current.children.length - 1]
    );
  };

  useEffect(() => {
    animate(bgOpacity, hightlighted ? 0.7 : 0.4);
  }, [hightlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });
  return (
    <group
      {...props}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[5.5, 4.5]} />
        <meshBasicMaterial color="#444" transparent opacity={0.4} />
      </mesh>
      <Image
        castShadow
        scale={[5, 2.5, 0.8]}
        url={project.image}
        toneMapped={false}
        position-y={0.75}
        position-z={0.05}
        onClick={() => window.open(project.url, "_blank")}
      />
      <Text
        maxWidth={6}
        anchorX="center"
        anchorY={"middle"}
        fontSize={0.5}
        // position-x={0.55}
        position-y={-1.2}
        position-z={0}
        color={"#FFFFFF"}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={6}
        anchorX="center"
        anchorY="middle"
        fontSize={0.15}
        // position-x={0.55}
        position-y={-1.6}
        position-z={0}
        color={"#FFFFFF"}
      >
        {project.description}
      </Text>
    </group>
  );
};

export default Project;
