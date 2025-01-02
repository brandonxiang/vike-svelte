<script>
    import { getContext } from 'svelte';
    import { PageKey } from 'vike-svelte/context';

    const pageContext = getContext(PageKey);
    const { data } = pageContext;
    export let movie = data;
</script>

<h1>{movie.title}</h1>
Release Date: {movie.release_date}
<br />
Director: {movie.director}
<br />
Producer: {movie.producer}
