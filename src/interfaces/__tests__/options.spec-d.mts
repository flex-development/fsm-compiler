/**
 * @file Type Tests - Options
 * @module fsm-compiler/interfaces/tests/unit-d/Options
 */

import type TestSubject from '#interfaces/options'
import type {
  Extensions,
  FinalizeContext,
  Preprocess,
  SerializeNode,
  TakeExtension
} from '@flex-development/fsm-compiler'
import type { Point } from '@flex-development/fsm-tokenizer'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/Options', () => {
  it('should match [extensions?: Extensions | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('extensions')
      .toEqualTypeOf<Nilable<Extensions>>()
  })

  it('should match [finalizeContext?: FinalizeContext | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('finalizeContext')
      .toEqualTypeOf<Nilable<FinalizeContext>>()
  })

  it('should match [from?: Point | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('from')
      .toEqualTypeOf<Nilable<Point>>()
  })

  it('should match [preprocess?: Preprocess | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preprocess')
      .toEqualTypeOf<Nilable<Preprocess>>()
  })

  it('should match [serializeNode?: SerializeNode | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('serializeNode')
      .toEqualTypeOf<Nilable<SerializeNode>>()
  })

  it('should match [takeExtension?: TakeExtension | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('takeExtension')
      .toEqualTypeOf<Nilable<TakeExtension>>()
  })
})
