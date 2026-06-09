/**
 * @file Type Aliases - OnEnterError
 * @module fsm-compiler/types/OnEnterError
 */

import type { CompileContext } from '@flex-development/fsm-compiler'
import type { Token, TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Handle the case where the `right` token is open,
 * but is closed by the `left` token, or because end of content was reached.
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
 * @param {Token<Left> | null | undefined} left
 *  The left token
 * @param {Token<Right>} right
 *  The open token
 * @return {undefined}
 */
type OnEnterError<
  Left extends TokenType = TokenType,
  Right extends TokenType = TokenType
> = (
  this: Omit<CompileContext, 'sliceSerialize'>,
  left: Token<Left> | null | undefined,
  right: Token<Right>
) => undefined

export type { OnEnterError as default }
