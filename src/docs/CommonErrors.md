---
layout: docs
title: Common Errors
published: 2023-05-08
Author: Kevin Frey
add toc: true
add sidebar: _sidebars\mainSidebar.md
comment: Add new errors to the top of the file
---

## Update to >0.12.0 (RollupError)

> [!] RollupError: Invalid value for option "output.file" - when building multiple chunks, the "output.dir" option must be used, not "output.file". To inline dynamic imports, set the "inlineDynamicImports" option.

This error was introduced due to a new mermaidjs dependency beginning in v0.12.0. to solve it, you can adjust the `rollup.config.js` with `inlineDynamicImports: true`.

```js
output: {
    file: 'src/js/bundle.js',
    format: 'cjs',
    inlineDynamicImports: true
  },
```