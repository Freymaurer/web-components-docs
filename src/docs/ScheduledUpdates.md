---
layout: docs
title: Configure scheduled updates
published: 2022-06-27
Author: Kevin Frey
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

To make maintanence of multiple websites easier, you can configure scheduled updates with GitHub actions.

## Setup

Add `update-dependencies.yml` (or any other name) file to `.github/workflows` in your root folder.

```yml
name: update-dependencies

# Controls when the workflow will run
on:
  # Triggers the workflow at 21pm (depends on timezone) on thursday, once a week.
  schedule:
    - cron: '0 21 * * THU'

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "update_dependencies"
  update_dependencies:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - name: Checkout
        uses: actions/checkout@v3

      # Setup dotnet environment
      - name: Setup .NET 3.1
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: 3.1.301
          
      # Setup dotnet environment    
      - name: Setup .NET 5
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: 5.0.102

      # Install node + npm
      - name: Setup node
        uses: actions/setup-node@v2
        with:
          node-version: '12'

      # Install rollup for bundling (needs setup described in "installation")
      - name: Install rollup
        run: npm install --global rollup

      # Update @nfdi4plants/web-components
      - name: Update to latest nfdi4plants web components
        run: npm install @nfdi4plants/web-components@latest

      # Bundle web components with rollup
      - name: Bundle npm packages
        run: rollup --config rollup.config.js
          
      # This Part is Fornax specific and installs paket
      - name: Restore dotnet tools
        run: dotnet tool restore
        
      # Update Nfdi4Plants.Fornax via Paket
      - name: Update to latest Nfdi4Plants.Fornax version
        run: dotnet paket update Nfdi4Plants.Fornax

      - name: Commit and push changes
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: Update @nfdi4plants/web-components & Nfdi4Plants.Fornax ⬆️
```

This specific example will update `@nfdi4plants/web-components` via npm and rollup **and** `Nfdi4Plants.Fornax` via paket. Should you use another GitHub action to deploy for example to gh-pages. You can add the following trigger event to trigger the deploy event after updating:

```yml
# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "main" branch
  push:
    branches: [ "main" ]
  # triggers when "update-dependencies" is completed
  workflow_run:
    workflows: [ update-dependencies ]
    types: [ completed ]
```
