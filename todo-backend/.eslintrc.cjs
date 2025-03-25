module.exports = {
  root: true,
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: [
    'standard-with-typescript',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}