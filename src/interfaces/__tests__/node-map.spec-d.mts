/**
 * @file Type Tests - NodeMap
 * @module fsm-compiler/interfaces/tests/unit-d/NodeMap
 */

import type TestSubject from '#interfaces/node-map'
import type { Fragment } from '@flex-development/fsm-compiler'

describe('unit-d:interfaces/NodeMap', () => {
  it('should match [fragment: Fragment]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fragment')
      .toEqualTypeOf<Fragment>()
  })
})
