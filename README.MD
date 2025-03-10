# eslint-config-debuggingdan

ESLint configuration for TypeScript projects using ESLint v9's flat config format.

## Installation

```bash
npm install --save-dev \
    eslint@ \
    typescript \
    prettier \
    @eslint/js \
    @typescript-eslint/eslint-plugin@ \
    @typescript-eslint/parser@ \
    typescript-eslint@ \
    eslint-plugin-only-warn \
    eslint-plugin-import \
    eslint-import-resolver-typescript \
    eslint-plugin-unicorn \
    globals \
    eslint-config-debuggingdan
```

### Prettier

Add `"prettier": "eslint-config-debuggingdan/.prettierrc"` to your `package.json`

### ESLint v9 Configuration

ESLint v9 uses a new flat config format. This package exports a configuration that you can use directly or extend in your own `eslint.config.js` file.

#### Option 1: Use the configuration directly

Create an `eslint.config.js` file in your project root:

```js
// eslint.config.js
import debuggingDanConfig from 'eslint-config-debuggingdan';

export default debuggingDanConfig;
```

#### Option 2: Extend the configuration

Create an `eslint.config.js` file in your project root:

```js
// eslint.config.js
import debuggingDanConfig from 'eslint-config-debuggingdan';
import globals from 'globals';

export default [
  ...debuggingDanConfig,

  // Add your own customizations
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    // Add your own rules
    rules: {
      // Your custom rules here
    },
  },
];
```

### Npm scripts

Add these scripts to your package.json:

```json
"scripts": {
    "lint": "npm-run-all --parallel lint:*",
    "lint:prettier": "prettier --check --log-level=warn src",
    "lint:tsc": "tsc --noEmit",
    "lint:eslint": "eslint --max-warnings=0 src",
    "format": "prettier --write src && eslint --fix src",
}
```

## .editorconfig

Add an `.editorconfig` file to your project with the contents below.

```
root = true

[*/**.{ts,tsx,json,js}]
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space
indent_size = 2
```

Download it using: `wget https://unpkg.com/eslint-config-debuggingdan/.editorconfig`.

## Migrating from ESLint v8 to v9

If you're migrating from ESLint v8 to v9, here are the key changes:

1. ESLint v9 uses a flat config format instead of the previous `.eslintrc.*` format
2. Configuration is now in `eslint.config.js` (or `.mjs`/`.cjs`) instead of `.eslintrc.*`
3. The configuration is an array of objects, each with its own scope and rules
4. Plugins are imported directly and configured using the `plugins` property
5. File patterns are specified using the `files` property

For more information, see the [ESLint v9 migration guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0) and the [Configuration Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide).
