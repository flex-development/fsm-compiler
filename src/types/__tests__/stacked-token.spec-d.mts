/**
 * @file Type Tests - StackedToken
 * @module fsm-compiler/types/tests/unit-d/StackedToken
 */

import type TestSubject from '#types/stacked-token'
import type { OnEnterError } from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/StackedToken', () => {
  it('should equal [Token, OnEnterError | null | undefined]', () => {
    // Arrange
    type Expect = [Token, OnEnterError | null | undefined]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
