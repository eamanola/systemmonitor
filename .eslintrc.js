module.exports = {
  env: { es2021: true },
  root: true,
  extends: ['airbnb'],
  plugins: ['react', 'react-native'],
  overrides: [
    { files: ['**/*.{js,jsx,mjs,cjs}'] },
  ],
  rules: {
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/require-default-props': ['error', { functions: 'defaultArguments' }],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  },
  parserOptions: { ecmaVersion: 12 },
};
