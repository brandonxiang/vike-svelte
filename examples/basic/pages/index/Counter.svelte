<script>
  let count = 0;

  function onClick () {
    count += 1
  }
</script>

<button type="button" on:click={onClick}>
  Counter {count}
</button>