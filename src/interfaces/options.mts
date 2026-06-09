/**
 * @file Interfaces - Options
 * @module fsm-compiler/interfaces/Options
 */

import type { Point } from '@flex-development/fsm-tokenizer'

/**
 * Options for configuring an event compiler.
 *
 * @todo `extensions`
 */
interface Options {
  /**
   * The point before the first character in the content.
   *
   * @see {@linkcode Point}
   *
   * @default
   *  { column: 1, line: 1, offset: 0 }
   */
  from?: Point | null | undefined
}

export type { Options as default }
