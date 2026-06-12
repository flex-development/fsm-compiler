/**
 * @file Type Aliases - Exit
 * @module fsm-compiler/types/Exit
 */

import type {
  CompileContext,
  OnExitError
} from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

/**
 * Exit a node.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode OnExitError}
 * @see {@linkcode Token}
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @param {OnExitError | null | undefined} [onError]
 *  Handle the case where another token is open
 * @return {undefined}
 */
type Exit = (
  this: CompileContext,
  token: Token,
  onError?: OnExitError | null | undefined
) => undefined

export type { Exit as default }
