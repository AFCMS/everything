import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: true,
  sortPackageJson: true,
  ignorePatterns: ["node_modules", ".agents", ".github/workflows/actions.lock"],
});
