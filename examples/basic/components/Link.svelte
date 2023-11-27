<script>
import { getContext } from "svelte"

import { VikeContextKey } from 'vike-svelte/pageContext'

export let href = '';



let isActive = false

const pageContext = getContext(VikeContextKey);

$:  {
  const { urlPathname } = pageContext

  if(urlPathname) {
    isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href)
  }
}


</script>

<a class:active={isActive} href={href}>
  <slot />
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