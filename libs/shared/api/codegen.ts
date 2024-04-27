import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: ['libs/shared/api/src/lib/schemas/**/*.graphql', 'libs/shared/api/src/lib/schemas/**/*.graphql'],
  generates: {
    'libs/shared/types/src/lib/_generated/fragment-types.ts': { plugins: ['fragment-matcher'] },
    'libs/shared/types/src/lib/_generated/graphql-schema.json': { plugins: ['introspection'] },
    'libs/shared/types/src/lib/_generated/graphql-types.ts': {
      config: { dedupeFragments: true },
      plugins: [
        // {
        //   add: {
        //     content:
        //     '// eslint-disable-next-line @typescript-eslint/ban-ts-comment',
        //   },
        // },
        // { add: { content: '// @ts-nocheck' } },
        'typescript',
        'typescript-operations',
        'typed-document-node',
      ],
    },
  },
  hooks: { afterOneFileWrite: ['prettier --write'] },
  overwrite: true,
  schema: [
    { 'https://graphql.datocms.com': { headers: { Authorization: `${process.env['MYRAN_DATO_TOKEN']}` } } },
  ],
};
export default config;
