//@ts-check

import es from "@eslint/js";
import ts from "typescript-eslint";



export default ts.config({
  plugins: {
    '@typescript-eslint': ts.plugin,
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
  files: ['src/*.ts'],
  rules: {
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    '@typescript-eslint/no-unused-var': 'warn',
    "import/no-cycle": "error",
    "import/no-self-import": "error",
    "no-self-assign": "error",
  },
  extends:
  [
    es.configs.recommended,
    ts.configs.stylisticTypeChecked,
  ],
});
