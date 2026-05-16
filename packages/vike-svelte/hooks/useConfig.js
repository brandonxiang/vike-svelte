import { BROWSER } from 'esm-env'
import { getContext } from 'svelte'
import { PageKey } from '../renderer/utils/context.js'

/**
 * Update page-level Vike config from a Svelte component.
 *
 * This runs during SSR and on the client. The renderer reads
 * `pageContext._configFromHook` after Svelte has rendered the page.
 *
 * @param {{ title?: string, description?: string, lang?: string, favicon?: string }} config
 */
export function useConfig(config) {
  /** @type {*} */
  const pageContext = getContext(PageKey)
  pageContext._configFromHook = {
    ...pageContext._configFromHook,
    ...config,
  }

  if (BROWSER) {
    applyClientConfig(config)
  }
}

/**
 * @param {{ title?: string, description?: string, lang?: string, favicon?: string }} config
 */
function applyClientConfig(config) {
  if (typeof config.title === 'string') {
    document.title = config.title
  }
  if (typeof config.lang === 'string') {
    document.documentElement.lang = config.lang
  }
  if (typeof config.description === 'string') {
    upsertElement('meta[name="description"]', 'meta', (element) => {
      element.setAttribute('name', 'description')
      element.setAttribute('content', config.description || '')
    })
  }
  if (typeof config.favicon === 'string') {
    upsertElement('link[rel="icon"]', 'link', (element) => {
      element.setAttribute('rel', 'icon')
      element.setAttribute('href', config.favicon || '')
    })
  }
}

/**
 * @param {string} selector
 * @param {string} tagName
 * @param {(element: Element) => void} update
 */
function upsertElement(selector, tagName, update) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement(tagName)
    document.head.appendChild(element)
  }
  update(element)
}
