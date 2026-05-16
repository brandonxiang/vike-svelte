import { BROWSER } from 'esm-env'
import { getContext } from 'svelte'
import { PageKey } from '../renderer/utils/context.js'
import { mergeAttributes } from '../renderer/utils/htmlAttributes.js'

/**
 * @typedef {Record<string, string | number | boolean | null | undefined>} ConfigAttributes
 * @typedef {Object} RuntimeConfig
 * @property {string | undefined} [title]
 * @property {string | undefined} [description]
 * @property {string | undefined} [lang]
 * @property {string | undefined} [favicon]
 * @property {string | undefined} [viewport]
 * @property {ConfigAttributes | ConfigAttributes[] | undefined} [htmlAttributes]
 * @property {ConfigAttributes | ConfigAttributes[] | undefined} [bodyAttributes]
 */

/**
 * Update page-level Vike config from a Svelte component.
 *
 * This runs during SSR and on the client. The renderer reads
 * `pageContext._configFromHook` after Svelte has rendered the page.
 *
 * @param {RuntimeConfig} config
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
 * @param {RuntimeConfig} config
 */
function applyClientConfig(config) {
  if (typeof config.title === 'string') {
    document.title = config.title
  }
  if (config.htmlAttributes) {
    applyAttributes(document.documentElement, mergeAttributes(config.htmlAttributes))
  }
  if (config.bodyAttributes && document.body) {
    applyAttributes(document.body, mergeAttributes(config.bodyAttributes))
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
  if (typeof config.viewport === 'string') {
    upsertElement('meta[name="viewport"]', 'meta', (element) => {
      element.setAttribute('name', 'viewport')
      element.setAttribute('content', config.viewport || '')
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
 * @param {Element} element
 * @param {Record<string, unknown>} attributes
 */
function applyAttributes(element, attributes) {
  Object.entries(attributes).forEach(([name, value]) => {
    const attributeName = normalizeAttributeName(name)
    if (!attributeName) {
      return
    }
    if (value === false || value === null || value === undefined) {
      element.removeAttribute(attributeName)
      return
    }
    element.setAttribute(attributeName, value === true ? '' : String(value))
  })
}

/**
 * @param {string} value
 * @returns {string}
 */
function normalizeAttributeName(value) {
  return value.replace(/[^A-Za-z0-9_:-]/g, '')
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
