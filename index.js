const react = require('@eslint-react/eslint-plugin');
const reactHooks = require('eslint-plugin-react-hooks');
const nextPlugin = require('@next/eslint-plugin-next');
const importPlugin = require('eslint-plugin-import-x');
const jsxA11y = require('eslint-plugin-jsx-a11y-x');
const typescriptEslint = require('typescript-eslint');
const globals = require('globals');

module.exports = [
	{
		files: ['**/*.{js,jsx,mjs,cjs}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parser: typescriptEslint.parser,
			parserOptions: {
				requireConfigFile: false,
				sourceType: 'module',
				allowImportExportEverywhere: true,
				babelOptions: {
					presets: ['next/babel'],
					caller: {
						supportsTopLevelAwait: true,
					},
				},
			},
		},
		plugins: {
			'import-x': importPlugin,
			'@eslint-react': react,
			'jsx-a11y-x': jsxA11y,
			'react-hooks': reactHooks,
			'@next/next': nextPlugin,
		},
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...nextPlugin.configs['recommended-legacy'].rules,
			'import-x/no-anonymous-default-export': 'warn',
			'@eslint-react/no-unknown-property': 'off',
			'@eslint-react/react-in-jsx-scope': 'off',
			'@eslint-react/prop-types': 'off',
			'jsx-a11y-x/alt-text': [
				'warn',
				{
					elements: ['img'],
					img: ['Image'],
				},
			],
			'jsx-a11y-x/aria-props': 'warn',
			'jsx-a11y-x/aria-proptypes': 'warn',
			'jsx-a11y-x/aria-unsupported-elements': 'warn',
			'jsx-a11y-x/role-has-required-aria-props': 'warn',
			'jsx-a11y-x/role-supports-aria-props': 'warn',
			'@eslint-react/jsx-no-target-blank': 'off',
		},
		settings: {
			'import-x/parsers': {
				'@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx', '.d.ts'],
			},
			'import-x/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
				typescript: {
					alwaysTryTypes: true,
				},
			},
		},
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: typescriptEslint.parser,
			parserOptions: {
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': typescriptEslint,
			'import-x': importPlugin,
			'@eslint-react': react,
			'jsx-a11y-x': jsxA11y,
			'react-hooks': reactHooks,
			'@next/next': nextPlugin,
		},
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...nextPlugin.configs['recommended-legacy'].rules,
			'import-x/no-anonymous-default-export': 'warn',
			'@eslint-react/no-unknown-property': 'off',
			'@eslint-react/react-in-jsx-scope': 'off',
			'@eslint-react/prop-types': 'off',
			'jsx-a11y-x/alt-text': [
				'warn',
				{
					elements: ['img'],
					img: ['Image'],
				},
			],
			'jsx-a11y-x/aria-props': 'warn',
			'jsx-a11y-x/aria-proptypes': 'warn',
			'jsx-a11y-x/aria-unsupported-elements': 'warn',
			'jsx-a11y-x/role-has-required-aria-props': 'warn',
			'jsx-a11y-x/role-supports-aria-props': 'warn',
			'@eslint-react/jsx-no-target-blank': 'off',
		},
		settings: {
			'import-x/parsers': {
				'@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx', '.d.ts'],
			},
			'import-x/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
				typescript: {
					alwaysTryTypes: true,
				},
			},
		},
	},
];
