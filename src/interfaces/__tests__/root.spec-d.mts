/**
 * @file Type Tests - Root
 * @module fsm-compiler/interfaces/tests/unit-d/Root
 */

import type TestSubject from '#interfaces/root'
import type { Literal, Node, Parent } from 'unist'

describe('unit-d:interfaces/Root', () => {
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
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'root'>()
  })
})
