<script>
  import Counter from '../../components/Counter.svelte'
  import { useConfig } from 'vike-svelte/useConfig'

  useConfig({
    title: 'Welcome to Vike Svelte',
    description: 'A Svelte page using vike-svelte dynamic config',
    lang: 'en',
  })

  let title = $state('Welcome');

</script>

<h1>{title}</h1>

This page is:

<ul>
  <li>Rendered to HTML.</li>
  <li>
    Interactive. <Counter />
  </li>
</ul>
