/**
 * @file Type Tests - CreateExtensions
 * @module fsm-compiler/types/tests/unit-d/CreateExtensions
 */

import type TestSubject from '#types/create-extensions'
import type {
  Buffer,
  Closer,
  Extension,
  Opener
} from '@flex-development/fsm-compiler'
import type { List } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/CreateExtensions', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Opener, Closer, Buffer]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Opener, Closer, Buffer]>()
    })
  })

  describe('returns', () => {
    it('should return Extension | List<Extension>', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<Extension | List<Extension>>()
    })
  })
})
