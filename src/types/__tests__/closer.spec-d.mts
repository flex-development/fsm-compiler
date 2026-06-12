/**
 * @file Type Tests - Closer
 * @module fsm-compiler/types/tests/unit-d/Closer
 */

import type TestSubject from '#types/closer'
import type { Handle } from '@flex-development/fsm-compiler'

describe('unit-d:types/Closer', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Handle<T> | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[(Handle | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Handle<T>', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Handle>()
    })
  })
})
