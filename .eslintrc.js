module.exports = {
	env: {
		browser: true,
		es6: true,
		es2021: true,
	},
	extends: ['standard', 'plugin:prettier/recommended', 'prettier/prettier', 'prettier'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		// Note: you must disable the base rule as it can report incorrect errors
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'warn',
		'no-var': 'error',
		indent: [
			'error',
			4,
			{
				SwitchCase: 1,
				ignoredNodes: ['ConditionalExpression'],
			},
		],
		curly: ['error', 'all'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'max-len': [
			'error',
			{
				code: 120,
			},
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'no-console': [
			'warn',
			{
				allow: ['warn', 'error'],
			},
		],
	},
};
