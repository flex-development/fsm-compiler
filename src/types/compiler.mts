/**
 * @file Type Aliases - Compiler
 * @module fsm-compiler/types/Compiler
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
 * @param {Event[]} events
 *  The list of events
 * @return {Tree}
 *  The syntax tree
 */
type Compiler<Tree extends Root = Root> = (this: void, events: Event[]) => Tree

export type { Compiler as default }
