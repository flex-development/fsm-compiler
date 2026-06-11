/**
 * @file Interfaces - Config
 * @module fsm-compiler/interfaces/Config
 */

import type {
  Extension,
  Handles,
  Transform
} from '@flex-development/fsm-compiler'

/**
 * The compiler configuration.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/fsm-compiler' {
 *    interface Extension {
 *      canContainEols: string[]
 *    }
 *  }
 *
 * @extends {Extension}
 */
interface Config extends Extension {
  /**
   * Record, where each key is a token type and each value is the handler to
   * call when entering a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  enter: Handles

  /**
   * Record, where each key is a token type and each value is the handler to
   * call when entering a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  exit: Handles

  /**
   * The list of tree transforms to apply.
   *
   * @see {@linkcode Transform}
   *
   * @override
   */
  transforms: Transform[]
}

export type { Config as default }
