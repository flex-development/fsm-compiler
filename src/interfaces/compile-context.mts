/**
 * @file Interfaces - CompileContext
 * @module fsm-compiler/interfaces/CompileContext
 */

import type {
  Buffer,
  Compile,
  CompileData,
  Config,
  Enter,
  Exit,
  Node,
  Preprocess,
  Resume,
  StackedToken
} from '@flex-development/fsm-compiler'
import type {
  Point,
  SliceSerialize,
  TokenizeContext
} from '@flex-development/fsm-tokenizer'

/**
 * The event compilation context.
 */
interface CompileContext {
  /**
   * Capture some of the output data.
   *
   * @see {@linkcode Buffer}
   */
  buffer: Buffer

  /**
   * Turn events into a syntax tree.
   *
   * @see {@linkcode Compile}
   */
  compile: Compile

  /**
   * The compiler configuration.
   *
   * @see {@linkcode Config}
   */
  config: Config

  /**
   * The registry of tracked data.
   *
   * @see {@linkcode CompileData}
   */
  data: CompileData

  /**
   * Enter a node.
   *
   * @see {@linkcode Enter}
   */
  enter: Enter

  /**
   * Exit a node.
   *
   * @see {@linkcode Exit}
   */
  exit: Exit

  /**
   * The point before the first character in the content.
   *
   * @see {@linkcode Point}
   */
  from: Point

  /**
   * Preprocess events before turning them into a syntax tree.
   *
   * @see {@linkcode Preprocess}
   */
  preprocess?: Preprocess | null | undefined

  /**
   * Stop capturing and access the output data.
   *
   * @see {@linkcode Resume}
   */
  resume: Resume

  /**
   * Get the text spanning the specified range.
   *
   * > 👉 **Note**: Returns an empty string by default.
   * > If a custom serializer has not been defined prior to event compilation,
   * > a tokenizer's serializer ({@linkcode TokenizeContext.sliceSerialize})
   * > will be assigned to this field.
   *
   * @see {@linkcode SliceSerialize}
   */
  sliceSerialize: SliceSerialize

  /**
   * The node stack.
   *
   * @see {@linkcode Node}
   */
  stack: Node[]

  /**
   * The token stack.
   *
   * @see {@linkcode StackedToken}
   */
  tokenStack: StackedToken[]
}

export type { CompileContext as default }
