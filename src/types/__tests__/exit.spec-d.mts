/**
 * @file Type Tests - Exit
 * @module fsm-compiler/types/tests/unit-d/Exit
 */

import type TestSubject from '#types/exit'
import type {
  CompileContext,
  OnExitError
} from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Exit', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>, (OnExitError | null | undefined)?]', () => {
      // Arrange
      type Expect = [Token, (OnExitError | null | undefined)?]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
