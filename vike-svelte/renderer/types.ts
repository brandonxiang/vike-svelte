import { ComponentType as Component } from "svelte"

export type { PageProps }
export type { Component }

type PageProps = Record<string, unknown>

declare global {
  namespace Vike {
    interface PageContext {
      Page: Component
      pageProps: PageProps
      title?: string
    }
  }
}