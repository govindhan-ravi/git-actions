export default [
  {
    ignores: ['node_modules', 'coverage'],
  },
  {
    files: ['**/*.js'],
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'off',
      'semi': ['warn', 'always']
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
]
