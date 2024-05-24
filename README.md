gement configuration. Learn more about installing packages [here](https://docs.replit.com/repls/packages/#DirectImports).
  - `afterInstall`
    - **Type:** `Command`
    - **Description:** The command that is executed after a new package is installed.
  - `ignoredPaths`
    - **Type:** `[string]`
    - **Description:** List of paths to ignore while attempting to guess packages.
  - `ignoredPackages`
    - **Type:** `[string]`
    - **Description:** List of modules to never attempt to guess a package for, when installing packages.
  - `language`
    - **Type:** `string`
    - **Description:** Specifies the language to use for package operations. See available languages in the [Universal Package Manager](https://github.com/replit/upm) repository.
  - `[packager.features]`
    - **Description:** UPM features that are supported by the specified languages.
      - `packageSearch`
        - **Type:** Boolean
        - **Description:** When set to `true`, enables a package search panel in the sidebar.
      - `guessImports`
        - **Type:** Boolean
        - **Description:** When set to `true`, UPM will attempt to guess which packages need to be installed prior to running the repl.
- `[languages.<language name>]`
  - **Description:** Per-language configuration. The language name has no special meaning other than to allow multiple languages to be configured at once.
  - `pattern`
    - **Type:** `string`
    - **Description:** A [glob](https://en.wikipedia.org/wiki/Glob_(programming)) used to identify which files belong to this language configuration (`**/*.js`)
  - `syntax`
    - **Type:** `string`
    - **Description:** The language to use for syntax highlighting.
  - `[languages.<language name>.languageServer]`
    - **Description:** Configuration for setting up [LSP](https://microsoft.github.io/language-server-protocol/) for this language. This allows for code intelligence (autocomplete, underlined errors, etc...).
    - `start`
      - **Type:** `Command`
      - **Description:** The command used to start the LSP server for the specified language.
- `[nix]`
  - **Description:** Where you specify a [Nix channel](https://nixos.wiki/wiki/Nix_channels).
  - `channel`
    - **Type:** `string`
    - **Description:** A nix channel id.
- `[debugger]`
  - **Description:** Advanced users only. See field types & docstrings [here](https://gist.github.com/Bardia95/98987c69c6970b1bb0698b863e2a84de#file-dot-replit-debugger-config-go), and in the advanced section below.

### Example configurations
#### Beginner
##### [LaTeX](https://replit.com/@ZachAtReplit/LaTeX?v=1#.replit)
##### [Clojure](https://replit.com/@replit/Clojure?v=1#.replit)
#### Advanced
##### [Python](https://replit.com/@replit/Python?v=1)
##### [HTML, CSS, JS](https://replit.com/@replit/HTML-CSS-JS?v=1#.replit)
##### [Java](https://replit.com/@replit/Java-Beta?v=1#.replit)
##### [Node.js](https://replit.com/@replit/Nodejs?v=1#.replit)
##### [C++](https://replit.com/@replit/CPlusPlus?v=1)