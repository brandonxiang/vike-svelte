<script>
  import { run } from 'svelte/legacy';

  import { getContext } from "svelte"
  
  import { VikeContextKey } from 'vike-svelte/pageContext'
  
  /**
   * @typedef {Object} Props
   * @property {string} [href]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { href = '', children } = $props();
  
  let isActive = $state(false)
  
  const pageContext = getContext(VikeContextKey);
  
  run(() => {
    const { urlPathname } = pageContext
  
    if(urlPathname) {
      isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href)
    }
  });
  
  
  </script>
  
  <a class:active={isActive} href={href}>
    {@render children?.()}
  </a>
  
  <style>
    a {
      padding: 2px 10px;
      margin-left: -10px;
    }
    a.active {
      background-color: #eee;
    }
  </style>