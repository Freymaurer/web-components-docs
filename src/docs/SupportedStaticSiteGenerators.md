---
layout: docs
title: Supported Static Site Generators
published: 2022-06-27
Author: Kevin Frey
add toc: true
add sidebar: _sidebars\mainSidebar.md
---

# Fornax

These docs are created using this setup, so you can always have a look at the [source repo](https://github.com/nfdi4plants/web-components-docs) if you find something missing.

*Docs for version: ^0.7.0*

## Setup

1. `dotnet new --install Nfdi4Plants.Fornax.Template`, to install the current version of the template.
2. `dotnet new NFDIdocs`, after navigating to the folder in which you want to initiate the template.
3. `dotnet tool restore`
4. `dotnet paket install`
5. Navigate to the `src` folder (`cd src`) and start the application with `dotnet fornax watch`
6. Set up gh-pages.
7. (Optional, recommended) Set up [scheduled updates](/web-components-docs/docs/ScheduledUpdates.html).

## Markdown syntax

To add more documentation, add a markdown file to `\src\docs`. The file MUST start with a metadata block:

<!--used yml here as code language for nice color syntax-->
```yml
---
layout: docs
title: Metadata
published: 2022-05-09
Author: Dominik Brilhaus
add toc: true
add sidebar: sidebars\mainSidebar.md
Article Status: Publishable
To-Dos: 
    - Update links to other KB articles
---
```

- MUST start and end with `---` .
- Keys (`layout`, `author`, etc.) are NOT case sensitive.
- Fields MAY be in any order.
- MUST contain `layout: docs`.
    - This triggers fornax parsing to html.
- MUST contain `title: xxxx`.
    - Will be added as "# xxxx" to the html.
    - Will be used to name the generated webpage.
- IF duplicates of a field, without duplicate support, exist the first one is used.
- MUST contain [date: yyyy-MM-dd](#datepublished).
- MAY contain [Author: xxxx](#author).
- MAY contain `add toc: false`.
    - If true, adds automated table of contents from all found headers in content.
    - Default is `true`.
- MAY contain `add support: false`.
    - If true adds DataPlant support component at the bottom.
    - Default is `true`.
- MAY contain `add sidebar: realtive\path\to\sidebar.md` to add the sidebar element to the page.
- MAY contain any other metadata. The information will be read but will not affect the generated html.

### Author

Examples:

```yml
# Allows duplicates, all "author" fields are parsed
author: Dominik
author: Martin
```

```yml
# Allows json object syntax
# "name" MUST exist
# "github" and "orcid" MAY exist
author: {name: Dominik}
author: {name: Martin D'vloper, github: https://github.com/exampleUrl, orcid: 0000-0000-0000-0000}
```
  
### Date/Published

Format is `date: yyyy-MM-dd`.

Examples:

```yml
# Can use "date" ...
date: 2020-05-09
```

```yml
# ... or "published"
published: 2020-05-09
```

```yml
# If both exist, "date" is preferred even if it comes after "published".
published: 2020-05-09 # This is ignored
date: 2020-10-09
```

## Sidebar

Sidebar files MUST be in ANY **subdirectory** of `\src\docs`, which is excempted from docs layout parsing. 

```fsharp
// example for folder excemption
let files = 
    Directory.GetFiles(docsPath, "*")
    |> Array.filter (fun n -> n.Contains @"\_sidebars\" |> not && n.Contains "/_sidebars/" |> not)
```

Sidebar markdown files must start with a metadata block:

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

- All text after the opening <code>```</code> will be parsed to the element title.
- Inner text MUST only contain heading lines.
    - Only headers up to `###` are parsed. All header with more depth are parsed to `###`.
