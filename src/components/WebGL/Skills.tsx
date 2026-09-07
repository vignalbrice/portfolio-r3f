import { motion } from "framer-motion-3d";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useDelayedVisibility } from "../../hooks/useDelayedVisibility";

type SkillsProps = {
  section: number;
  officeScaleRatio: number;
  isMobile: boolean;
};

const Skills = ({ section, officeScaleRatio, isMobile }: SkillsProps) => {
  const viewport = useThree((state) => state.viewport);
  const active = section === 1;
  // Les shaders Distort/Wobble et les Float mettent à jour des uniforms à chaque
  // frame : inutile de les rendre quand le groupe est hors écran.
  const visible = useDelayedVisibility(active);

  const restingY = isMobile ? -viewport.height : -1.5 * officeScaleRatio;

  return (
    <motion.group
      visible={visible}
      position={[0, restingY, -10]}
      animate={{
        z: active ? 0 : -10,
        y: active ? -viewport.height : restingY,
      }}
    >
      <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      <Float>
        <mesh position={[-1, -1, -2]}>
          <sphereGeometry args={[1, 32, 16]} />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={0.4}
            speed={active ? 4 : 0}
            color="red"
          />
        </mesh>
      </Float>
      <Float>
        <mesh position={[-3, 2, -2]} scale={[1, 1, -1]}>
          <sphereGeometry args={[1, 32, 16]} />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={1}
            speed={active ? 5 : 0}
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
            speed={active ? 5 : 0}
            color="blue"
          />
        </mesh>
      </Float>
    </motion.group>
  );
};

export default Skills;
