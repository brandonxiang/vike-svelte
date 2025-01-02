// https://vike.dev/data
export { data }

import fetch from 'node-fetch'


const data = async () => {
  const response = await fetch('https://brillout.github.io/star-wars/api/films.json')
  /**
   * @type {import('../types').MovieDetails[]}
   */
  const moviesData = (await response.json());
  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  const movies = minimize(moviesData)
  return { movies }
}

/**
 * 
 * @param {import('../types').MovieDetails[]} movies 
 * @returns 
 */
function minimize(movies) {
  return movies.map((movie) => {
    const { title, release_date, id } = movie
    return { title, release_date, id }
  })
}
