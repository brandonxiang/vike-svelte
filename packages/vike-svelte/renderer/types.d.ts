import { Component } from "svelte"


declare global {
  namespace Vike {
    interface PageContext {
      Page: Component
      title?: string
    }
  }
}

// We purposely define the ConfigVikeSvelte interface in this file: that way we ensure it's always applied whenever the user `import vikeSvelte from 'vike-svelte'`
declare global {
  namespace VikePackages {
    interface ConfigVikeSvelte {
      /** The page's root Svelte component */
      Page?: Component
      /** A component, usually common to several pages, that wraps the root component `Page` */
      Layout?: Array<Component>
      /** &lt;title>${title}&lt;/title> */
      title?: string
      /** &lt;meta name="description" content="${description}" /> */
      description?: string
      /** &lt;link rel="icon" href="${favicon}" /> */
      favicon?: string
      /** &lt;html lang="${lang}">
       *
       *  @default 'en'
       *
       */
      lang?: string
      /**
       * If true, render mode is SSR or pre-rendering (aka SSG). In other words, the
       * page's HTML will be rendered at build-time or request-time.
       * If false, render mode is SPA. In other words, the page will only be
       * rendered in the browser.
       *
       * See https://vike.dev/render-modes
       *
       * @default true
       *
       */
      ssr?: boolean
    }
  }
}