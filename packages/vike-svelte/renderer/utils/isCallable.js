/**
 * @template { (...args: unknown[]) => unknown } T
 * @param { T | unknown } thing 
 * @returns {thing is T}
 */
export function isCallable(thing) {
  return thing instanceof Function || typeof thing === 'function'
}