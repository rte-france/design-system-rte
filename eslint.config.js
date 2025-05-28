import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import vitest from "eslint-plugin-vitest";

export default tseslint.config(
  { ignores: ["packages/react/dist", "packages/angular/dist", "packages/design-docs/storybook-static"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
      vitest: vitest,
      pluginReact: {
        ...pluginReact.configs.flat.recommended,
        settings: {
          react: {
            version: "detect",
          },
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "vitest/max-nested-describe": [
        "error",
        {
          max: 3,
        },
      ],
      "react/prop-types": "off", // Désactive les prop-types si tu utilises TypeScript
      "react/react-in-jsx-scope": "off", // React 17+ n'a plus besoin d'importer React pour JSX
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "all",
          tabWidth: 2,
          endOfLine: "auto",
          printWidth: 120,
        },
      ],
    },
  },
);
