/**
 * @file Type Tests - Handles
 * @module fsm-compiler/types/tests/unit-d/Handles
 */

import type TestSubject from '#types/handles'
import type { Handle } from '@flex-development/fsm-compiler'
import type { TokenType } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Handles', () => {
  it('should equal Partial<Record<TokenType, Handle>>', () => {
    // Arrange
    type Expect = Partial<Record<TokenType, Handle>>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
