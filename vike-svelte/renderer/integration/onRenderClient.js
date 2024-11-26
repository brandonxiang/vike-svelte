export {onRenderClient}

import PassThrough from '../../components/PassThrough.svelte'
import { VikeContextKey } from '../pageContext'
import { hydrate } from 'svelte';

/**
 * https://vike.dev/onRenderClient
 * @param {import('vike/types').PageContext} pageContext 
 */
function onRenderClient(pageContext) {
  const target = document.getElementById('page-view')

  /** @type {import('svelte').Component} */
  const Layout = pageContext.config.Layout?.[0] ?? PassThrough;

  if (target && Layout) {
    hydrate(Layout, {
      target,
      context: new Map([[VikeContextKey, pageContext]]),
      props: pageContext
    });
  }
}
