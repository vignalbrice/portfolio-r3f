import React from "react";
import { motion } from "framer-motion-3d";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
const Skills = (props) => {
  const { section, officeScaleRatio, isMobile } = props;
  const { viewport } = useThree();

  return (
    <motion.group
      position={[0, isMobile ? -viewport.height : -1.5 * officeScaleRatio, -10]}
      animate={{
        z: section === 1 ? 0 : -10,
        y:
          section === 1
            ? -viewport.height
            : isMobile
            ? -viewport.height
            : -1.5 * officeScaleRatio,
      }}
    >
      <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      <Float>
        <mesh position={[-1, -1, -2]} scale={[1, 1, 1]}>
          <sphereGeometry />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={0.4}
            speed={4}
            color="red"
          />
        </mesh>
      </Float>
      <Float>
        <mesh position={[-3, 2, -2]} scale={[1, 1, -1]}>
          <sphereGeometry />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={1}
            speed={5}
            color="yellow"
          />
        </mesh>
      </Float>
      <Float>
        <mesh position={[-1.4, 1.4, 1.4]} scale={[-1, -1, -1]}>
          <boxGeometry />
          <MeshWobbleMaterial
            opacity={0.8}
            transparent
            factor={1}
            speed={5}
            color="blue"
          />
        </mesh>
      </Float>
    </motion.group>
  );
};

export default Skills;
