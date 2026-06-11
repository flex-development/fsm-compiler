/**
 * @file Interfaces - Extension
 * @module fsm-compiler/interfaces/Extension
 */

import type { Handles, Transform } from '@flex-development/fsm-compiler'
import type { List } from '@flex-development/fsm-tokenizer'

/**
 * A compiler extension.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/fsm-compiler' {
 *    interface Extension {
 *      canContainEols?: string[] | null | undefined
 *    }
 *  }
 */
interface Extension {
  /**
   * Record, where each key is a token type and each value is the handler to
   * call when entering a token.
   *
   * @see {@linkcode Handles}
   */
  enter?: Handles | null | undefined

  /**
   * Record, where each key is a token type and each value is the handler to
   * call when entering a token.
   *
   * @see {@linkcode Handles}
   */
  exit?: Handles | null | undefined

  /**
   * The list of tree transforms to apply.
   *
   * @see {@linkcode List}
   * @see {@linkcode Transform}
   */
  transforms?: List<Transform> | null | undefined
}

export type { Extension as default }
