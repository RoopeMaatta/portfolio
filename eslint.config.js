import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js' // Import @eslint/js to provide the recommended configurations
import typescriptParser from '@typescript-eslint/parser'
import nodePlugin from 'eslint-plugin-node'
import reactPlugin from 'eslint-plugin-react'
import styledComponentsA11yPlugin from 'eslint-plugin-styled-components-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import path from 'path'
import { fileURLToPath } from 'url'
import eslintPluginExample from './eslint-custom-rules/eslint-plugin-example.js'

// Get the directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Compatibility for older config files
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ignores: ['eslint.config.js', 'node_modules', 'dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
      },
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      node: nodePlugin,
      react: reactPlugin,
      'styled-components-a11y': styledComponentsA11yPlugin,
      prettier: prettierPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      example: eslintPluginExample,
    },
    rules: {
      'prettier/prettier': 'error',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 0,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-unused-vars': 'off', // Disable the base rule
      'example/enforce-foo-bar': 'error',
    },
  },
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:prettier/recommended'),
]
