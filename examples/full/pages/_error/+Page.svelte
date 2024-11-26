<script>
  
  /**
   * @typedef {Object} Props
   * @property {boolean} is404
   * @property {string} [errorInfo]
   */

  /** @type {Props} */
  let { is404, errorInfo = '' } = $props();
</script>

{#if is404}
  <div>
      <h1>404 Page Not Found</h1>
      <p>This page could not be found.</p>
      <p>{errorInfo}</p>
  </div>
{:else}
  <div>
    <h1>500 Internal Server Error</h1>
    <p>Something went wrong.</p>
  </div>
{/if}