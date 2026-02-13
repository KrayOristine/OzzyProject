//@ts-check

import es from "@eslint/js";
import {defineConfig} from "eslint/config";
import ts from "typescript-eslint";
import esp from "eslint-plugin-import";



export default defineConfig({
  plugins: {
    '@typescript-eslint': ts.plugin,
    'import': esp,
  },
  languageOptions: {
    parser: ts.parser,
    parserOptions:{
      projectService: true,
      tsconfigRootDir: import.meta.dirname
    },
    ecmaVersion: 2022,
    globals: {
      "document": "off",
      "navigator": "off",
      "window": "off"
    },
  },
  files: ['./src/**/*.ts'],
  ignores: [
    './src/**/*.d.ts'
  ],
  rules: {
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unsafe-enum-comparison":"off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/consistent-generic-constructors": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/restrict-plus-operand": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "no-useless-escape": "off",
    "@typescript-eslint/no-duplicate-enum-values": "off",
    "@typescript-eslint/no-require-imports": "warn",
    "import/no-cycle": "error",
    "import/no-self-import": "error",
    "no-self-assign": "error",
  },
  extends:
  [
    es.configs.recommended,
    ts.configs.recommended,
    ts.configs.stylistic,
  ],
});
