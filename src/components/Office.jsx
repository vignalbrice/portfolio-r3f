/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/room.gltf --output src/components/Room.jsx -r public
*/

import React from "react";
import * as THREE from "three";
import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export function Office(props) {
  const { section } = props;
  const { nodes } = useGLTF("/models/office.glb");
  const texture = useTexture("textures/Baked.jpg");
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  const textureVSCode = useVideoTexture("textures/vscode.mp4");
  // textureVSCode.rotation = 1.4;
  textureVSCode.center = new THREE.Vector2(4, 6);
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0, {
      duration: 0.8,
    });
  }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        position={[0.05, 0.67, -1.34]}
        rotation={[-0.3, -1.52, -0.24]}
        scale={0.01}
      >
        <meshBasicMaterial map={textureVSCode} toneMapped={false} />
      </mesh>
      <group name="Plane" scale={1.62}>
        <mesh
          name="Plane_1"
          geometry={nodes.Plane_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane_2"
          geometry={nodes.Plane_2.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Mouse"
        geometry={nodes.Mouse.geometry}
        material={textureMaterial}
        position={[0.26, 0.65, -1.16]}
        scale={0}
      />

      <motion.group
        name="CoffeTable"
        position={[1.21, 0.37, 0.69]}
        rotation={[2.44, -1.55, 2.44]}
        scale={0}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
      >
        <mesh
          name="CoffeTable_1"
          geometry={nodes.CoffeTable_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="CoffeTable_2"
          geometry={nodes.CoffeTable_2.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        name="Cubone"
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 0.44 : 0,
        }}
        position={[0.6, 1.85, -1.28]}
        rotation={[-3.1, -0.3, -3.13]}
      >
        <mesh geometry={nodes.Cubone_1.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Cubone_2.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Cubone_3.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Cubone_4.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Cubone_5.geometry} material={textureMaterial} />
      </motion.group>
      <group
        name="Desk"
        position={[-0.07, 0.09, -1.22]}
        rotation={[2.87, -1.55, 2.87]}
        scale={0.59}
      >
        <mesh geometry={nodes.Desk_1.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Desk_2.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Desk_3.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Desk_4.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Desk_5.geometry} material={textureMaterial} />
      </group>
      <motion.group
        name="Speaker"
        position={[-1.23, 0.08, -1.18]}
        rotation={[-0.05, 0.78, 0.03]}
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 32.41 : 0,
        }}
      >
        <mesh
          name="speaker004"
          geometry={nodes.speaker004.geometry}
          material={textureMaterial}
        />
        <mesh
          name="speaker004_1"
          geometry={nodes.speaker004_1.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        name="Switch"
        position={[0.36, 1.83, -0.02]}
        rotation={[0.05, 0.02, 0]}
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 0.06 : 0,
        }}
      >
        <mesh
          name="Cube-Mesh"
          geometry={nodes["Cube-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Cube-Mesh_1"
          geometry={nodes["Cube-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Cube-Mesh_2"
          geometry={nodes["Cube-Mesh_2"].geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        name="iMac"
        position={[0.05, 0.67, -1.33]}
        rotation={[-0.3, -1.52, -0.24]}
        animate={{
          scale: section === 0 ? 0.01 : 0,
        }}
        scale={0}
      >
        <mesh
          name="iMac_1"
          geometry={nodes.iMac_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_1"
          geometry={nodes.iMac_1_1.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        name="Cardboard_Boxes"
        position={[0.61, 0.09, 1.22]}
        animate={{
          scale: section === 0 ? 148.8 : 0,
        }}
      >
        <mesh
          name="Cardboard_Boxes_1"
          geometry={nodes.Cardboard_Boxes_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Cardboard_Boxes_2"
          geometry={nodes.Cardboard_Boxes_2.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        name="Drum"
        position={[-0.98, 0.4, 0.67]}
        rotation={[-1.6, 0.04, -1.45]}
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 55.38 : 0,
        }}
      >
        <mesh
          name="DrumSet1"
          geometry={nodes.DrumSet1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="DrumSet1_1"
          geometry={nodes.DrumSet1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="DrumSet1_2"
          geometry={nodes.DrumSet1_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="DrumSet1_3"
          geometry={nodes.DrumSet1_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="DrumSet1_4"
          geometry={nodes.DrumSet1_4.geometry}
          material={textureMaterial}
        />
        <mesh
          name="DrumSet1_5"
          geometry={nodes.DrumSet1_5.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <group name="Keyboard" position={[-0.01, 0.66, -1.15]} scale={0.16}>
        <mesh
          name="Keyboard_1"
          geometry={nodes.Keyboard_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Keyboard_2"
          geometry={nodes.Keyboard_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Keyboard_3"
          geometry={nodes.Keyboard_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Keyboard_4"
          geometry={nodes.Keyboard_4.geometry}
          material={textureMaterial}
        />
      </group>
      <motion.group
        name="Lamp"
        animate={{
          scale: section === 0 ? 0.26 : 0,
        }}
        position={[-0.38, 0.8, -1.33]}
        scale={[0, 0, 0]}
      >
        <mesh
          name="Lamp_1"
          geometry={nodes.Lamp_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Lamp_2"
          geometry={nodes.Lamp_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Lamp_3"
          geometry={nodes.Lamp_3.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <group name="Shelf" position={[0.4, 1.46, -1.35]} scale={0.35}>
        <mesh
          name="SM_ShelfSM_Shelf1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="SM_ShelfSM_Shelf1_1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Shelf_Clutter"
        position={[-1.44, 1.27, 0.96]}
        rotation={[-0.93, -1.53, -0.94]}
        scale={56.33}
      >
        <mesh
          name="Shelf_Clutter_1"
          geometry={nodes.Shelf_Clutter_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_2"
          geometry={nodes.Shelf_Clutter_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_3"
          geometry={nodes.Shelf_Clutter_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_4"
          geometry={nodes.Shelf_Clutter_4.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_5"
          geometry={nodes.Shelf_Clutter_5.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_6"
          geometry={nodes.Shelf_Clutter_6.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_7"
          geometry={nodes.Shelf_Clutter_7.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_8"
          geometry={nodes.Shelf_Clutter_8.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_9"
          geometry={nodes.Shelf_Clutter_9.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_10"
          geometry={nodes.Shelf_Clutter_10.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_11"
          geometry={nodes.Shelf_Clutter_11.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_12"
          geometry={nodes.Shelf_Clutter_12.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_13"
          geometry={nodes.Shelf_Clutter_13.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_14"
          geometry={nodes.Shelf_Clutter_14.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Shelf_Clutter_15"
          geometry={nodes.Shelf_Clutter_15.geometry}
          material={textureMaterial}
        />
      </group>

      <motion.group
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 51.12 : 0,
        }}
        name="Houseplant"
        position={[1.36, 0.08, -1]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Houseplant_7"
          geometry={nodes.Houseplant_7.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_1"
          geometry={nodes.Houseplant_7_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_2"
          geometry={nodes.Houseplant_7_2.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.mesh
        name="GamerChair"
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 64.99 : 0,
        }}
        geometry={nodes.GamerChair.geometry}
        material={textureMaterial}
        position={[-0.05, 0.32, -0.66]}
        rotation={[-1.57, 0, 2.92]}
      />
      <motion.group
        name="Painting"
        position={[-1.02, 1.46, -1.51]}
        rotation={[3.13, -0.02, -3.14]}
        scale={0.72}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
      >
        <mesh
          name="Node-Mesh"
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_2"
          geometry={nodes["Node-Mesh_2"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_3"
          geometry={nodes["Node-Mesh_3"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_4"
          geometry={nodes["Node-Mesh_4"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_5"
          geometry={nodes["Node-Mesh_5"].geometry}
          material={textureMaterial}
        />
      </motion.group>
    </group>
  );
}

useGLTF.preload("/models/office.gltf");
useTexture.preload("textures/Baked.jpg");
