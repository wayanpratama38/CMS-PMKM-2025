module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 100,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",

  // 💅 JSX / TSX styling
  jsxSingleQuote: false,
  jsxBracketSameLine: false,

  // 🧩 TailwindCSS plugin sorting
  tailwindConfig: "./tailwind.config.js",
  // 🗂️ File yang akan diformat
  overrides: [
    {
      files: ["*.html", "*.css", "*.scss", "*.js", "*.jsx", "*.ts", "*.tsx"],
      options: { parser: "babel" },
    },
  ],
};
