/**
 * @file Type Tests - Buffer
 * @module fsm-compiler/types/tests/unit-d/Buffer
 */

import type TestSubject from '#types/buffer'
import type { CompileContext } from '@flex-development/fsm-compiler'

describe('unit-d:types/Buffer', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
