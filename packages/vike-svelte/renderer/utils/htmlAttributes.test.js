import { describe, expect, it } from 'vitest'
import { mergeAttributes, serializeAttributes } from './htmlAttributes.js'

describe('htmlAttributes utilities', () => {
  it('merges cumulative attribute objects from left to right', () => {
    expect(
      mergeAttributes([
        { class: 'base', hidden: true, 'data-theme': 'light' },
        { hidden: false, 'data-theme': 'dark' },
      ]),
    ).toEqual({
      class: 'base',
      hidden: false,
      'data-theme': 'dark',
    })
  })

  it('serializes boolean, numeric, and escaped attribute values', () => {
    expect(
      serializeAttributes({
        'data-count': 3,
        hidden: true,
        inert: false,
        bad$name: 'ignored-name-char',
        title: 'A "quoted" <value> & more',
        missing: null,
      }),
    ).toBe('data-count="3" hidden badname="ignored-name-char" title="A &quot;quoted&quot; &lt;value&gt; &amp; more"')
  })
})
