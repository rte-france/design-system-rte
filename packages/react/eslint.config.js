import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

import baseConfig from "../../eslint.config.js";

export default tseslint.config(
  ...baseConfig,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
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
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.stories.tsx"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
);
