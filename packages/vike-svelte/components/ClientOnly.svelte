<script>
  import { BROWSER } from 'esm-env'

  /**
   * @typedef {Object} Props
   * @property {import('svelte').Component } target
   * @property {*} [componentProps]
   * @property {import('svelte').Component | undefined } [fallback]
   */

  /** @type {Props} */
  let { target, componentProps = {}, fallback } = $props()

  const TargetComponent = $derived(BROWSER ? target : undefined)
  const FallbackComponent = $derived(fallback)
</script>

{#if TargetComponent}
  <TargetComponent {...componentProps}></TargetComponent>
{:else if FallbackComponent}
  <FallbackComponent {...componentProps}></FallbackComponent>
{/if}
