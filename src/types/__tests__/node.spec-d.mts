/**
 * @file Type Tests - Node
 * @module fsm-compiler/types/tests/unit-d/Node
 */

import type TestSubject from '#types/node'
import type { NodeMap } from '@flex-development/fsm-compiler'

describe('unit-d:types/Node', () => {
  it('should equal NodeMap[keyof NodeMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<NodeMap[keyof NodeMap]>()
  })
})
