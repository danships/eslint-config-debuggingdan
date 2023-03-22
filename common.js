/**
 * Common eslint setting shared between React and non-React projects.
 */
module.exports = {
  extends: [
    /**
     * Eslint opinions from the typescript team.
     */
    'plugin:@typescript-eslint/recommended',
    /**
     * Require strict type checking.
     */
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    /**
     * Add the recommended unicorn rules
     */
    'plugin:unicorn/recommended',
  ],
  plugins: ['only-warn', 'import'],
  rules: {
    /**
     * Typescript isn"t as smart as it thinks it is. "explicit" any"s are allowed.
     * But when a type is possible it"s strongly recommended to use or write that type.
     */
    '@typescript-eslint/no-explicit-any': 'off',

    /**
     * Allow `for of` syntax.
     * Only re-enable when you need to browserlist IE11 and your bundlesize is causing issues.
     */
    'no-restricted-syntax': 'off',

    /**
     * Allow function hoisting to improve code readability
     */
    '@typescript-eslint/no-use-before-define': ['warn', { functions: false, classes: true, variables: true }],

    /**
     * Don't allow importing devDependencies.
     */
    'import/no-extraneous-dependencies': ['warn', { devDependencies: false }],

    /**
     * Although its desired to write regular functions (which is possible if you don"t use `this`)
     * there are a lot of cases where not using `this` in a method is correct.
     */
    'class-methods-use-this': 'off',
    /**
     * Fail on invalid named filenames (non kebab-case).
     */
    'unicorn/filename-case': 'error',
    /**
     * Allow null as a value.
     */
    'unicorn/no-null': 'off',
    /**
     * Set preferred indentation to 2.
     */
    indent: ['error', 2],
    /**
     * Unix linebreaks for files: \n
     */
    'linebreak-style': ['error', 'unix'],
    /**
     * Prefer single quotes.
     */
    quotes: ['error', 'single'],
    /**
     * Require promises to be `awaited`, unless they are explicitly prefixed with `void`
     */
    '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
    /**
     * Require visibility for class members.
     */
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    /** No ts comments unless they are explained. */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
      },
    ],
    /** Sort the imports */
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        /** However, when using aliases with Typescript a few of our imports can be confused with dependencies. This particular rule can help us circumvent these particular edge cases by specifying something called pathGroups. */
        pathGroups: [
          {
            pattern: 'components',
            group: 'internal',
          },
          {
            pattern: 'common',
            group: 'internal',
          },
          {
            pattern: 'routes/**',
            group: 'internal',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      rules: {
        // Allow `require()` in config files
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
