/**
 * @file Type Tests - Enter
 * @module fsm-compiler/types/tests/unit-d/Enter
 */

import type TestSubject from '#types/enter'
import type {
  CompileContext,
  Node,
  OnEnterError
} from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Enter', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [N, Token<T>, (OnEnterError<any, any> | null | undefined)?]', () => {
      // Arrange
      type Expect = [Node, Token, (OnEnterError<any, any> | null | undefined)?]

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
