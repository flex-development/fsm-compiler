/**
 * @file Type Aliases - Tree
 * @module fsm-compiler/types/Tree
 */

import type { Node, NodeMap, Root } from '@flex-development/fsm-compiler'

/**
 * A syntax tree.
 *
 * To register a custom root, augment {@linkcode NodeMap}.
 *
 * @see {@linkcode Node}
 * @see {@linkcode Root}
 */
type Tree = Extract<Node, Root>

export type { Tree as default }
