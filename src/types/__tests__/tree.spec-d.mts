/**
 * @file Type Tests - Tree
 * @module fsm-compiler/types/tests/unit-d/Tree
 */

import type TestSubject from '#types/tree'
import type { Node, Root } from '@flex-development/fsm-compiler'

describe('unit-d:types/Tree', () => {
  it('should equal Extract<Node, Root>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Extract<Node, Root>>()
  })
})
