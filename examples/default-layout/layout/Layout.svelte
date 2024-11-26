<script>
  
  /**
   * @typedef {Object} Props
   * @property {any} Page
   * @property {any} pageProps
   */

  /** @type {Props} */
  let { Page, pageProps } = $props();
</script>

<div>
  <Page {...pageProps} />
</div>

