/**
 * @file Type Aliases - CreateNode
 * @module fsm-compiler/types/CreateNode
 */

import type { Node } from '@flex-development/fsm-compiler'
import type { Token, TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Create a node.
 *
 * @see {@linkcode Node}
 * @see {@linkcode Token}
 *
 * @template {Node} [N]
 *  The new node
 * @template {TokenType} [T]
 *  The token type
 *
 * @this {void}
 *
 * @param {Token<T>} token
 *  The corresponding token
 * @return {N}
 *  The new node
 */
type CreateNode<
  N extends Node = Node,
  T extends TokenType = TokenType
> = (this: void, token: Token<T>) => N

export type { CreateNode as default }
