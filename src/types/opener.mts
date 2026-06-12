/**
 * @file Type Aliases - Opener
 * @module fsm-compiler/types/Opener
 */

import type { CreateNode, Handle, Node } from '@flex-development/fsm-compiler'
import type { TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Create an enter handle.
 *
 * @see {@linkcode CreateNode}
 * @see {@linkcode Handle}
 * @see {@linkcode Node}
 * @see {@linkcode TokenType}
 *
 * @template {Node} N
 *  The node to create
 * @template {TokenType} T
 *  The corresponding token type
 *
 * @this {void}
 *
 * @param {CreateNode<N, T>} node
 *  The node factory
 * @param {Handle<T> | null | undefined} [and]
 *  The handle to run after entering the created node
 * @return {Handle<T>}
 *  The enter handle
 */
type Opener = <N extends Node, T extends TokenType>(
  this: void,
  node: CreateNode<N, T>,
  and?: Handle<T> | null | undefined
) => Handle<T>

export type { Opener as default }
