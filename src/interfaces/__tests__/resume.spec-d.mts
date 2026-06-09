/**
 * @file Type Tests - Resume
 * @module fsm-compiler/interfaces/tests/unit-d/Resume
 */

import type TestSubject from '#interfaces/resume'
import type { CompileContext } from '@flex-development/fsm-compiler'

describe('unit-d:interfaces/Resume', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return string', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<string>()
    })
  })
})
