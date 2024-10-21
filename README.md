> [!CAUTION]
> This repository is archived and not further developed!

# @nfdi4plants/web-components docs

**[Link to gh-pages](https://nfdi4plants.github.io/web-components-docs/)**

# Development

## install 

1. Download repo.
2. Run `dotnet tool restore` in root directory.
3. Run `dotnet paket install` in root directory.
4. Run `dotnet fornax watch` in `\src` folder.
5. Open page in browser.

## update web-components

Check out the [installation](https://nfdi4plants.github.io/web-components-docs/docs/Installation.html) docs. For fornax you will need to bundle the web-components with rollup. See the respective section for more information.

## update Nfdi4Plants.Fornax

```
dotnet paket update Nfdi4Plants.Fornax
```

_Load script will be generated automatically and is referenced in `src\loaders\docsloader.fsx`._

## Update Searchbar

We use [Pagefinder](https://pagefind.app/docs/) as basis for static website search.
It generates the `src/_public/_pagefind` folder, containing css and js to power the searchbar.

If the searchbar is not visible (should be above sidebar) you need to rerun pagefind.

**Run**: `npm run index` 

This will create the necessary files. But *at the moment* will not correctly work when [Using the testclient](##start-test-client). 
It will show the ui part but will not function.

To test the searchfunction you can use: `npm run indexserve`.
