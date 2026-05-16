import { describe, expect, it } from 'vitest'
import { getComponentStack } from './componentStack.js'

const Page = () => null
const WrapperA = () => null
const WrapperB = () => null
const LayoutA = () => null
const LayoutB = () => null

describe('getComponentStack', () => {
  it('places wrappers outside layouts and page at the center', () => {
    expect(
      getComponentStack(
        {
          Wrapper: [WrapperA, undefined, WrapperB],
          Layout: [LayoutA, LayoutB],
        },
        Page,
      ),
    ).toEqual([WrapperA, WrapperB, LayoutA, LayoutB, Page])
  })

  it('accepts a single wrapper or layout component', () => {
    expect(getComponentStack({ Wrapper: WrapperA, Layout: LayoutA }, Page)).toEqual([WrapperA, LayoutA, Page])
  })
})
