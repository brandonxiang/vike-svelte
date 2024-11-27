<svelte:options runes={true} />
<script>
  import ClientOnly from 'vike-svelte/clientOnly';
  import ClientHelloWorld  from './ClientHelloWorld.svelte';
  import Fallback from './Fallback.svelte';
</script>

<ClientOnly target={ClientHelloWorld} componentProps={{name: 'brandon'}} fallback={Fallback} />
