import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-tabs': 'error',
    'no-console': 'off',
    'func-style': ['off', 'declaration'],
  },
  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: false,
})
