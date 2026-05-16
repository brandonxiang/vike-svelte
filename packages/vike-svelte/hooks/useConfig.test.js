// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest'

let pageContext
const getContext = vi.fn(() => pageContext)

vi.mock('svelte', () => ({ getContext }))
vi.mock('esm-env', () => ({ BROWSER: true }))

const { useConfig } = await import('./useConfig.js')

describe('useConfig', () => {
  beforeEach(() => {
    pageContext = {}
    document.title = ''
    document.documentElement.removeAttribute('lang')
    document.documentElement.removeAttribute('data-section')
    document.documentElement.removeAttribute('data-empty')
    document.documentElement.removeAttribute('badattr')
    document.body.removeAttribute('data-shell')
    document.body.removeAttribute('data-remove')
    document.head.innerHTML = ''
    getContext.mockClear()
  })

  it('stores runtime config on page context', () => {
    useConfig({
      title: 'Dashboard',
      description: 'Team dashboard',
      htmlAttributes: { 'data-section': 'app' },
    })

    expect(pageContext._configFromHook).toEqual({
      title: 'Dashboard',
      description: 'Team dashboard',
      htmlAttributes: { 'data-section': 'app' },
    })
  })

  it('updates client document metadata and attributes', () => {
    useConfig({
      title: 'Dashboard',
      description: 'Team dashboard',
      lang: 'fr',
      favicon: '/favicon.svg',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttributes: {
        'data-section': 'dashboard',
        'data-empty': true,
        'bad attr': 'normalized',
      },
      bodyAttributes: [
        { 'data-shell': 'base', 'data-remove': 'old' },
        { 'data-shell': 'runtime', 'data-remove': null },
      ],
    })

    expect(document.title).toBe('Dashboard')
    expect(document.documentElement.lang).toBe('fr')
    expect(document.documentElement.getAttribute('data-section')).toBe('dashboard')
    expect(document.documentElement.getAttribute('data-empty')).toBe('')
    expect(document.documentElement.getAttribute('badattr')).toBe('normalized')
    expect(document.body.getAttribute('data-shell')).toBe('runtime')
    expect(document.body.hasAttribute('data-remove')).toBe(false)
    expect(document.head.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Team dashboard')
    expect(document.head.querySelector('meta[name="viewport"]')?.getAttribute('content')).toBe(
      'width=device-width, initial-scale=1',
    )
    expect(document.head.querySelector('link[rel="icon"]')?.getAttribute('href')).toBe('/favicon.svg')
  })
})
