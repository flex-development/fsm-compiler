/**
 * @file Type Tests - OnExitError
 * @module fsm-compiler/types/tests/unit-d/OnExitError
 */

import type TestSubject from '#types/on-exit-error'
import type { CompileContext } from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/OnExitError', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<L>, Token<R>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token, Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
