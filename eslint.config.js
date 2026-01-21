import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import storybookPlugin from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  storybookPlugin.configs["flat/recommended"],
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
      prettier: eslintPluginPrettierRecommended.plugins.prettier,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          single: false,
          trailingComma: "all",
          printWidth: 120,
        },
      ],
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
