import { useScroll } from "@react-three/drei";
import { GroupProps, useFrame, useThree } from "@react-three/fiber";
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
import { useIsMobile } from "../hooks/useIsMobile";

type ExperienceProps = {
  onMenuOpened: boolean;
  section: number;
};

export const Experience = (props: ExperienceProps) => {
  // Sélecteur plutôt que useThree() complet : on ne se réabonne qu'au viewport
  // au lieu de re-render à chaque changement du store R3F.
  const viewport = useThree((state) => state.viewport);
  const isMobile = useIsMobile();
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const { onMenuOpened } = props;
  const [section, setSection] = useState(0);
  const data = useScroll();

  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);
  const characterContainerAboutRef = useRef<THREE.Group | undefined>(undefined);
  const characterGroup = useRef<THREE.Group | undefined>(undefined);
  const characterAnimations = useCharacterAnimations();
  useEffect(() => {
    characterAnimations?.setAnimationIndex(2);
    setTimeout(() => {
      characterAnimations?.setAnimationIndex(section === 0 ? 0 : 1);
      section === 1 && characterAnimations?.setAnimationIndex(3);
    }, 600);
  }, [section]);

  useEffect(() => {
    setTimeout(() => {
      if (section === 3) characterAnimations?.setAnimationIndex(4);
    }, 5000);
    return () => {
      characterAnimations?.setAnimationIndex(1);
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
    let curSection = Math.floor(
      (
        data as unknown as {
          scroll: { current: number };
        }
      ).scroll.current * data.pages
    );

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera?.lookAt(cameraLookAtX.get(), 2, 0);

    if (
      section === 0 &&
      characterContainerAboutRef.current &&
      characterGroup.current
    ) {
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
        ref={characterGroup as unknown as React.Ref<GroupProps>}
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
            // Sur mobile les cartes de stacks occupent toute la largeur en
            // haut de l'écran : on descend et on réduit l'avatar pour qu'il
            // ne passe plus derrière le texte.
            // À z=7 le personnage est très proche de la caméra : 1 unité vaut
            // ~43 % de la hauteur d'écran. D'où des décalages volontairement
            // petits, pour le poser en bas à droite sous la grille d'icônes.
            y: isMobile ? -viewport.height + 1.81 : -viewport.height + 1.4,
            x: isMobile ? 0.38 : 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: isMobile ? 0.55 : 1,
            scaleY: isMobile ? 0.55 : 1,
            scaleZ: isMobile ? 0.55 : 1,
          },
          2: {
            // La carte projet est mise à l'échelle du viewport (voir Projects) :
            // sur mobile l'avatar se décale vers le bord pour ne pas la couvrir.
            x: isMobile ? -1.9 : -2,
            y: isMobile ? -viewport.height * 2 - 0.9 : -viewport.height * 2 + 0.1,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
          3: {
            // Le formulaire est pleine largeur sur mobile : l'avatar descend
            // derrière lui plutôt que de se superposer au visage.
            y: isMobile ? -viewport.height * 3 - 1.2 : -viewport.height * 3 + 1.5,
            x: isMobile ? 1.1 : 0.2,
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
          ref={characterContainerAboutRef as React.Ref<THREE.Group>}
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
