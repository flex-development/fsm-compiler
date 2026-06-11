/**
 * @file Type Tests - CreateNode
 * @module fsm-compiler/types/tests/unit-d/CreateNode
 */

import type TestSubject from '#types/create-node'
import type { Node } from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/CreateNode', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return N', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Node>()
    })
  })
})
