/**
 * @file Type Tests - SerializeNode
 * @module fsm-compiler/types/tests/unit-d/SerializeNode
 */

import type TestSubject from '#types/serialize-node'
import type { Node } from '@flex-development/fsm-compiler'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:types/SerializeNode', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Node | undefined]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Node | undefined]>()
    })
  })

  describe('returns', () => {
    it('should return string | null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Nilable<string>>()
    })
  })
})
