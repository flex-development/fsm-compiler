/**
 * @file Type Tests - OnEnterError
 * @module fsm-compiler/types/tests/unit-d/OnEnterError
 */

import type TestSubject from '#types/on-enter-error'
import type { CompileContext } from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/OnEnterError', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<L> | undefined, Token<R>]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Token | undefined, Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
