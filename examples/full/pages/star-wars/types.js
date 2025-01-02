/**
 * @typedef {Object} Movie
 * @property {string} id
 * @property {string} title
 * @property {string} release_date
 */

/**
 * @typedef {Movie & {
 *   director: string,
 *   producer: string
 * }} MovieDetails
 */

export { Movie, MovieDetails }