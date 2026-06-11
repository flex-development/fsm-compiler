/**
 * @file Type Aliases - CreateExtensions
 * @module fsm-compiler/types/CreateExtensions
 */

import type {
  Buffer,
  Closer,
  Extension,
  Opener
} from '@flex-development/fsm-compiler'
import type { List } from '@flex-development/fsm-tokenizer'

/**
 * Create an extension or a collection of extensions.
 *
 * @see {@linkcode Buffer}
 * @see {@linkcode Closer}
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 * @see {@linkcode Opener}
 *
 * @this {void}
 *
 * @param {Opener} opener
 *  Create an enter handle
 * @param {Closer} closer
 *  Create an exit handle
 * @param {Buffer} buffer
 *  Capture some of the output data
 * @return {Extension | List<Extension>}
 *  The extension, or the list of extensions
 */
type CreateExtensions = (
  this: void,
  opener: Opener,
  closer: Closer,
  buffer: Buffer
) => Extension | List<Extension>

export type { CreateExtensions as default }
