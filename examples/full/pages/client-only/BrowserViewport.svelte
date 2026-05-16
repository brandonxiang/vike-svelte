<script>
  import { onMount } from 'svelte'

  let width = $state(0)

  onMount(() => {
    width = window.innerWidth
  })
</script>

<div>Browser viewport width: {width}px</div>
