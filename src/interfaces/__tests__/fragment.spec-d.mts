/**
 * @file Type Tests - Fragment
 * @module fsm-compiler/interfaces/tests/unit-d/Fragment
 */

import type TestSubject from '#interfaces/fragment'
import type { Literal, Node, Parent } from 'unist'

describe('unit-d:interfaces/Fragment', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toExtend<Parent>()
  })

  it('should match [children: Child[]]', () => {
    // Arrange
    type Child = Literal | Node | Parent

    // Expect
    expectTypeOf<TestSubject<Child>>()
      .toHaveProperty('children')
      .toEqualTypeOf<Child[]>()
  })

  it('should match [type: "fragment"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'fragment'>()
  })
})
