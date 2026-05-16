<script>
    import { useData } from 'vike-svelte/useData';

    const data = useData();
    /**
     * @type {import('../types').MovieDetails[]}
     */
    let movies = data.movies;
</script>

<h1>Star Wars Movies</h1>
<ol>
{#each movies as { id, title, release_date }}
    <li key={id}>
        <a href={`/star-wars/${id}`}>{title}</a> ({release_date})
    </li>
{/each}
</ol>
<p>
Source: <a href="https://brillout.github.io/star-wars">brillout.github.io/star-wars</a>.
</p>
