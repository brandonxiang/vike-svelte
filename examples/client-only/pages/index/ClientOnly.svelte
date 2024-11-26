<script>
  import { BROWSER } from 'esm-env';

	
	
	
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').SvelteComponent } component
	 * @property {*} componentProps
	 * @property {* | undefined } fallback
	 */

	/** @type {Props} */
	let { component, componentProps, fallback } = $props();

	const ComponentConstructor = BROWSER ? 
		component :
		new Promise(() => {})

</script>

{#await ComponentConstructor}
  {#if fallback}
	  {@const SvelteComponent = fallback}
	  <SvelteComponent {...componentProps} />
	{:else}
		<p>Loading...</p>
	{/if}
{:then component}
	{@const SvelteComponent_1 = component}
	<SvelteComponent_1 {...componentProps} />
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}