import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

const eslintConfig = defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      stylistic.configs.recommended,
      {
        rules: {
          "eqeqeq": "error",
          "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
          "@stylistic/semi": ["warn", "always"],
          "@stylistic/quotes": ["warn", "double"],
          "@stylistic/indent": ["warn", 2],
          "@stylistic/brace-style": ["warn", "1tbs"],
          "@stylistic/jsx-indent-props": ["warn", 4],
          "@stylistic/jsx-one-expression-per-line": "off",
          "@stylistic/member-delimiter-style": [
            "warn",
            {
              multiline: {
                delimiter: "semi",
                requireLast: true,
              },
              singleline: {
                delimiter: "semi",
                requireLast: false,
              },
              multilineDetection: "brackets",
            },
          ],
        },
      },
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);

export default eslintConfig;
