import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Fragment, useEffect, useState, useRef } from "react";
import { Office } from "./Office";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../config/config";
import Skills from "./WebGL/Skills";
import { Avatar } from "./Avatar";
import Projects from "./Projects";
import Background from "./Background";
import { useCharacterAnimations } from "../hooks/useCharacterAnimations";

export const Experience = (props) => {
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const { onMenuOpened } = props;
  const [section, setSection] = useState(0);
  const data = useScroll();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  const characterContainerAboutRef = useRef();
  const characterGroup = useRef();
  const { setAnimationIndex } = useCharacterAnimations(0);
  useEffect(() => {
    setAnimationIndex(2);
    setTimeout(() => {
      setAnimationIndex(section === 0 ? 0 : 1);
      section === 1 && setAnimationIndex(3);
    }, 600);
  }, [section]);

  useEffect(() => {
    setTimeout(() => {
      if (section === 3) setAnimationIndex(4);
    }, 5000);
    return () => {
      setAnimationIndex(1);
    };
  }, []);

  useEffect(() => {
    animate(cameraPositionX, onMenuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, onMenuOpened ? 4 : 0, {
      ...framerMotionConfig,
    });
  }, [onMenuOpened]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera?.lookAt(cameraLookAtX.get(), 2, 0);

    if (section === 0) {
      characterContainerAboutRef.current.position.setY(isMobile ? 1.15 : 1.05);
      characterContainerAboutRef.current.getWorldPosition(
        characterGroup.current.position
      );
    }
  });

  return (
    <Fragment>
      <Background />
      <motion.group
        ref={characterGroup}
        rotation={[3.08, 1.1050496325348338, -3.11918307018295]}
        animate={"" + section}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: officeScaleRatio - 0.15,
            scaleY: officeScaleRatio - 0.15,
            scaleZ: officeScaleRatio - 0.15,
          },
          1: {
            y: -viewport.height + 1.4,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: isMobile ? 1.2 : 1,
            scaleY: isMobile ? 1.2 : 1,
            scaleZ: isMobile ? 1.2 : 1,
          },
          2: {
            x: isMobile ? -1.4 : -2,
            y: -viewport.height * 2 + 0.1,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
          3: {
            y: -viewport.height * 3 + 1.5,
            x: 0.2,
            z: isMobile ? 8 : 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
          },
        }}
      >
        <Avatar />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[
          isMobile ? 0 : 1.5 * officeScaleRatio,
          isMobile ? -viewport.height / 30 : 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height / 40 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Office section={section} position-y={1} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[-0.05, 0.13, -0.68]}
          rotation={[3.12, 0.32, 3.13]}
          scale={0.76}
        ></group>
      </motion.group>
      <Skills
        section={section}
        isMobile={isMobile}
        officeScaleRatio={officeScaleRatio}
      />
      <Projects section={section} />
    </Fragment>
  );
};
