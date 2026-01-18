import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,jsx}'],
        extends: [
            js.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite
        ],
        plugins: {
            '@stylistic': stylistic
        },
        languageOptions: {
            ecmaVersion:   2020,
            globals:       globals.browser,
            parserOptions: {
                ecmaVersion:  'latest',
                ecmaFeatures: { jsx: true },
                sourceType:   'module'
            }
        },
        rules: {
            'no-unused-vars':          ['error', { varsIgnorePattern: '^[A-Z_]' }],
            '@stylistic/indent':       ['error', 4],
            '@stylistic/semi':         ['error', 'always'],
            '@stylistic/comma-dangle': ['error', 'never']
        }
    }
]);
