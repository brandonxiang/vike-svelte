<script>
  //@ts-nocheck
  import ClientOnly from 'vike-svelte/ClientOnly';
  import ClientHelloWorld  from './ClientHelloWorld.svelte';
  import Fallback from './Fallback.svelte';
</script>

<ClientOnly component={ClientHelloWorld} componentProps={{name: 'brandon'}} fallback={Fallback} />
