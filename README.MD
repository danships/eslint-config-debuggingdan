# eslint config daangemist

## Installation

    npm install --save-dev \
        concurrently \
        eslint \
        typescript \
        prettier \
        @typescript-eslint/eslint-plugin \
        @typescript-eslint/parser \
        eslint-plugin-only-warn \
        eslint-plugin-import \
        eslint-import-resolver-typescript \
        eslint-plugin-unicorn \
        eslint-config-daangemist

On a preact project, also run:

    npm install --save-dev \
        eslint-config-preact

### Prettier

Add `"prettier": "eslint-config-daangemist/.prettierrc"` to your `package.json`

### Eslint

Create an `.eslintrc` with:

    {
        "extends": ["daangemist"],
        "env": {
            "browser": true,
            "node": true
        },
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "project": "./tsconfig.json"
        }
    }

When using project, change `daangemist` into `daangemist/preact`

### Npm scripts

Add these scripts:

    "scripts": {
        "lint": "concurrently --kill-others-on-fail \"npm:lint:*\"",
        "lint:prettier": "prettier --check --log-level=warn src",
        "lint:tsc": "tsc --noEmit",
        "lint:eslint": "eslint --ext=js,jsx,ts,tsx --max-warnings=0 src",
        "format": "prettier --write src && eslint --ext=js,jsx,ts,tsx --fix src",
    }

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

Download it using: `wget https://unpkg.com/eslint-config-daangemist/.editorconfig`.
