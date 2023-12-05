<script>
  import { BROWSER } from 'esm-env';

	/** @type {import('svelte').SvelteComponent }*/
  export let component;
	/** @type {*} */
  export let componentProps;
	/** @type {* | undefined }*/
	export let fallback;

	const ComponentConstructor = BROWSER ? 
		component :
		new Promise(() => {})

</script>

{#await ComponentConstructor}
  {#if fallback}
	  <svelte:component this={fallback} {...componentProps} />
	{:else}
		<p>Loading...</p>
	{/if}
{:then component}
	<svelte:component this={component} {...componentProps} />
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}