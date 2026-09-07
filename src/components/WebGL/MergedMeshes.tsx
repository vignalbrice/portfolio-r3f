import { useEffect, useMemo } from "react";
import * as THREE from "three";
import {
  deinterleaveGeometry,
  mergeGeometries,
} from "three/examples/jsm/utils/BufferGeometryUtils.js";

type MergedMeshesProps = Omit<JSX.IntrinsicElements["mesh"], "geometry"> & {
  geometries: THREE.BufferGeometry[];
  material: THREE.Material;
};

/**
 * Ramène un attribut à un Float32Array non normalisé.
 *
 * meshopt quantifie chaque mesh indépendamment : le même attribut peut être
 * stocké en Uint8 dans une géométrie et en Uint16 dans une autre, ce que
 * mergeAttributes refuse de fusionner.
 */
const toFloat32 = (attribute: THREE.BufferAttribute) => {
  const { array, normalized, itemSize } = attribute;
  if (array instanceof Float32Array && !normalized) return attribute;

  // @types/three type `array` en ArrayLike<number> ; denormalize attend un
  // TypedArray (il lit BYTES_PER_ELEMENT pour connaître l'échelle).
  const source = array as Exclude<
    Parameters<typeof THREE.MathUtils.denormalize>[1],
    undefined
  >;
  const values = new Float32Array(source.length);
  for (let i = 0; i < source.length; i++) {
    values[i] = normalized
      ? THREE.MathUtils.denormalize(source[i], source)
      : source[i];
  }
  return new THREE.BufferAttribute(values, itemSize);
};

/** Copie jetable, dé-entrelacée et dé-quantifiée, prête à être fusionnée. */
const toMergeable = (geometry: THREE.BufferGeometry) => {
  const copy = geometry.clone();
  deinterleaveGeometry(copy);
  for (const name of Object.keys(copy.attributes)) {
    copy.setAttribute(
      name,
      toFloat32(copy.getAttribute(name) as THREE.BufferAttribute)
    );
  }
  return copy;
};

/**
 * Fusionne plusieurs géométries partageant le même matériau et la même
 * transformation en un seul mesh : 1 draw call au lieu de N.
 *
 * Si la fusion est impossible (attributs incompatibles entre géométries),
 * on retombe sur un rendu mesh par mesh pour ne rien casser visuellement.
 */
export const MergedMeshes = ({
  geometries,
  material,
  ...props
}: MergedMeshesProps) => {
  const merged = useMemo(() => {
    if (geometries.length < 2) return null;

    // On travaille sur des copies jetables plutôt que sur les géométries du
    // cache GLTF, qui peuvent être partagées ailleurs.
    const copies = geometries.map(toMergeable);
    const result = mergeGeometries(copies, false);
    copies.forEach((copy) => copy.dispose());
    return result;
  }, [geometries]);

  // La géométrie fusionnée est créée à l'exécution : c'est à nous de la libérer.
  useEffect(() => {
    if (!merged) return;
    return () => merged.dispose();
  }, [merged]);

  if (!merged) {
    return (
      <group {...(props as JSX.IntrinsicElements["group"])}>
        {geometries.map((geometry, i) => (
          <mesh key={i} geometry={geometry} material={material} />
        ))}
      </group>
    );
  }

  return <mesh {...props} geometry={merged} material={material} />;
};

export default MergedMeshes;
