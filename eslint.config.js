import js from "@eslint/js";
import { defineConfig } from "eslint/config";

import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ["**/dist", "**/storybook-static", "./dist", "./test-apps/angular/.angular"],
  },
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "no-undef": "off",
    },
  },
);
