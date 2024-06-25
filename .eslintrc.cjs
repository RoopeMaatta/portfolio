module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Ensure this is last to override conflicting rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false, // For babel-eslint
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: { version: 'detect' }, // Auto-detect React version
  },
  plugins: [
    'node',
    'react',
    'styled-components-a11y', // Use the correct styled-components plugin
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
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
    'no-unused-vars': 'off',
  },
}
