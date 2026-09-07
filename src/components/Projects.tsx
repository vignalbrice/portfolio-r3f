import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import Project from "./Project";
import { atom, useAtom } from "jotai";
import { useCharacterAnimations } from "../hooks/useCharacterAnimations";

export const PROJECTS = [
  {
    title: "Monsters",
    url: "https://ultimate-monsters.netlify.app",
    image: "./assets/projects/ultimate-monsters.webp",
    description: "Monsters portal app generated with React Three Fiber",
  },
  {
    title: "ID Custom",
    url: "https://id-custom.com/client/product",
    image: "./assets/projects/id-custom.webp",
    description: "Shoes configurator app built with Three.js and Vue 2",
  },
  {
    title: "Password App",
    url: "https://password-generator-netlifyapp.netlify.app/",
    image: "./assets/projects/password-generator.webp",
    description: "Password generator app Vanilla.js, HTML5, CSS3",
  },
  {
    title: "Planet Facts",
    url: "https://planet-facts-app.vercel.app/",
    image: "./assets/projects/planet-facts.webp",
    description: "Planet fact app made with Vue3",
  },
];
export const currentProjectAtom = atom(0);

type ProjectsProps = {
  section: any;
};

// Largeur d'une carte projet en unités monde, marge comprise.
const CARD_WIDTH = 5.5;
const CARD_MARGIN = 1.5;

const Projects = (_props: ProjectsProps) => {
  const viewport = useThree((state) => state.viewport);
  const [currentProject] = useAtom(currentProjectAtom);
  // Sur un écran portrait, une carte de 5,5 unités dépassait largement du
  // viewport : le titre et la description étaient tronqués. On la met à
  // l'échelle de la largeur disponible, sans jamais agrandir sur desktop.
  const scale = Math.min(1, viewport.width / (CARD_WIDTH + CARD_MARGIN));
  const characterAnimations = useCharacterAnimations();
  useEffect(() => {
    characterAnimations!.setAnimationIndex(5);
    return () => {
      setTimeout(() => {
        characterAnimations!.setAnimationIndex(1);
      }, 1000);
    };
  }, [currentProject]);
  return (
    <group position-y={-viewport.height * 2 + 2} scale={scale}>
      {PROJECTS.map((project, i) => (
        <motion.group
          key={i}
          position={[i * 2.5, 0, -3]}
          animate={{
            // Écart en unités locales : la mise à l'échelle du groupe parent
            // conserve automatiquement le cadrage.
            x: 0 + (i - currentProject) * 6.5,
            y: currentProject === i ? 0 : -0.1,
            z: currentProject === i ? -1 : -3,
          }}
        >
          <Project project={project} hightlighted={i === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};

export default Projects;
