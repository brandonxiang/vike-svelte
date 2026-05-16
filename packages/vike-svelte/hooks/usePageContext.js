import { getContext } from 'svelte'
import { PageKey } from '../renderer/utils/context.js'

/**
 * Read the current Vike page context from Svelte component context.
 *
 * @returns {import('vike/types').PageContext | import('vike/types').PageContextClient}
 */
export function usePageContext() {
  return getContext(PageKey)
}
