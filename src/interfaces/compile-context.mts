/**
 * @file Interfaces - CompileContext
 * @module fsm-compiler/interfaces/CompileContext
 */

import type {
  Buffer,
  CompileData,
  Compiler,
  Config,
  Enter,
  Exit,
  Node,
  Preprocess,
  Resume,
  StackedToken
} from '@flex-development/fsm-compiler'
import type { SliceSerialize } from '@flex-development/fsm-tokenizer'

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
   * @see {@linkcode Compiler}
   */
  compile: Compiler

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
   * @see {@linkcode SliceSerialize}
   */
  sliceSerialize?: SliceSerialize | null | undefined

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
