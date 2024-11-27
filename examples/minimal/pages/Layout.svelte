<script>
  
  import Link from '../components/Link.svelte';
  /**
   * @typedef {Object} Props
   * @property {any} Page
   */

  /** @type {Props} */
  let { Page } = $props();
</script>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="layout">
  <nav class="sidebar">
    <Link href="/">
      Home
    </Link>
    <Link href="/about">
      About
    </Link>
  </nav>

  <div class="content">
    <Page />
  </div>
</div>

<style>
  :global(body) {
    font-family: sans-serif;
    margin: 0;
  }

  :global(*),
  :global(*::before)
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(a) {
    text-decoration: none;
  }

  .layout {
    display: flex;
    margin: auto;
    max-width: 900px;
  }

  .sidebar {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    line-height: 1.8em;
    padding: 42px 20px 20px 20px;
  }

  .content {
    border-left: 2px solid #eee;
    min-height: 100vh;
    padding: 20px 20px 50px 20px;
  }
</style>