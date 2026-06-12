/**
 * @file Type Tests - Compile
 * @module fsm-compiler/types/tests/unit-d/Compile
 */

import type TestSubject from '#types/compile'
import type { Tree } from '@flex-development/fsm-compiler'
import type { Event } from '@flex-development/fsm-tokenizer'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:types/Compile', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Event[] | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Nilable<Event[]>?]>()
    })
  })

  describe('returns', () => {
    it('should return Tree', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Tree>()
    })
  })
})
