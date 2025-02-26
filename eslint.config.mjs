import { dirname } from "path";
import { fileURLToPath } from "url";
import config from "eslint-config-standard";
import { FlatCompat } from "@eslint/eslintrc"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @type {import('eslint').Linter.Config}
 */
const ex = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["n", "promise", "import"],
  globals: {
    "document": "off",
    "navigator": "off",
    "window": "off"
  },
  root: true,
  env: {
    node: true,
  },

  rules: {
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-cycle": "error",
    "import/no-self-import": "error",
    "no-self-assign": "error",
  },
};

const compat = new FlatCompat({
  baseDirectory: __dirname
});



/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [...compat.extends(config), ...compat.config(ex)];

export default eslintConfig;
