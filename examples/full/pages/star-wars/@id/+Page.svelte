<script>
    import { useData } from 'vike-svelte/useData';

    const data = useData();
    export let movie = data;
</script>

<h1>{movie.title}</h1>
Release Date: {movie.release_date}
<br />
Director: {movie.director}
<br />
Producer: {movie.producer}
