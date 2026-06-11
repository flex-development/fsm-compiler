/**
 * @file Type Tests - Handles
 * @module fsm-compiler/types/tests/unit-d/Handles
 */

import type TestSubject from '#types/handles'
import type { Handle } from '@flex-development/fsm-compiler'
import type { TokenType } from '@flex-development/fsm-tokenizer'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:types/Handles', () => {
  it('should equal Partial<Record<TokenType, Handle | null | undefined>>', () => {
    // Arrange
    type Expect = Partial<Record<TokenType, Nilable<Handle>>>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
