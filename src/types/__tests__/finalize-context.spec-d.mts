/**
 * @file Type Tests - FinalizeContext
 * @module fsm-compiler/types/tests/unit-d/FinalizeContext
 */

import type { Options } from '@flex-development/fsm-compiler'
import type { CompileContext } from '@flex-development/fsm/ast'
import type TestSubject from '../finalize-context.mts'

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
