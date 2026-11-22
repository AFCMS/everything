import { defineConfig } from "node-modules-inspector";

import { devDependencies } from "./package.json" with { type: "json" };

export default defineConfig({
  name: "@afcms/everything",
  defaultFilters: {
    sourceType: "prod",
    excludeWorkspace: false,
    excludeDev: true,
    excludeOptional: true,
  },
  defaultSettings: {
    showPublishTimeBadge: true,
    showInstallSizeBadge: true,
    showFileComposition: true,
  },
  excludeDependenciesOf: [
    "eslint",
    "webpack",
    "jsdom",
    "esbuild",
    "rolldown",
    "oxfmt",
    "unrs-resolver",
    "oxc-parser",
    "rollup",
    "lightningcss",
    "sharp",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/utils",
    "@vercel/nft",
  ],
  excludePackages: Object.keys(devDependencies),
  publint: true,
});
