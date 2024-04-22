const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
  arrowParens: true,
  braceStyle: 'stroustrup',
  jsx: true,
  semi: true,
});

module.exports = {
  extends: ['plugin:sonarjs/recommended'],
  ignorePatterns: ['**/*', '!.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        ...customized.rules,
        '@nx/enforce-module-boundaries': [
          'error',
          {
            allow: [],
            checkDynamicDependenciesExceptions: [
              '@shared/blocks/server',
              '@shared/api/server',
              '@shared/components/server',
              '@shared/svg/server',
            ],
            depConstraints: [
              {
                onlyDependOnLibsWithTags: ['scope:shared', 'scope:myran'],
                sourceTag: 'scope:myran',
              },
              {
                onlyDependOnLibsWithTags: [
                  'scope:shared',
                ],
                sourceTag: 'scope:shared',
              },
            ],
            enforceBuildableLibDependency: true,
          },
        ],
        '@stylistic/jsx-max-props-per-line': [
          'error',
          {
            maximum: {
              multi: 1,
              single: 3,
            },
          },
        ],
        '@stylistic/jsx-pascal-case': ['error', { ignore: [] }],
        '@stylistic/jsx-props-no-multi-spaces': ['warn'],
        '@stylistic/jsx-self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],
        '@stylistic/jsx-sort-props': [
          'error',
          {
            callbacksLast: false,
            ignoreCase: false,
            locale: 'auto',
            multiline: 'ignore',
            noSortAlphabetically: false,
            reservedFirst: true,
            shorthandFirst: false,
            shorthandLast: true,
          },
        ],
        '@stylistic/object-curly-newline': [
          'error',
          {
            minProperties: 2,
            multiline: true,
          },
        ],
        'import/order': [
          'error',
          {
            'alphabetize': {
              caseInsensitive: true,
              order: 'asc',
              orderImportKind: 'asc',
            },
            'groups': [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            'newlines-between': 'always',
            'pathGroups': [
              {
                group: 'builtin',
                pattern: '{react,react/**}',
                position: 'before',
              },
              {
                group: 'builtin',
                pattern: '{next,next/**}',
                position: 'before',
              },
              {
                group: 'external',
                pattern: '@apollo/**',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@shared/**',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@myran/**',
                position: 'before',
              },
            ],
            'pathGroupsExcludedImportTypes': ['builtin'],
          },
        ],
        'sort-imports': [
          'error',
          {
            allowSeparatedGroups: true,
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
          },
        ],
        'sort-keys-plus/sort-keys': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      extends: ['plugin:@nx/typescript'],
      files: ['*.ts', '*.tsx'],
      rules: { '@typescript-eslint/no-unused-vars': 'off' },
    },
    {
      extends: ['plugin:@nx/javascript'],
      files: ['*.js', '*.jsx'],
      rules: { 'no-unused-vars': 'off' },
    },
    {
      extends: ['plugin:@nx/javascript'],
      files: ['.eslintrc.js'],
      rules: { 'sonarjs/no-duplicate-string': 'off' },
    },
  ],
  plugins: [
    '@nx',
    'unused-imports',
    'import',
    'sort-keys-plus',
    'sonarjs',
    '@stylistic',
  ],
  root: true,
};
