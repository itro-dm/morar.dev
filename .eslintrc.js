module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['./'],
            },
            'babel-module': {},
        },
    },
    extends: [
        "eslint:recommended",
        "prettier/@typescript-eslint",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        'plugin:import/recommended',
        'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks', 'import', 'jest', 'promise'],
    rules: {
        'prettier/prettier': 'error',
        'linebreak-style': ['error', 'unix'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/prop-types': 'off',
        'typescript-eslint/no-explicit-any': 'off',
        'react/no-array-index-key': 'warn',
        'react/button-has-type': 'off',
        'jest/consistent-test-it': 'warn',
        'jest/no-test-callback': 'warn',
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-todo': 'warn',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        '@typescript-eslint/ban-ts-ignore': 'warn',
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-var-requires': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'import/no-cycle': 'warn',
        'jest/no-mocks-import': 'warn'
    },
};