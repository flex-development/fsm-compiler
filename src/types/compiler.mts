/**
 * @file Type Aliases - Compile
 * @module fsm-compiler/types/Compile
 */

import type { Root } from '@flex-development/fsm-compiler'
import type { Event } from '@flex-development/fsm-tokenizer'

/**
 * Turn events into a syntax tree.
 *
 * @see {@linkcode Event}
 * @see {@linkcode Root}
 *
 * @template {Root} [Tree]
 *  The syntax tree
 *
 * @this {void}
 *
 * @param {Event[] | null | undefined} [events]
 *  The list of events
 * @return {Tree}
 *  The syntax tree
 */
type Compile = <Tree extends Root = Root>(
  this: void,
  events?: Event[] | null | undefined
) => Tree

export type { Compile as default }
