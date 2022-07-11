---
layout: docs
title: Installation
published: 2022-06-06
Author: Kevin Frey
add toc: true
add sidebar: _sidebars\mainSidebar.md
---

## Installation

For standard projects which already contain node module dependency bundling you can **install** and **update** the webcomponents with:

```npm install @nfdi4plants/web-components@latest```

Then you can choose any of the options mentioned [here](https://lit.dev/docs/tools/adding-lit/#use-your-component) to use the components.

For projects without bundling, you can use  [rollup](https://rollupjs.org/guide/en/) as an easy to use bundler:

### Extensive explanation for rollup setup

1. Create a ``package.json`` with:
    ```json
    {
        "dependencies": {
            "@nfdi4plants/web-components": "^0.3.0",
        },
        "devDependencies": {
            "@rollup/plugin-node-resolve": "^13.1.3",
            "rollup": "^2.70.1"
        }
    }
    ```
    Feel free to use the latest `@nfdi4plants/web-components` version.
2. Run `npm install`.
3. Create a `rollup.config.js` with
    ```js
    import { nodeResolve } from '@rollup/plugin-node-resolve';

    // https://rollupjs.org/guide/en/#configuration-files
    export default {
    input: 'src/js/main.js',
    output: {
        file: 'src/js/bundle.js',
        format: 'cjs'
    },
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    plugins: [nodeResolve()]
    };
    ```
4. Create js file which references all web-components, exmp:
    ```js
    // main.js
    import {Navbar, Footer} from "@nfdi4plants/web-components";
    ```
5. Run `rollup --config rollup.config.js`.
6. Reference `bundle.js` as shown [here](https://lit.dev/docs/tools/adding-lit/#use-your-component).

### Examples

1. Fable/SAFE: [nfdi-helpdesk](https://github.com/Freymaurer/nfdi-helpdesk/blob/main/src/Client/nfdi-webcomponents.fs)
2. Fornax (rollup): [nfdi4plants.github.io](https://github.com/nfdi4plants/nfdi4plants.github.io/blob/6f93e584c2cd9cd2e248f13dd7659973521e45d2/src/generators/layout.fsx#L74)

## Update

Update webcomponents with ```npm install @nfdi4plants/web-components@latest``` or according to project README.md.