export default onRenderClient

import PassThrough from '../components/PassThrough.svelte'
import { VikeContextKey } from './pageContext'

/**
 * https://vike.dev/onRenderClient
 * @param {import('vike/types').PageContext} pageContext 
 */
function onRenderClient(pageContext) {
  const target = document.getElementById('page-view')

  /** @type {import('svelte').ComponentType} */
  const Layout = pageContext.config.Layout ?? PassThrough;

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
