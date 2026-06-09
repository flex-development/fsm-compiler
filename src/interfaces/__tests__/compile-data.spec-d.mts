/**
 * @file Type Tests - CompileData
 * @module fsm-compiler/interfaces/tests/unit-d/CompileData
 */

import type TestSubject from '#interfaces/compile-data'

describe('unit-d:interfaces/CompileData', () => {
  it('should have no keys', () => {
    expectTypeOf<keyof TestSubject>().toBeNever()
  })
})
