export { onRenderClient }

import Empty from '../../components/Empty.svelte';
import PassThrough from '../../components/PassThrough.svelte'
import { VikeContextKey } from '../pageContext'
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
    console.log('Rendering Client page', pageContext.isHydration);
    console.log('target.innerHTML', target.innerHTML);

    if (pageContext.isHydration) {
      root = hydrate(Layout, {
        target,
        context: new Map([[VikeContextKey, pageContext]]),
        props: {
          Page,
        }
      });
    } else {
      root = mount(Layout, {
        target,
        context: new Map([[VikeContextKey, pageContext]]),
        props: {
          Page,
        }
      });
    }

  

  // if (target && Layout) {
    // if(pageContext.isHydration) {
      // root = hydrate(Layout, {
      //   target,
      //   context: new Map([[VikeContextKey, pageContext]]),
      //   props: {
      //     Page,
      //   }
      // });
      // console.log(1111, root);
    // } else {
    //   if(!root) {
    //     mount(Layout, {
    //       target,
    //       context: new Map([[VikeContextKey, pageContext]]),
    //       props: {
    //         Page,
    //       }
    //     });
    //   }
     
    // }
    
  // }
}
