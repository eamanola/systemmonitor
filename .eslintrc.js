module.exports = {
  root: true,
  extends: ['airbnb'],
  plugins: ['react', 'react-native'],
  overrides: [
    { files: ['**/*.{js,jsx,mjs,cjs}'] },
  ],
  rules: {
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
};
