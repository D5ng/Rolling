import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import importPlugin from "eslint-plugin-import"
import unusedImports from "eslint-plugin-unused-imports"
import react from "eslint-plugin-react"
import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"
import standard from "eslint-config-standard"
import pluginJs from "@eslint/js"
import pluginN from "eslint-plugin-n"
import pluginPromise from "eslint-plugin-promise"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      pluginJs.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      prettierConfig
    ],
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.app.json"
        }
      }
    },
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
        __dirname: "readonly"
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "unused-imports": unusedImports,
      n: pluginN,
      promise: pluginPromise,
      prettier: prettierPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]
        }
      ],
      ...standard.rules,
      "no-var": "error",
      "prefer-const": "error",
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "error",
      "import/first": "error",
      // unused imports
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      quotes: ["error", "double"],
      "space-before-function-paren": ["error", "never"]
    }
  }
)
