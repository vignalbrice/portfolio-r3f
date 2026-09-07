import {
  AdaptiveEvents,
  PerformanceMonitor,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import * as React from "react";
import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import { Experience } from "./components/Experience";
import Interface from "./components/Interface";
import Loading from "./components/Loading";
import Menu from "./components/Menu";
import ScrollManager from "./components/ScrollManager";
import { framerMotionConfig } from "./config/config";
import { CharacterAnimationsProvider } from "./context/CharacterAnimation";

// Leva n'est qu'un outil de debug : chargé uniquement en dev, absent du bundle de prod.
const DevTools = import.meta.env.DEV
  ? lazy(() => import("leva").then((m) => ({ default: () => <m.Leva hidden /> })))
  : null;

const MAX_DPR = 1.5;

function App() {
  const [section, setSection] = useState(0);
  const [onMenuOpened, setOnMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);
  const [dpr, setDpr] = useState(MAX_DPR);

  useEffect(() => {
    setOnMenuOpened(false);
  }, [section]);

  // Baisse la résolution de rendu si le GPU décroche, la remonte s'il tient.
  const onIncline = useCallback(() => setDpr(MAX_DPR), []);
  const onDecline = useCallback(() => setDpr(1), []);

  return (
    <React.Fragment>
      <Loading started={started} setStarted={setStarted} />
      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas
          camera={{
            position: [0, 3, 10],
            fov: 42,
          }}
          dpr={dpr}
          performance={{ min: 0.5 }}
          gl={{ powerPreference: "high-performance", antialias: true }}
        >
          {/* 236/255 en composantes r,g,b : l'alpha de l'ancien "rgba(...)" était
              de toute façon ignoré par THREE.Color, et la surcharge (r,g,b) est
              la seule que TypeScript retient pour `args`. */}
          <color attach="background" args={[0.9255, 0.9255, 0.9255]} />
          <PerformanceMonitor onIncline={onIncline} onDecline={onDecline}>
            <AdaptiveEvents />
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
          </PerformanceMonitor>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          onMenuOpened={onMenuOpened}
          setOnMenuOpened={setOnMenuOpened}
        />
        <Cursor />
      </MotionConfig>
      {DevTools && (
        <Suspense fallback={null}>
          <DevTools />
        </Suspense>
      )}
    </React.Fragment>
  );
}

export default App;
