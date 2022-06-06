---
layout: docs
title: Web Components
published: 2022-06-06
Author: Kevin Frey
add toc: false
add sidebar: sidebars\mainSidebar.md
---

- [&#60;nfdi-navbar&#62;](#nfdinavbar)
- [&#60;nfdi-footer&#62;](#nfdifooter)
- [&#60;nfdi-body&#62;](#nfdibody)
- [&#60;nfdi-sidebar-element&#62;](#nfdisidebarelement)
- [&#60;nfdi-header&#62;](#nfdiheader)
- [&#60;nfdi-toc&#62;](#nfditoc)
- [&#60;nfdi-code&#62;](#nfdicode)

## Based on Bulma

The DataPLANT web components were built with the basic Bulma style sheet in mind. It is highly recommended to reference the Bulma style sheet for all projects which use the DataPLANT web components.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
```

*Or see [here](https://bulma.io/documentation/overview/start/) for the official docs.*

## nfdi-navbar

```html
<nfdi-navbar></nfdi-navbar>
```

<br>

![nfdi-navbar](../images/WebComponents/nfdi-navbar.png?v0.5.2)
*v0.5.2*

Slotless component with responsive design at 1024px media query. Fixed top and requires `padding-top: 3.25rem` to be added to html.

```html
<html style="padding-top: 3.25rem">
...
</html>
```

### Custom Properties

- `--element-background-color`, set "background-color" of navbar. (Default: [nfdi-darkblue])
- `--element-text-color`, set "color", "border-color" and "navbar-divider" color. (Default: [nfdi-white][nfdi-basecolor])

## nfdi-footer

```html
<nfdi-footer></nfdi-footer>
```

<br>

![nfdi-navbar](../images/WebComponents/nfdi-footer.png?v0.5.2)
*v0.5.2* 

Slotless component.

### Custom Properties

- `--element-background-color`, set "background-color" of footer.(Default: [nfdi-darkblue 20% lighter][nfdi-darkblue])
- `--element-text-color`, set "color", "border-color". (Default: [nfdi-white][nfdi-basecolor])
- `--link-color`, set color of links. (Default: [nfdi-lightblue][nfdi-lightblue])
- `--link-color`, set :hover color of links. (Default: [nfdi-black][nfdi-basecolor])
- `--header-color`, set color to html header elements. (Default: [nfdi-white][nfdi-basecolor])

## nfdi-body

```html
<nfdi-body [class="content"] [hassidebar="true"]></nfdi-body>
```

The top level container element for the main documentation design.

![nfdi-navbar](../images/WebComponents/nfdi-body.png?v0.5.2)
*v0.5.2*

This element will contain all documentation content in its "Main Content Area". To style it's children in this area, use the bulma class `class="content"`. 

**Features**
- Hide sidebar at 1024px media query and show fixed bottom footer to open sidebar area on touch/click.
    - Sidebar will slide into view.

### Slots

Child elements will go to "Main Content Area"

```html
<nfdi-body class="content" hassidebar="true">
    <!-- no specified slot -->
    <h1 class="front-header">Index</h1>
    <i class="help">last updated at 2022-06-06</i>
</nfdi-body>
```

#### **sidebar-slot**
Use this slot to specify an [`nfdi-sidebar-element`][#nfdi-sidebar-element).

```html
<nfdi-body class="content" hassidebar="true">
    <!-- sidebar slot -->
    <nfdi-sidebar-element slot="sidebar" isactive="true">
        <div slot="title">General</div>
        <h1 slot="inner"><a href="/index.html">Home</a></h1>
    </nfdi-sidebar-element>
</nfdi-body>
```

### Html Attributes

- `hasSidebar`/`hassidebar`: set to "true" to display the sidebar. (Default: "false")

### Custom Properties

- `--outside-background-color`, set "background-color" of are outside of box.(Default: [nfdi-olvi 80% lighter][nfdi-olive])
- `--element-text-color`, set "color", "border-color". (Default: [nfdi-black][nfdi-basecolor])

## nfdi-sidebar-element

```html
<nfdi-sidebar-element slot="sidebar" [isActive=true]></nfdi-sidebar-element>
```

<br>

Stackable element in "Sidebar Area> of body. MUST be slotted in "sidebar" slot of `nfdi-body`.

**Features**:
- Can be opened or closed on click.
- Automatically highlights active pages (host + path).
    - Automatically hightlights in-page links when scrolled by.

### Slots

```html
<nfdi-sidebar-element slot="sidebar" isactive="true">
    <div slot="title">General</div>
    <h1 slot="inner"><a href="/index.html">Home</a></h1>
</nfdi-sidebar-element>
```

#### **title-slot**
Use this slot to specify the header of one sidebar element block.

#### **inner-slot**
Use this slot with any of [`h1`, `h2`, `h3`]. to create sidebar links. 
- MAY contain `href` attribute.
- Will be checked for matching path to window location and in-page links.

### Html Attributes

- `isActive`/`isactive`: set to "true" to display the element open. (Default: "false")

### Custom Properties

- `--accent-text-color`, set color of "title" slot. (Default: [nfdi-black][nfdi-basecolor])
- `--sidebar-text-color`, set color of "inner" slots [`h1`, `h2`, `h3`]. (Default: [nfdi-black][nfdi-basecolor] or white based on `--sidebar-background-color`)
- `--sidebar-background-color` set "background-color" of "Sidebar Area". (Default: transparent)

## nfdi-header

```html
<nfdi-h1>Metadata</nfdi-h1>
<nfdi-h2>Metadata 2</nfdi-h2>
<nfdi-h3>Metadata 3</nfdi-h3>
<nfdi-h4>Metadata 4</nfdi-h4>
<nfdi-h5>Metadata 5</nfdi-h5>
<nfdi-h6>Metadata 6</nfdi-h6>
```

<br>

![nfdi-header](../images/WebComponents/nfdi-header.png?v0.5.2)

*v0.5.2*

Use with one child element as text. Will propagate html.

**Features**
- Automaticly creates in-page (/#in-page-link) link before header.
- Automaticly creates id corresponding to in-page link for header.

### Custom Properties

- `--link-color`: set color of generated in-page link. (Default: [nfdi-lightblue][nfdi-lightblue])
- `--link-hover-color`: set hover color of generated in-page link. (Default: [nfdi-black][nfdi-basecolor])
- `--header-color`: set color to header elements. (Default: [nfdi-black][nfdi-basecolor]) 

## nfdi-toc

```html
<nfdi-toc></nfdi-toc>
```

<br>

![nfdi-toc](../images/WebComponents/nfdi-toc.png?v0.5.2)
*v0.5.2*

Slotless component to automatically create table of contents.

**Features**
- Finds all [`nfdi-header`](/#nfdiheader) in `nfdi-body`, nests them according to lowest depth and creates `<ul>`, `<li>` elements with the in-page links.

### Custom Properties

- `--link-color`: set color of generated in-page links. (Default: [nfdi-lightblue][nfdi-lightblue])
- `--link-hover-color`: set hover color of generated in-page links. (Default: [nfdi-black][nfdi-basecolor])
- `--element-text-color`: set color to list style elements. (Default: [nfdi-black][nfdi-basecolor]) 

## nfdi-code

```html
<nfdi-code></nfdi-code>
```

<br>

![nfdi-code](../images/WebComponents/nfdi-code.png?v0.5.2)
*v0.5.2*

This component can be used to display code snippets similar to `<pre>` html elements. Any text inside will be presented exactly as written.

**Features**
- Comes with copy-to-clipboard button.

### Slots

```html
<nfdi-body>
    <nfdi-code>#r "nuget: DynamicObj, 1.0.1"
#r "nuget: Expecto, 9.0.4"

open DynamicObj
open Newtonsoft.Json
open System.IO
open Microsoft.FSharp.Core

type JsonParser = {
    TokenType: JsonToken
    Value: string option
} with
    static member create tokenType value = {
        TokenType = tokenType
        Value = value
    }</nfdi-code>
</nfdi-body>
```

### Custom Properties

- `--accent-text-color`: set the colored border on the left. (Default: [nfdi-lightblue][nfdi-lightblue])
- `--outside-background-color`: set background-color. (Default: [nfdi-white][nfdi-basecolor])
- `--element-text-color`: set copy-button border-color and box-shadow color. (Default: [nfdi-white][nfdi-basecolor]) 

[nfdi-darkblue]: https://github.com/nfdi4plants/Branding#darkblue
[nfdi-lightblue]: https://github.com/nfdi4plants/Branding#lightblue
[nfdi-olive]: https://github.com/nfdi4plants/Branding#lightblue
[nfdi-basecolor]: https://github.com/nfdi4plants/Branding#lightdark-base-colors
