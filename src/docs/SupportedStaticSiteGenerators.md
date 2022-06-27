---
layout: docs
title: Supported Static Site Generators
published: 2022-06-27
Author: Kevin Frey
add toc: true
add sidebar: sidebars\mainSidebar.md
---

## Fornax

These docs are created using this setup, so you can always have a look at the [source repo](https://github.com/nfdi4plants/web-components-docs) if you find something missing.

You can use prebuilt loader functions and html components  from [Nfdi4Plants.Fornax](https://github.com/Freymaurer/Nfdi4Plants.Fornax) to create gh-pages for **documentation**.

### Setup

1. `dotnet new tool-manifest`
2. `dotnet tool install fornax`
3. `dotnet tool install paket`
4. `dotnet fornax new`
5. `dotnet paket init`
6. Replace content of `paket.dependencies` with the following:
    ```
    generate_load_scripts: true
    source https://api.nuget.org/v3/index.json

    storage: none
    framework: net5.0, netstandard2.0, netstandard2.1
    nuget Nfdi4Plants.Fornax
    ```
7. `dotnet paket install`
8. Follow instructions for rollup setup [here](/web-components-docs/docs/Installation.html#extensive-explanation-for-rollup-setup).
9. Create `src/loaders/docsloader.fsx` as seen [here](https://github.com/nfdi4plants/web-components-docs/blob/main/src/loaders/docsloader.fsx).
10. Create `src/generators/docs.fsx` as seen [here](https://github.com/nfdi4plants/web-components-docs/blob/main/src/generators/docs.fsx).
11. Adjust `src/generators/layout.fsx` and `src/generators/index.fsx` accordingly.
12. Add docs parsing to `src/config.fsx`.
13. Test with `dotnet fornax watch` in `src` folder.
14. Set up gh-pages.
15. Set up [scheduled updates](/web-components-docs/docs/ScheduledUpdates.html) (Optional, recommended).

### Markdown syntax

To add more documentation, add a markdown file to `\src\docs`. The file MUST start with a metadata block:

<!--used yml here as code language for nice color syntax-->
```yml
---
layout: docs
title: Metadata
published: 2022-05-09
Author: Dominik Brilhaus <https://orcid.org/0000-0001-9021-3197>
add toc: true
add sidebar: sidebars\mainSidebar.md
Article Status: Publishable
To-Dos: 
    - Update links to other KB articles
---
```

- All keys (`layout`, `author`, etc.) are **not** case sensitive.
- All fields can be at ANY position.
- MUST start and end with `---` .
- MUST contain `layout: docs`.
    - This triggers fornax parsing to html.
- MUST contain `title: xxxx`.
    - Will be added as "# xxxx" to the html.
    - Will be used to name the generated webpage.
- MUST contain `published: yyyy-MM-dd`.
- MAY contain `Author: xxxx`.
- MAY contain `add toc: true`.
    - Will add automated table of contents from all found headers in content.
- MAY contain `add sidebar: realtive\path\to\sidebar.md` to add the sidebar element to the page.
- MAY contain **any** other metadata. The information will be read but will not affect the generated html.

#### Sidebar

Sidebar files MAY be in ANY **subdirectory** of `\src\docs`. Sidebar markdown files must start with a metadata block:

```yml
---
published: 2022-05-09
Article Status: Publishable
To-Dos: 
    - Update links to other KB articles
---
```

- MAY contain **any** other metadata. The information will be read but will not affect the generated html.

To add a sidebar element to the page, use the codeblock syntax:

<pre><code>```Data Management Plan
# Data Management Plan:/docs/DataManagementPlan.html
## Advantages of a DMP:/docs/DataManagementPlan.html#advantages-of-a-dmp
### Elements of a DMP?:/docs/DataManagementPlan.html#elements-of-a-dmp
# DataPLANT's Data Management Plan Generator:/docs/DataManagementPlan.html#dataplants-data-management-plan-generator
```</code></pre>

- All text after the opening "```" will be parsed to the element title.
- Inner text MUST only contain heading lines.
    - Only headers up to `###` are parsed. All header with more depth are parsed to `###`.