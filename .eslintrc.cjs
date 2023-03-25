module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "no-param-reassign": "warn",
        "import/extensions": "off"
      },
    },
    {
      files: ["vite.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["./src/vite-env.d.ts"],
      rules: {
        "check-file/filename-naming-convention": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "check-file"],
  rules: {
    "import/prefer-default-export": "off",
    "react/require-default-props": [
      "error",
      {
        functions: "defaultArguments",
      },
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{js,ts,jsx,tsx}": "KEBAB_CASE",
      },
    ],
  },
};
