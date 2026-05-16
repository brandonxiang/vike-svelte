export { getTitle }

import { isCallable } from './utils/isCallable.js'

/**
 * 
 * @param {import('vike/types').PageContext} pageContext 
 * @returns { null | string }
 */
function getTitle(pageContext) {
  const configFromHook = /** @type {*} */ (pageContext)._configFromHook
  const titleFromHook = configFromHook?.title
  if (titleFromHook) {
    if (typeof titleFromHook !== 'string') {
      throw new Error('pageContext._configFromHook.title should be a string')
    }
    return titleFromHook
  }
  if (pageContext.title) {
    if (typeof pageContext.title !== 'string') {
      throw new Error('pageContext.title should be a string')
    }
    return pageContext.title
  } else {
    const titleConfig = pageContext.configEntries.title?.[0]
    if (!titleConfig) {
      return null
    }
    const title = titleConfig.configValue
    if (typeof title === 'string') {
      return title
    }
    if (!title) {
      return null
    }
    const { configDefinedAt } = titleConfig
    if (isCallable(title)) {
      const val = title(pageContext)
      if (typeof val !== 'string') {
        throw new Error(configDefinedAt + ' should return a string')
      }
      return val
    }
    throw new Error(configDefinedAt + ' should be a string or a function returning a string')
  }
}
