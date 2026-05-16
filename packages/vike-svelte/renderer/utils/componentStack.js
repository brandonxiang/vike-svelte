export { getComponentStack }

/**
 * @param {*} config
 * @param {import('svelte').Component} Page
 * @returns {import('svelte').Component[]}
 */
function getComponentStack(config, Page) {
  return [
    ...normalizeComponents(config.Wrapper),
    ...normalizeComponents(config.Layout),
    Page,
  ]
}

/**
 * @param {import('svelte').Component | import('svelte').Component[] | undefined} value
 * @returns {import('svelte').Component[]}
 */
function normalizeComponents(value) {
  if (!value) {
    return []
  }
  return Array.isArray(value) ? value.filter(Boolean) : [value]
}
