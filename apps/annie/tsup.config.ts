import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["./src/index.ts"],
  format: ["esm"],
  platform: "node",
  minify: !options.watch,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  onSuccess: options.watch ? "node dist/index.js" : undefined,
}));
