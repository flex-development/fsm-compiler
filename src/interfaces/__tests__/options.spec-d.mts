/**
 * @file Type Tests - Options
 * @module fsm-compiler/interfaces/tests/unit-d/Options
 */

import type TestSubject from '#interfaces/options'
import type { Point } from '@flex-development/fsm-tokenizer'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/Options', () => {
  it('should match [from?: Point | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('from')
      .toEqualTypeOf<Nilable<Point>>()
  })
})
