/**
 * @file Type Tests - Compiler
 * @module fsm-compiler/types/tests/unit-d/Compiler
 */

import type TestSubject from '#types/compiler'
import type { Root } from '@flex-development/fsm-compiler'
import type { Event } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Compiler', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Event[]]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Event[]]>()
    })
  })

  describe('returns', () => {
    it('should return Tree', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Root>()
    })
  })
})
