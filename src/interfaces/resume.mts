/**
 * @file Interfaces - Resume
 * @module fsm-compiler/interfaces/Resume
 */

import type { CompileContext } from '@flex-development/fsm-compiler'

/**
 * Access buffered output data.
 */
interface Resume {
  /**
   * Stop capturing and access the output data.
   *
   * @see {@linkcode CompileContext}
   *
   * @this {CompileContext}
   *
   * @return {string}
   *  The captured output data
   */
  (this: CompileContext): string
}

export type { Resume as default }
