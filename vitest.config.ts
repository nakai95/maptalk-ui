import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    mockReset: true,
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**"],
    },
  },
});
