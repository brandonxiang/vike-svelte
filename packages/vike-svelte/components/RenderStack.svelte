<script>
  import { getContext, setContext } from 'svelte'

  const StackKey = 'vike-svelte:render-stack'
  const IndexKey = 'vike-svelte:render-stack-index'

  /**
   * @typedef {Object} RenderStackState
   * @property {import('svelte').Component[]} components
   * @property {import('svelte').Component} Page
   */

  /**
   * @typedef {Object} Props
   * @property {import('svelte').Component[]} [components]
   * @property {import('svelte').Component} [Page]
   */

  /** @type {Props} */
  let { components, Page } = $props()

  /** @type {RenderStackState | undefined} */
  const parentStack = getContext(StackKey)
  const stack = $derived.by(() => (components && Page ? { components, Page } : parentStack))
  const index = getContext(IndexKey) ?? 0

  // svelte-ignore state_referenced_locally
  if (!stack) {
    throw new Error('RenderStack requires components and Page props at the root')
  }

  // svelte-ignore state_referenced_locally
  setContext(StackKey, stack)
  setContext(IndexKey, index + 1)

  const Component = $derived(stack.components[index] ?? stack.Page)
</script>

<Component Page={RenderStack} />
