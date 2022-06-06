---
layout: docs
title: Development
published: 2022-06-06
Author: Kevin Frey
add toc: false
add sidebar: sidebars\mainSidebar.md
---

## Set up

Pull repository and navigate to root folder.

```
npm install
```

## run locally

```
npm run dev
```

## build

```
npm run build
```

## publish to npm 

Increase version in `package.json`.

```
npm publish --dry-run
```

```
npm publish
```

_If this should not work, for example `package is not in the npm registry`, try `npm login` first to login to an account with release rights._