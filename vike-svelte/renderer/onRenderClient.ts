// https://vike.dev/onRenderClient
export default onRenderClient

import { PageContext } from 'vike/types'
import PassThrough from './PassThrough.svelte'

function onRenderClient(pageContext: PageContext) {
  const target = document.getElementById('app')

  const Layout = pageContext.config.Layout ?? PassThrough

  const { Page } = pageContext

  new Layout({
    //@ts-ignore
    target,
    hydrate: true,
    props: {
      //@ts-ignore
      Page
    }
  })
}