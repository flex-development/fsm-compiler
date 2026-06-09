/**
 * @file Type Aliases - OnExitError
 * @module fsm-compiler/types/OnExitError
 */

import type { CompileContext } from '@flex-development/fsm-compiler'
import type { Token, TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Handle the case where the `right` token is open,
 * but is closed by exiting the `left` token.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [Left]
 *  The left token type
 * @template {TokenType} [Right]
 *  The open token type
 *
 * @this {Omit<CompileContext, 'sliceSerialize'>}
 *
 * @param {Token<Left>} left
 *  The left token
 * @param {Token<Right>} right
 *  The open token
 * @return {undefined}
 */
type OnExitError<
  Left extends TokenType = TokenType,
  Right extends TokenType = TokenType
> = (
  this: Omit<CompileContext, 'sliceSerialize'>,
  left: Token<Left>,
  right: Token<Right>
) => undefined

export type { OnExitError as default }
