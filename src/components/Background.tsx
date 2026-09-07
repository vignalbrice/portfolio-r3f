import * as THREE from "three";

const BACKGROUND_COLOR = "#212121";

/**
 * Simple sphère de fond vue de l'intérieur. 16x12 segments suffisent pour une
 * couleur unie, et le matériau Basic évite tout calcul d'éclairage.
 */
const Background = () => (
  <mesh scale={30}>
    <sphereGeometry args={[1, 16, 12]} />
    <meshBasicMaterial
      side={THREE.BackSide}
      color={BACKGROUND_COLOR}
      toneMapped={false}
    />
  </mesh>
);

export default Background;
