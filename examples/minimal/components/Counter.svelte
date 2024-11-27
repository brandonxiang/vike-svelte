<script>
  let count = $state(0);

  function onClick () {
    count += 1
  }
</script>

<button type="button" onclick={onClick}>
  Counter {count}
</button>