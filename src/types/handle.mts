/**
 * @file Type Aliases - Handle
 * @module fsm-compiler/types/Handle
 */

import type { CompileContext } from '@flex-development/fsm-compiler'
import type { Token, TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Handle a token.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [T]
 *  The token type
 *
 * @this {CompileContext}
 *
 * @param {Token<T>} token
 *  The token to handle
 * @return {undefined}
 */
type Handle<T extends TokenType = TokenType> = (
  this: CompileContext,
  token: Token<T>
) => undefined

export type { Handle as default }
