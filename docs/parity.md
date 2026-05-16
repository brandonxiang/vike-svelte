# vike-svelte parity matrix

This page tracks the practical feature gap between `vike-svelte` and `vike-react`. The goal is not to copy React APIs one-to-one. Svelte-specific behavior is marked as intentionally different when the Svelte platform already has a native pattern.

## Renderer Core

| Capability | vike-svelte status | Notes |
| --- | --- | --- |
| Vike V1 renderer config | Supported | `vike-svelte/config` installs `onRenderHtml`, `onRenderClient`, client routing, and SSR mode handling. |
| SSR with Svelte | Supported | Uses `svelte/server` `render()` and returns a complete HTML document. |
| Client hydration | Supported | Hydrates the root element on first client render. |
| Client navigation | Supported | Uses Vike client routing with Svelte mount/unmount behavior. |
| SPA mode with `ssr: false` | Supported | Covered by the full example. |
| Streaming | Planned | Tracked in [#21](https://github.com/brandonxiang/vike-svelte/issues/21). Current renderer does not stream. |

## Public Runtime APIs

| Capability | vike-svelte status | Tracking |
| --- | --- | --- |
| Page context hook | Planned | [#17](https://github.com/brandonxiang/vike-svelte/issues/17) |
| Data hook | Planned | [#17](https://github.com/brandonxiang/vike-svelte/issues/17) |
| Dynamic config hook/component | Planned | [#18](https://github.com/brandonxiang/vike-svelte/issues/18) |
| Head component | Intentionally different | Prefer Svelte `<svelte:head>` for component-local tags. Vike-backed metadata is tracked in [#18](https://github.com/brandonxiang/vike-svelte/issues/18). |
| ClientOnly | Supported with Svelte API | Runtime fallback behavior exists. Static replacement parity is tracked in [#22](https://github.com/brandonxiang/vike-svelte/issues/22). |

## Config Output

| Config | vike-svelte status | Tracking |
| --- | --- | --- |
| `title` | Supported | Rendered as `<title>`. |
| `description` | Supported | Rendered as description meta. |
| `favicon` | Supported | Rendered as favicon link. |
| `lang` | Supported | Rendered on `<html>`. |
| `viewport` | Planned | [#19](https://github.com/brandonxiang/vike-svelte/issues/19) |
| `htmlAttributes` | Planned | [#19](https://github.com/brandonxiang/vike-svelte/issues/19) |
| `bodyAttributes` | Planned | [#19](https://github.com/brandonxiang/vike-svelte/issues/19) |
| cumulative `Layout` | Planned | [#20](https://github.com/brandonxiang/vike-svelte/issues/20) |
| cumulative `Wrapper` | Planned | [#20](https://github.com/brandonxiang/vike-svelte/issues/20) |

## Ecosystem Examples

| Area | Svelte direction | Priority |
| --- | --- | --- |
| Data cache | Add an example with TanStack Svelte Query or a Vike `+data` cache pattern. | High |
| Error tracking | Add a Sentry browser/server setup example once renderer hooks are stable. | Medium |
| State management | Prefer Svelte stores and `$state`; add a focused example if app-level state patterns need clarification. | Medium |
| UI library | Add a Svelte UI integration example after the core renderer parity issues land. | Medium |
| React-only styling libraries | Not applicable | styled-components, styled-jsx, Chakra UI, and React-specific packages should not be mirrored directly. |

## Issue Index

- [#17](https://github.com/brandonxiang/vike-svelte/issues/17): public runtime hooks.
- [#18](https://github.com/brandonxiang/vike-svelte/issues/18): dynamic head and config APIs.
- [#19](https://github.com/brandonxiang/vike-svelte/issues/19): renderer output for declared config.
- [#20](https://github.com/brandonxiang/vike-svelte/issues/20): cumulative layout and wrapper behavior.
- [#21](https://github.com/brandonxiang/vike-svelte/issues/21): streaming support decision.
- [#22](https://github.com/brandonxiang/vike-svelte/issues/22): ClientOnly parity and static replacement.
- [#23](https://github.com/brandonxiang/vike-svelte/issues/23): this parity matrix and ecosystem plan.
