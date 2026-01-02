import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "import": importPlugin,
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: "avoidEscape" }],
      "@stylistic/indent": ["error", 2, { VariableDeclarator: "first",  SwitchCase: 1 }],
      "@stylistic/operator-linebreak": ["error", "before", { overrides: { "=": "after"} }],
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          "alphabetize": { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
  {
    ignores: ["**/dist", "**/storybook-static", "./dist", "./test-apps/angular/.angular"],
  },
]);
