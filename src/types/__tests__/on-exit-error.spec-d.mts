/**
 * @file Type Tests - OnExitError
 * @module fsm-compiler/types/tests/unit-d/OnExitError
 */

import type TestSubject from '#types/on-exit-error'
import type { CompileContext } from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/OnExitError', () => {
  it('should match [this: Omit<CompileContext, "sliceSerialize">]', () => {
    // Arrange
    type Expect = Omit<CompileContext, 'sliceSerialize'>

    // Expect
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Expect>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<Left>, Token<Right>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token, Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
