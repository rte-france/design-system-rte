import tseslint from "typescript-eslint";
import vitest from "eslint-plugin-vitest";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import baseConfig from "../../eslint.config.js";

export default tseslint.config(...baseConfig, {
  files: ["**/*.{js,ts,jsx,tsx}"],
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
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
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
});
