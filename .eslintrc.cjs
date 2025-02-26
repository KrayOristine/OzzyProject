module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
        ecmaVersion: 13,
        sourceType: "module"
    },
    plugins: ['@typescript-eslint', 'import'],
    root: true,
    env: {
        "node": true,
    },

    rules: {
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "import/no-cycle": "error",
        "import/no-self-import": "error",
        "no-self-assign": "error"
    }
};