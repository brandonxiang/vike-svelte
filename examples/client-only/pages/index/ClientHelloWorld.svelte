<script>
  /**
   * @typedef {Object} Props
   * @property {string} [name]
   */

  /** @type {Props} */
  let { name = 'World' } = $props();
</script>

<div>Client Render: Hello {name}</div>
