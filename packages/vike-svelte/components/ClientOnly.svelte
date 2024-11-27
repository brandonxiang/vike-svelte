<script>
  import { BROWSER } from 'esm-env'

  /**
   * @typedef {Object} Props
   * @property {import('svelte').SvelteComponent } target
   * @property {*} componentProps
   * @property {import('svelte').SvelteComponent | undefined } fallback
   */

  /** @type {Props} */
  let { target, componentProps, fallback } = $props()

  const ComponentConstructor = BROWSER ? target : new Promise(() => {})
</script>

{#await ComponentConstructor}
  {#if fallback}
    <fallback {...componentProps}></fallback>
  {:else}
    <p>Loading...</p>
  {/if}
{:then TargetComponent}
	<TargetComponent {...componentProps}></TargetComponent>
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
