/**
 * @file Type Tests - Transform
 * @module fsm-compiler/types/tests/unit-d/Transform
 */

import type TestSubject from '#types/transform'
import type { Root } from '@flex-development/fsm-compiler'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:types/Transform', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Tree]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Root]>()
    })
  })

  describe('returns', () => {
    it('should return Tree | null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Nilable<Root>>()
    })
  })
})
