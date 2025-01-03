<script>
  import Counter from '../../components/Counter.svelte'
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