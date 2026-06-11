/**
 * @file Type Tests - FinalizeContext
 * @module fsm-compiler/types/tests/unit-d/FinalizeContext
 */

import type TestSubject from '#types/finalize-context'
import type { CompileContext, Options } from '@flex-development/fsm-compiler'

describe('unit-d:types/FinalizeContext', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [CompileContext, Options]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[CompileContext, Options]>()
    })
  })

  describe('returns', () => {
    it('should return null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<null | undefined>()
    })
  })
})
