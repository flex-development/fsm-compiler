/**
 * @file Type Tests - OnEnterError
 * @module fsm-compiler/types/tests/unit-d/OnEnterError
 */

import type TestSubject from '#types/on-enter-error'
import type { CompileContext } from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/OnEnterError', () => {
  it('should match [this: Omit<CompileContext, "sliceSerialize">]', () => {
    // Arrange
    type Expect = Omit<CompileContext, 'sliceSerialize'>

    // Expect
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Expect>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<Left> | null | undefined, Token<Right>]', () => {
      // Arrange
      type Expect = [Token | null | undefined, Token]

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
