// tsup.config.ts
import { defineConfig } from "tsup";
var tsup_config_default = defineConfig({
  entry: ["src/**/*.ts"],
  format: ["esm"],
  splitting: true,
  sourcemap: true,
  bundle: false,
  dts: {
    entry: ["src/client/index.ts", "src/server/index.ts"]
  },
  treeshake: true
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL2hvbWUvdmlrdG9yL2Rldi9wZXJzb25hbC9oYW1ib3QvcGFja2FnZXMvd3MvdHN1cC5jb25maWcudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL2hvbWUvdmlrdG9yL2Rldi9wZXJzb25hbC9oYW1ib3QvcGFja2FnZXMvd3NcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL2hvbWUvdmlrdG9yL2Rldi9wZXJzb25hbC9oYW1ib3QvcGFja2FnZXMvd3MvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidHN1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlbnRyeTogW1wic3JjLyoqLyoudHNcIl0sXG4gIGZvcm1hdDogW1wiZXNtXCJdLFxuICBzcGxpdHRpbmc6IHRydWUsXG4gIHNvdXJjZW1hcDogdHJ1ZSxcbiAgYnVuZGxlOiBmYWxzZSxcbiAgZHRzOiB7XG4gICAgZW50cnk6IFtcInNyYy9jbGllbnQvaW5kZXgudHNcIiwgXCJzcmMvc2VydmVyL2luZGV4LnRzXCJdLFxuICB9LFxuICB0cmVlc2hha2U6IHRydWUsXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1IsU0FBUyxvQkFBb0I7QUFFL1MsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTyxDQUFDLGFBQWE7QUFBQSxFQUNyQixRQUFRLENBQUMsS0FBSztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLElBQ0gsT0FBTyxDQUFDLHVCQUF1QixxQkFBcUI7QUFBQSxFQUN0RDtBQUFBLEVBQ0EsV0FBVztBQUNiLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
