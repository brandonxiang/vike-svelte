// https://vike.dev/onRenderClient
export default onRenderClient

import { PageContext } from 'vike/types'
import PassThrough from './PassThrough.svelte'
import { VikeContextKey } from './pageContext'
import { ComponentType } from 'svelte'

function onRenderClient(pageContext: PageContext) {
  const target = document.getElementById('page-view')

  const Layout = (pageContext.config.Layout ?? PassThrough) as ComponentType

  const { Page, pageProps } = pageContext

  if (target && Layout) {
    new Layout({
      target,
      hydrate: true,
      context: new Map([[VikeContextKey, pageContext]]),
      props: {
        pageProps: pageProps,
        Page
      }
    })
  }
}
