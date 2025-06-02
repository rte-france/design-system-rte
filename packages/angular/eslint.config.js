import tseslint from "typescript-eslint";
import angularPlugin from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import angularParser from "@angular-eslint/template-parser";

import baseConfig from "../../eslint.config.js";

export default tseslint.config(
  ...baseConfig,
  {
    files: ["**/*.{js,ts}"],
    plugins: {
      "@angular-eslint": angularPlugin,
    },
    rules: {
      ...angularPlugin.configs.recommended.rules,
      "@angular-eslint/no-output-native": "off",
      "@angular-eslint/sort-keys-in-type-decorator": "error",
      "@angular-eslint/consistent-component-styles": "error",
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularParser,
    },
    plugins: {
      "@angular-eslint/template": angularTemplate,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
      "@angular-eslint/template/attributes-order": "error",
    },
  },
);
