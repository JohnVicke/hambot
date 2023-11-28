import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
  entry: ["src/index.ts"],
  format: ["esm"],
  splitting: false,
  sourcemap: true,
  clean: true,
  bundle: true,
  dts: true,
}));
