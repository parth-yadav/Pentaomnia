/** @type {import("eslint").Linter.Config} */
module.exports = {
    plugins: ["@typescript-eslint"],
    extends: [
        "next/core-web-vitals",
        "plugin:react/recommended",
        // "plugin:promise/recommended",
        // "plugin:sonarjs/recommended",
        // "plugin:unicorn/recommended",
        // "plugin:prettier/recommended",
        // "plugin:jsx-a11y/recommended",
        // "plugin:react-hooks/recommended",
        // "plugin:@typescript-eslint/stylistic-type-checked",
        // "plugin:@typescript-eslint/recommended-type-checked",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        sourceType: "module",
        ecmaVersion: "latest",
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
    ignorePatterns: ["**/*.html"],
    rules: {
        // base
        indent: ["error", 4, { SwitchCase: 1 }],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        // end

        // typescript
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",

        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports",
                fixStyle: "inline-type-imports",
            },
        ],
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: { attributes: false },
            },
        ],
        "jsx-a11y/heading-has-content": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        // end
    },
    overrides: [
        {
            files: ["src/components/ui/**/*"],
            rules: {
                "unicorn/prevent-abbreviations": "off",
                "unicorn/no-null": "off",
                "react/prop-types": "off",
                "@typescript-eslint/no-empty-object-type": "off",
            },
        },
    ],
};
