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
 * @template {TokenType} [T]
 *  The token type
 * @template {Node} [N]
 *  The new node
 *
 * @this {void}
 *
 * @param {Token<T>} token
 *  The corresponding token
 * @return {N}
 *  The new node
 */
type CreateNode<
  T extends TokenType = TokenType,
  N extends Node = Node
> = (this: void, token: Token<T>) => N

export type { CreateNode as default }
