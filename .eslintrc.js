module.exports = {
  env: { es2021: true },
  root: true,
  extends: ['airbnb'],
  plugins: ['react', 'react-native'],
  overrides: [
    { files: ['**/*.{js,jsx,mjs,cjs}'] },
  ],
  rules: {
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/require-default-props': [2, { functions: 'defaultArguments' }],
  },
  parserOptions: { ecmaVersion: 12 },
};
