import { describe, expect, it } from 'vitest'
import { getTitle } from './getTitle.js'

function createPageContext(overrides = {}) {
  return {
    configEntries: {},
    ...overrides,
  }
}

describe('getTitle', () => {
  it('prefers title provided by runtime config', () => {
    expect(
      getTitle(
        createPageContext({
          _configFromHook: { title: 'Hook title' },
          title: 'Page title',
          configEntries: {
            title: [{ configValue: 'Config title', configDefinedAt: '+title' }],
          },
        }),
      ),
    ).toBe('Hook title')
  })

  it('falls back to pageContext.title and config entries', () => {
    expect(getTitle(createPageContext({ title: 'Page title' }))).toBe('Page title')
    expect(
      getTitle(
        createPageContext({
          configEntries: {
            title: [{ configValue: (pageContext) => `Config title for ${pageContext.routeId}`, configDefinedAt: '+title' }],
          },
          routeId: '/dashboard',
        }),
      ),
    ).toBe('Config title for /dashboard')
  })

  it('returns null when no title is configured', () => {
    expect(getTitle(createPageContext())).toBeNull()
  })

  it('throws when configured titles have invalid types', () => {
    expect(() => getTitle(createPageContext({ _configFromHook: { title: 42 } }))).toThrow(
      'pageContext._configFromHook.title should be a string',
    )
    expect(() =>
      getTitle(
        createPageContext({
          configEntries: {
            title: [{ configValue: () => 42, configDefinedAt: '+title' }],
          },
        }),
      ),
    ).toThrow('+title should return a string')
  })
})
