import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: ["./src/shared/config/vitest-setup.ts"],
    environment: "jsdom"
  }
})
