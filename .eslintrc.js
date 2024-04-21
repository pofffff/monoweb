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
              '@string/blocks/server',
              '@string/elements/server',
              '@string/landmarks/server',
              '@string/svg/server',
            ],
            depConstraints: [
              {
                onlyDependOnLibsWithTags: ['type:feature', 'type:util'],
                sourceTag: 'type:app',
                // bannedExternalImports: ['@storyblok/*'],
              },
              {
                onlyDependOnLibsWithTags: ['type:feature', 'type:util'],
                sourceTag: 'type:feature',
                // bannedExternalImports: ['@storyblok/*'],
              },
              {
                onlyDependOnLibsWithTags: ['type:util', 'type:feature'],
                sourceTag: 'type:util',
                // bannedExternalImports: ['@storyblok/*'],
              },
              {
                onlyDependOnLibsWithTags: ['scope:website', 'scope:shared'],
                sourceTag: 'scope:website',
              },
              {
                onlyDependOnLibsWithTags: [
                  'scope:infrastructure',
                  'scope:shared',
                ],
                sourceTag: 'scope:infrastructure',
              },
              {
                onlyDependOnLibsWithTags: ['scope:ui-library', 'scope:shared'],
                sourceTag: 'scope:ui-library',
              },
              {
                onlyDependOnLibsWithTags: ['scope:test', 'scope:shared'],
                sourceTag: 'scope:test',
              },
              {
                onlyDependOnLibsWithTags: ['scope:shared'],
                sourceTag: 'scope:shared',
              },
              {
                bannedExternalImports: ['!@storyblok/*'],
                sourceTag: 'allow:storyblok',
              },
            ],
            enforceBuildableLibDependency: true,
          },
        ],
        // '@stylistic/array-bracket-newline': ['error', { multiline: true }],
        // '@stylistic/function-paren-newline': ['error', { minItems: 3 }],
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
        // '@stylistic/max-len': ['error', { code: 80 }],
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
                pattern: '@storybook/**',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@string/**',
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
