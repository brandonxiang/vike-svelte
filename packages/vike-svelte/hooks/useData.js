import { getContext } from 'svelte'
import { DataKey } from '../renderer/utils/context.js'

/**
 * Read `pageContext.data` from Svelte component context.
 *
 * @returns {unknown}
 */
export function useData() {
  return getContext(DataKey)
}
