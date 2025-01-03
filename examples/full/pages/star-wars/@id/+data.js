// https://vike.dev/data
export { data }
// export type Data = Awaited<ReturnType<typeof data>>

// import { useConfig } from 'vike-react/useConfig'
// import type { PageContextServer } from 'vike/types'
// import type { MovieDetails } from '../types'
// import React from 'react'

/**
 * 
 * @param {import('vike/types').PageContextServer} pageContext 
 * @returns 
 */
const data = async (pageContext ) => {
//   const config = useConfig()

  const response = await fetch(`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`)
  let movie = /** @type {import('../types').MovieDetails} */(await response.json())

//   const { title } = movie
//   config({
//     title, // <title>
//     Head: (
//       <>
//         <meta name="description" content={`Star Wars Movie ${title} from ${movie.director}`} />
//       </>
//     ),
//   })

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  movie = minimize(movie)

  return movie
}

/**
 * 
 * @param {import('../types').MovieDetails} movie
 * @returns {import('../types').MovieDetails}
 */
function minimize(movie)  {
  const { id, title, release_date, director, producer } = movie
  movie = { id, title, release_date, director, producer }
  return movie
}