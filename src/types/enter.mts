/**
 * @file Type Aliases - Enter
 * @module fsm-compiler/types/Enter
 */

import type {
  CompileContext,
  Node,
  OnEnterError
} from '@flex-development/fsm-compiler'
import type { Token, TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Enter a node.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode Node}
 * @see {@linkcode OnEnterError}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {Node} [N]
 *  The node to enter
 * @template {TokenType} [T]
 *  The corresponding token type
 *
 * @this {CompileContext}
 *
 * @param {N} node
 *  The node to enter
 * @param {Token<T>} token
 *  The corresponding token
 * @param {OnEnterError<any, any> | null | undefined} [onError]
 *  Handle the case where `token` is open, but closed by something else
 * @return {undefined}
 */
type Enter<N extends Node = Node, T extends TokenType = TokenType> = (
  this: CompileContext,
  node: N,
  token: Token<T>,
  onError?: OnEnterError<any, any> | null | undefined
) => undefined

export type { Enter as default }
