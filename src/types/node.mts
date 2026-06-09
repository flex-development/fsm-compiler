/**
 * @file Type Aliases - Node
 * @module fsm-compiler/types/Node
 */

import type { NodeMap } from '@flex-development/fsm-compiler'

/**
 * Union of nodes.
 *
 * To register custom nodes, augment {@linkcode NodeMap}.
 * They will be added to this union automatically.
 */
type Node = NodeMap[keyof NodeMap]

export type { Node as default }
