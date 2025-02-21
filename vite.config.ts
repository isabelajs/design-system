import { resolve, dirname, relative, extname } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),})],
  css:{
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.js"),
      name: "design-system",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts", "lib/**/*.stories.tsx"],
          })
          .map((file) => [
            relative("lib", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
