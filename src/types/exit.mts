/**
 * @file Type Aliases - Exit
 * @module fsm-compiler/types/Exit
 */

import type {
  CompileContext,
  OnExitError
} from '@flex-development/fsm-compiler'
import type { Token, TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Exit a node.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode OnExitError}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [T]
 *  The corresponding token type
 *
 * @this {CompileContext}
 *
 * @param {Token<T>} token
 *  The corresponding token
 * @param {OnExitError | null | undefined} [onError]
 *  Handle the case where another token is open
 * @return {undefined}
 */
type Exit<T extends TokenType = TokenType> = (
  this: CompileContext,
  token: Token<T>,
  onError?: OnExitError | null | undefined
) => undefined

export type { Exit as default }
