module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'standard',
		'plugin:prettier/recommended',
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'prettier'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'max-len': [
			'error',
			{
				'code': 120
			}
		],
		'prettier/prettier': [
			'error',
			{
				'endOfLine': 'auto'
			}
		],
	}
};
