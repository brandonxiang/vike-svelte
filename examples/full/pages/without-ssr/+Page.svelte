<script>
  let title = $state('Without SSR')
</script>

<div>
  <h1>{title}</h1>
  This page is rendered only in the browser:
  <ul>
    <li>It's interactive.</li>
    <li>It isn't rendered to HTML.</li>
  </ul>
</div>


<!-- <script>
  let text = $state('Loading...');
</script>

<div>{text}</div> -->