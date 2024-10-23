/** @type {import("prettier").Config} */
module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    jsxSingleQuote: true,
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    endOfLine: "lf",
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss", // must be last
    ],
    importOrder: [
        "^react$",
        "",
        "<TYPES>",
        "<TYPES>^[.]",
        "",
        "<THIRD_PARTY_MODULES>",
        "",
        "^[@]/",
        "",
        "^[.]",
    ],
};
