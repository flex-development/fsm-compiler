/**
 * @file Type Aliases - Transform
 * @module fsm-compiler/types/Transform
 */

import type { Root } from '@flex-development/fsm-compiler'

/**
 * Transform a syntax `tree`.
 *
 * @see {@linkcode Root}
 *
 * @template {Root} [Tree]
 *  The tree to transform
 *
 * @this {void}
 *
 * @param {Root} tree
 *  The tree to transform
 * @return {Tree | null | undefined}
 *  The new tree or nothing (in which case the current tree is used)
 */
type Transform<Tree extends Root = Root> = (
  this: void,
  tree: Tree
) => Tree | null | undefined

export type { Transform as default }
