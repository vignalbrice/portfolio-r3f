import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    // Les .glb/.fbx restent des fichiers séparés (chargés à la demande par les loaders)
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Découpe le bundle : three change rarement -> cache long terme,
        // et le code applicatif reste un petit chunk à réinvalider.
        // Découpage volontairement minimal : isoler React/react-dom de leurs
        // consommateurs (r3f, framer-motion) crée des cycles entre chunks et
        // casse l'initialisation. On n'extrait que three, qui est le plus gros
        // et le plus stable — le reste est laissé à Rollup.
        manualChunks(id) {
          if (
            id.includes("node_modules/three/") ||
            id.includes("node_modules/three-stdlib/")
          )
            return "three";
        },
      },
    },
  },
  // Pré-bundle les gros deps en dev pour éviter les reloads en cascade
  optimizeDeps: {
    include: ["three", "@react-three/fiber", "@react-three/drei"],
  },
});
