/**
 * @file Interfaces - NodeMap
 * @module fsm-compiler/interfaces/NodeMap
 */

import type { Fragment } from '@flex-development/fsm-compiler'

/**
 * Registry of nodes.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/fsm-compiler' {
 *    interface NodeMap {
 *      comment: docast.Comment
 *    }
 *  }
 */
interface NodeMap {
  fragment: Fragment
}

export type { NodeMap as default }
