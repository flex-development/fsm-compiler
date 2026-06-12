/**
 * @file Type Tests - Opener
 * @module fsm-compiler/types/tests/unit-d/Opener
 */

import type TestSubject from '#types/opener'
import type { CreateNode, Handle } from '@flex-development/fsm-compiler'

describe('unit-d:types/Opener', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [CreateNode<N, T>, (Handle<T> | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[CreateNode, (Handle | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Handle<T>', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Handle>()
    })
  })
})
