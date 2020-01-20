module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // uses react-specific linting rules
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // enables eslint-plugin-prettier and eslint-config-prettier
    'prettier/react', // disables react-specific linting rules that conflict with prettier
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: [
    'simple-import-sort',
    'react-hooks',
    'typescript-sort-keys',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},
    },
  },
  rules: {
    // https://eslint.org/docs/4.0.0/rules/
    // Some base rule also needs to be changed to reflect rules below, as it can reporting incorrect errors
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': 'off',
    'no-case-declarations': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-shadow': 'error',
    'no-undef': 'error',
    'no-underscore-dangle': ['off', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    quotes: ['error', 'single', 'avoid-escape'],
    'react/prefer-es6-class': ['off'],
    'space-in-parens': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],

    // Plugin
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/named': 0,
    'import/namespace': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': 2,

    // Plugin
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/sort': 'error',

    // Plugin
    // https://github.com/infctr/eslint-plugin-typescript-sort-keys
    'typescript-sort-keys/interface': 2,

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    // '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': 'always',
    '@typescript-eslint/member-delimiter-style': {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    },
    '@typescript-eslint/no-explicit-any': 'always',
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    // '@typescript-eslint/prefer-includes': 'error',
    // '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/type-annotation-spacing': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/boolean-prop-naming': 'error',
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': [
      'error',
      { selfClosing: 'line-aligned', nonEmpty: 'line-aligned' },
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-curly-spacing': [
      'error',
      { when: 'never', allowMultiline: true },
    ],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    // 'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'off',
    // 'react/jsx-indent-props': [2, 2],
    // 'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true }],
    'react/jsx-key': 'error',
    // 'react/jsx-max-props-per-line': ['error', { 'maximum': 1 }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-wrap-multilines': ['error', 'parens-new-line'],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],
    'react/prop-types': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
