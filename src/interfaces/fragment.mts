/**
 * @file Interfaces - Fragment
 * @module fsm-compiler/interfaces/Fragment
 */

import type unist from 'unist'

/**
 * A temporary node.
 *
 * @see {@linkcode unist.Node}
 * @see {@linkcode unist.Parent}
 *
 * @template {unist.Node} [Child]
 *  The child node
 *
 * @extends {unist.Parent}
 */
interface Fragment<Child extends unist.Node = unist.Node> extends unist.Parent {
  /**
   * The list of children.
   *
   * @override
   */
  children: Child[]

  /**
   * The node type.
   */
  type: 'fragment'
}

export type { Fragment as default }
