[<img src="https://vike.dev/vike-readme.svg" align="right" height="90">](https://vike.dev)
[![npm version](https://img.shields.io/npm/v/vike-svelte)](https://www.npmjs.com/package/vike-svelte)

# 🚧 WIP `vike-svelte`

Svelte integration for [Vike](https://github.com/vikejs/vike) (using the [V1 design](https://vike.dev/migration/v1-design)).

> [!NOTE]  
> For integrations with React and Vue, see the other [`vike-*` packages](https://vike.dev/vike-packages).

See [examples/](https://github.com/vikejs/vike-svelte/tree/main/examples).

Feel free for issue! PR Welcome !

## Roadmap

- 0.x (vite 4.x/svelte 4.x/nodejs 16.x)
- 1.x (vite 5.x/svelte 5.x/nodejs 18.x)

## Difference with vike-{react, vue, solid}

### svelte:head

<svelte:head> will insert elements into `document.head`, so the Head Config of `config.h.ts` is no needed.

### vike context

Svelte has a specified context. This context should be `getContext()`.

```javascript
import { VikeContextKey } from 'vike-svelte/usePageContext'
const pageContext = getContext(VikeContextKey);
```
