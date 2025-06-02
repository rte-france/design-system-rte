import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default tseslint.config(
  { ignores: ["**/dist", "**/storybook-static"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      prettier,
    },
    rules: {
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
