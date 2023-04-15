module.exports = {
	env: {
		"es2021": true,
		"node": true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'camelcase': 'off',
        "prettier/prettier": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-irregular-whitespace": "off",
        "@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-non-null-assertion": 'off',
	}
};
