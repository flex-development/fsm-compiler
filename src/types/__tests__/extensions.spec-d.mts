/**
 * @file Type Tests - Extensions
 * @module fsm-compiler/types/tests/unit-d/Extensions
 */

import type TestSubject from '#types/extensions'
import type {
  CreateExtensions,
  Extension
} from '@flex-development/fsm-compiler'
import type { List } from '@flex-development/fsm-tokenizer'

describe('unit-d:types/Extensions', () => {
  it('should allow CreateExtensions', () => {
    expectTypeOf<TestSubject>().extract<CreateExtensions>().not.toBeNever()
  })

  it('should allow Extension', () => {
    expectTypeOf<TestSubject>().extract<Extension>().not.toBeNever()
  })

  it('should allow List<Extension>', () => {
    expectTypeOf<TestSubject>().extract<List<Extension>>().not.toBeNever()
  })
})
