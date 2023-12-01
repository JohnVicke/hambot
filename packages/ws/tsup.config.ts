import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["esm"],
  splitting: true,
  sourcemap: true,
  bundle: false,
  dts: {
    entry: ["src/client/index.ts", "src/server/index.ts"],
  },
  treeshake: true,
});
