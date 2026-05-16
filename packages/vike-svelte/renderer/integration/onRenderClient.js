export { onRenderClient }

import Empty from '../../components/Empty.svelte';
import { DataKey, PageKey } from '../utils/context.js'
import RenderStack from '../../components/RenderStack.svelte'
import { getComponentStack } from '../utils/componentStack.js'
import { hydrate, mount, unmount } from 'svelte';

/** @type {ReturnType<typeof hydrate> | ReturnType<typeof mount> | null} */
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

  /** @type {*} */
  const config = pageContext.config
  const Page = pageContext.Page ?? Empty;
  const context = new Map([
    [PageKey, pageContext],
    [DataKey, pageContext.data],
  ])
  const components = getComponentStack(config, Page)



    if(root) {
      unmount(root);
    }

    if (pageContext.isHydration) {
      root = hydrate(RenderStack, {
        target,
        context,
        props: {
          components,
          Page,
        }
      });
    } else {
      root = mount(RenderStack, {
        target,
        context,
        props: {
          components,
          Page,
        }
      });
    }

}
