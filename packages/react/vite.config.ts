import { resolve } from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      "@design-system-rte/core": resolve(__dirname, "../core"),
      "/assets": resolve(__dirname, "../core/assets"),
    },
  },
  plugins: [
    react(),
    dts({
      include: ["src/index.ts", "src/components"],
      exclude: ["**/*.stories.*", "**/*.styled.ts"],
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "react-package",
      formats: ["es", "cjs"],
      cssFileName: "style",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
    },
  },
});
