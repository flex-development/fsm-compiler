/**
 * @file Interfaces - Root
 * @module fsm-compiler/interfaces/Root
 */

import type { Node, Parent } from 'unist'

/**
 * A document or document fragment.
 *
 * @extends {Parent}
 */
interface Root<Child extends Node = Node> extends Parent {
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
