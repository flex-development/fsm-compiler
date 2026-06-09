/**
 * @file Type Tests - CompileContext
 * @module fsm-compiler/interfaces/tests/unit-d/CompileContext
 */

import type TestSubject from '#interfaces/compile-context'
import type {
  Buffer,
  CompileData,
  Enter,
  Exit,
  Node,
  Resume,
  StackedToken
} from '@flex-development/fsm-compiler'
import type { SliceSerialize } from '@flex-development/fsm-tokenizer'

describe('unit-d:interfaces/CompileContext', () => {
  it('should match [buffer: Buffer]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('buffer').toEqualTypeOf<Buffer>()
  })

  it('should match [data: CompileData]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<CompileData>()
  })

  it('should match [enter: Enter]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('enter').toEqualTypeOf<Enter>()
  })

  it('should match [exit: Exit]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('exit').toEqualTypeOf<Exit>()
  })

  it('should match [resume: Resume]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('resume').toEqualTypeOf<Resume>()
  })

  it('should match [sliceSerialize: SliceSerialize]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sliceSerialize')
      .toEqualTypeOf<SliceSerialize>()
  })

  it('should match [stack: Node[]]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('stack').toEqualTypeOf<Node[]>()
  })

  it('should match [tokenStack: StackedToken[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tokenStack')
      .toEqualTypeOf<StackedToken[]>()
  })
})
