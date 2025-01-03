export { onRenderClient }

import Empty from '../../components/Empty.svelte';
import PassThrough from '../../components/PassThrough.svelte'
import { PageKey } from '../utils/context.js'
import { hydrate, mount, unmount } from 'svelte';

/**
 * @type {null}
 */
let root = null;

let rendered = false;

/**
 * https://vike.dev/onRenderClient
 * @param {import('vike/types').PageContextClient} pageContext 
 */
function onRenderClient(pageContext) {
  const target = document.getElementById('root');

  if(!target) {
    throw new Error('target not found');
  }

  /** @type {import('svelte').Component} */
  const Layout = pageContext.config.Layout?.[0] ?? PassThrough;
  const Page = pageContext.Page ?? Empty;



    if(root) {
      unmount(root);
    }

    if (pageContext.isHydration) {
      root = hydrate(Layout, {
        target,
        context: new Map([[PageKey, pageContext]]),
        props: {
          Page,
        }
      });
    } else {
      root = mount(Layout, {
        target,
        context: new Map([[PageKey, pageContext]]),
        props: {
          Page,
        }
      });
    }

}
