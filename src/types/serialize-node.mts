/**
 * @file Type Aliases - SerializeNode
 * @module fsm-compiler/types/SerializeNode
 */

import type { Node } from '@flex-development/fsm-compiler'

/**
 * Stringify a node.
 *
 * @see {@linkcode Node}
 *
 * @this {void}
 *
 * @param {Node | undefined} node
 *  The node to serialize
 * @return {string | null | undefined}
 *  The serialized node
 */
type SerializeNode = (
  this: void,
  node: Node | undefined
) => string | null | undefined

export type { SerializeNode as default }
