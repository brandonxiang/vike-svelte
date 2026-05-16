export { mergeAttributes, serializeAttributes }

/**
 * @param {Record<string, unknown> | Array<Record<string, unknown>> | undefined} value
 * @returns {Record<string, unknown>}
 */
function mergeAttributes(value) {
  if (!value) {
    return {}
  }
  if (Array.isArray(value)) {
    return Object.assign({}, ...value)
  }
  return value
}

/**
 * @param {Record<string, unknown>} attributes
 * @returns {string}
 */
function serializeAttributes(attributes) {
  return Object.entries(attributes)
    .flatMap(([name, value]) => {
      if (value === false || value === null || value === undefined) {
        return []
      }
      if (value === true) {
        return [escapeAttributeName(name)]
      }
      return [`${escapeAttributeName(name)}="${escapeAttributeValue(String(value))}"`]
    })
    .join(' ')
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeAttributeName(value) {
  return value.replace(/[^A-Za-z0-9_:-]/g, '')
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeAttributeValue(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
