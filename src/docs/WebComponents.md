---
layout: docs
title: Web Components
published: 2022-06-06
Author: Kevin Frey
add toc: false
add sidebar: sidebars\mainSidebar.md
---

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

![nfdi-navbar](../images/WebComponents/nfdi-navbar.jpg?v0.5.2)
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
<!-- tag -->
<nfdi-body [class="content"] [hassidebar="true"]></nfdi-body>
```

The top level container element for the main documentation design.

![nfdi-navbar](../images/WebComponents/nfdi-body.png?v0.5.2)
*v0.5.2*

This element will contain all documentation content in its "Main Content Area". To style it's children in this area, use the bulma class `class="content"`.

### Slots

**No specified slot**: Elements will go to "Main Content Area"

```html
<nfdi-body class="content" hassidebar="true">
    <!-- no specified slot -->
    <h1 class="front-header">Index</h1>
    <i class="help">last updated at 2022-06-06</i>
</nfdi-body>
```

**sidebar**: Use this slot to specify an [`nfdi-sidebar-element`][#nfdi-sidebar-element).

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

[nfdi-darkblue]: https://github.com/nfdi4plants/Branding#darkblue
[nfdi-lightblue]: https://github.com/nfdi4plants/Branding#lightblue
[nfdi-olive]: https://github.com/nfdi4plants/Branding#lightblue
[nfdi-basecolor]: https://github.com/nfdi4plants/Branding#lightdark-base-colors
