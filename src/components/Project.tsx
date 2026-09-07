import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { Image, Text } from "@react-three/drei";
import { animate, useMotionValue } from "framer-motion";
import * as THREE from "three";

type ProjectProps = {
  project: {
    title: string;
    url: string;
    image: string;
    description: string;
  };
  hightlighted: boolean;
};

// Polices servies depuis /public : évite un aller-retour vers le CDN de troika.
const FONT_BOLD = "/fonts/Manrope/static/Manrope-Bold.ttf";
const FONT_REGULAR = "/fonts/Manrope/static/Manrope-Regular.ttf";

const PLANE_WIDTH = 5.5;
const PLANE_HEIGHT = 4.5;

const Project = (props: ProjectProps) => {
  const { project, hightlighted } = props;
  const bgOpacity = useMotionValue(0.4);
  const [hovered, setHover] = useState(false);
  const background = useRef<THREE.Mesh | null>(null);

  const openProject = useCallback(
    () => window.open(project.url, "_blank", "noopener,noreferrer"),
    [project.url]
  );

  // Le contour du survol était recréé (EdgesGeometry + matériau + LineSegments)
  // à chaque pointerover et jamais libéré : fuite mémoire GPU garantie.
  // On le construit une fois et on ne fait que basculer sa visibilité.
  const outline = useMemo(() => {
    const plane = new THREE.PlaneGeometry(PLANE_WIDTH, PLANE_HEIGHT);
    const edges = new THREE.EdgesGeometry(plane);
    plane.dispose();
    return {
      geometry: edges,
      material: new THREE.LineBasicMaterial({ color: "#FFFFFF" }),
    };
  }, []);

  useEffect(
    () => () => {
      outline.geometry.dispose();
      outline.material.dispose();
    },
    [outline]
  );

  useEffect(() => {
    // On écrit l'opacité au fil de l'animation via un abonnement, au lieu de
    // relire la motion value dans un useFrame qui tournait à chaque frame.
    const unsubscribe = bgOpacity.on("change", (value) => {
      const material = background.current?.material as
        | THREE.Material
        | undefined;
      if (material) material.opacity = value;
    });
    animate(bgOpacity, hightlighted ? 0.7 : 0.4);
    return unsubscribe;
  }, [hightlighted, bgOpacity]);

  return (
    <group
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <mesh position-z={-0.001} onClick={openProject} ref={background}>
        <planeGeometry args={[PLANE_WIDTH, PLANE_HEIGHT]} />
        <meshBasicMaterial color="#444" transparent opacity={0.4} />
      </mesh>
      <lineSegments
        visible={hovered}
        geometry={outline.geometry}
        material={outline.material}
      />
      <Image
        scale={[5, 2.5]}
        url={project.image}
        toneMapped={false}
        position-y={0.75}
        position-z={0.05}
        onClick={openProject}
      />
      <Text
        font={FONT_BOLD}
        maxWidth={6}
        anchorX="center"
        anchorY={"middle"}
        fontSize={0.5}
        position-y={-1.2}
        position-z={0}
        color={"#FFFFFF"}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        font={FONT_REGULAR}
        maxWidth={6}
        anchorX="center"
        anchorY="middle"
        fontSize={0.15}
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
