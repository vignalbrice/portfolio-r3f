import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import Project from "./Project";
import { atom, useAtom } from "jotai";
import { useCharacterAnimations } from "../hooks/useCharacterAnimations";

export const PROJECTS = [
  {
    title: "Monsters",
    url: "https://ultimate-monsters.netlify.app",
    image: "./assets/projects/ultimate-monsters.png",
    description: "Monsters portal app generated with React Three Fiber",
  },
  {
    title: "ID Custom",
    url: "https://id-custom.com/client/product",
    image: "./assets/projects/id-custom.png",
    description: "Shoes configurator app built with Three.js and Vue 2",
  },
  {
    title: "Password App",
    url: "https://password-generator-netlifyapp.netlify.app/",
    image: "./assets/projects/password-generator.png",
    description: "Password generator app Vanilla.js, HTML5, CSS3",
  },
  {
    title: "Planet Facts",
    url: "https://planet-facts-app.vercel.app/",
    image: "./assets/projects/planet-facts.png",
    description: "Planet fact app made with Vue3",
  },
];
export const currentProjectAtom = atom(0);

const Projects = (props) => {
  const { section } = props;
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);
  const isMobile = window.innerWidth < 768;
  const { setAnimationIndex } = useCharacterAnimations(0);
  useEffect(() => {
    setAnimationIndex(5);
    return () =>
      setTimeout(() => {
        setAnimationIndex(1);
      }, 1000);
  }, [currentProject]);
  return (
    <group position-y={-viewport.height * 2 + 2}>
      {PROJECTS.map((project, i) => (
        <motion.group
          key={i}
          position={[i * 2.5, 0, -3]}
          animate={{
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
