/**
 * @file Interfaces - Fragment
 * @module fsm-compiler/interfaces/Fragment
 */

import type { Node, Parent } from 'unist'

/**
 * A temporary node.
 *
 * @extends {Parent}
 */
interface Fragment<Child extends Node = Node> extends Parent {
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
