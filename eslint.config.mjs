import nx from '@nx/eslint-plugin'

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/node_modules/**',
      'node_modules',
      '**/.expo/**',
      '**/.git/**',
      '**/build/**',
      '**/android/**',
      '**/ios/**'
    ]
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': 'off'
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      // Unused code
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      'no-unused-vars': 'off',

      // Type safety basics
      '@typescript-eslint/no-explicit-any': 'warn',

      // Common bugs
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'warn'
    }
  }
]
