import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./plugin/index.ts"),
      name: "SymbiosisUIPlugin",
      fileName: "symbiosis-ui-plugin",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "@biomejs/biome",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-slot",
        "@tailwindcss/typography",
        "@types/fs-extra",
        "@types/node",
        "@types/react",
        "@types/react-dom",
        "@vitejs/plugin-react",
        "assert",
        "autoprefixer",
        "class-variance-authority",
        "clsx",
        "constants",
        "fs",
        "fs/promises",
        "glob",
        "lucide-react",
        "node-html-parser",
        "path",
        "postcss",
        "react",
        "react-dom",
        "stream",
        "tailwindcss",
        "tailwindcss-animate",
        "tsx",
        "typescript",
        "url",
        "vite",
        "vite-plugin-dts",
        "webpack",
        "zod",
      ],
      output: {
        exports: "named",
        dir: "dist/plugin",
      },
    },
    minify: false,
    sourcemap: true,
  },
});
