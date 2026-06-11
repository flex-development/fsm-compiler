/**
 * @file Type Aliases - Opener
 * @module fsm-compiler/types/Opener
 */

import type { CreateNode, Handle } from '@flex-development/fsm-compiler'

/**
 * Create an enter handle.
 *
 * @see {@linkcode Handle}
 * @see {@linkcode CreateNode}
 *
 * @this {void}
 *
 * @param {CreateNode} create
 *  The node factory
 * @param {Handle | null | undefined} [and]
 *  The handle to run after entering the created node
 * @return {Handle}
 *  The enter handle
 */
type Opener = (
  this: void,
  node: CreateNode,
  and?: Handle | null | undefined
) => Handle

export type { Opener as default }
