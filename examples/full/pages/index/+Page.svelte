
<script>
  import Counter from '../../components/Counter.svelte'
  let text = $state('My Vike + Svelte app')
</script>

<div>
  <h1>{text}</h1>
  This page is rendered to HTML (using SSR) and hydrated in the browser.
</div>
<Counter />