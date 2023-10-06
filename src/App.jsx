import {
  PerformanceMonitor,
  Scroll,
  ScrollControls,
  usePerformanceMonitor,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import { Experience } from "./components/Experience";
import Interface from "./components/Interface";
import Loading from "./components/Loading";
import Menu from "./components/Menu";
import ScrollManager from "./components/ScrollManager";
import { framerMotionConfig } from "./config/config";
import { CharacterAnimationsProvider } from "./context/CharacterAnimation";

function App() {
  const [section, setSection] = useState(0);
  const [onMenuOpened, setOnMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setOnMenuOpened(false);
  }, [section]);

  return (
    <>
      <Loading started={started} setStarted={setStarted} />
      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas
          shadows
          camera={{
            position: [0, 3, 10],
            fov: 42,
          }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <color attach="background" args={["rgba(236, 236, 236, 0.882)"]} />
          <ScrollControls pages={4} damping={0.2}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {started && (
                  <CharacterAnimationsProvider>
                    <Experience section={section} onMenuOpened={onMenuOpened} />
                  </CharacterAnimationsProvider>
                )}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          onMenuOpened={onMenuOpened}
          setOnMenuOpened={setOnMenuOpened}
        />
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
