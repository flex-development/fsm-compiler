/**
 * @file Interfaces - Root
 * @module fsm-compiler/interfaces/Root
 */

import type unist from 'unist'

/**
 * A document or document fragment.
 *
 * @see {@linkcode unist.Node}
 * @see {@linkcode unist.Parent}
 *
 * @template {unist.Node} [Child]
 *  The child node
 *
 * @extends {unist.Parent}
 */
interface Root<Child extends unist.Node = unist.Node> extends unist.Parent {
  /**
   * The list of children.
   *
   * @override
   */
  children: Child[]

  /**
   * The node type.
   *
   * @override
   */
  type: 'root'
}

export type { Root as default }
