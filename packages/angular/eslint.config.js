import angularPlugin from "@angular-eslint/eslint-plugin";
// import angularTemplate from "@angular-eslint/eslint-plugin-template";
// import angularParser from "@angular-eslint/template-parser";

import baseConfig from "../../eslint.config.js";

export default [
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
      "@angular-eslint/component-selector": ["error", { type: "element", style: "kebab-case" }],
      "@angular-eslint/directive-selector": ["error", { type: "attribute", prefix: "rte", style: "camelCase" }],
      "@angular-eslint/prefer-inject": "error",
      "@angular-eslint/prefer-output-emitter-ref": "error",
      "@angular-eslint/prefer-output-readonly": "error",
      "@angular-eslint/prefer-signals": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
    },
  },
  // {
  //   files: ["**/*.html"],
  //   languageOptions: {
  //     parser: angularParser,
  //   },
  //   plugins: {
  //     "@angular-eslint/template": angularTemplate,
  //   },
  //   rules: {
  //     ...angularTemplate.configs.recommended.rules,
  //     "@angular-eslint/template/attributes-order": "error",
  //   },
  // },
];
