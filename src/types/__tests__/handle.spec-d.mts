/**
 * @file Type Tests - Handle
 * @module fsm-compiler/types/tests/unit-d/Handle
 */

import type TestSubject from '#types/handle'
import type { CompileContext } from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Handle', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
