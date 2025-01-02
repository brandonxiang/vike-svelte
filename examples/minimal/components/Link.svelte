<script>
  import { getContext } from 'svelte'
  import { PageKey } from 'vike-svelte/context'

  /**
   * @typedef {Object} Props
   * @property {string} [href]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { href = '', children } = $props()

  let isActive = $state(false)

  const pageContext = getContext(PageKey)

  $effect(() => {
    const { urlPathname } = pageContext

    if (urlPathname) {
      isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href)
    }
  })
</script>

<a class:active={isActive} {href}>
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
