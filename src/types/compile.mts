/**
 * @file Type Aliases - Compile
 * @module fsm-compiler/types/Compile
 */

import type { Tree } from '@flex-development/fsm-compiler'
import type { Event } from '@flex-development/fsm-tokenizer'

/**
 * Turn events into a syntax tree.
 *
 * @see {@linkcode Event}
 * @see {@linkcode Tree}
 *
 * @this {void}
 *
 * @param {Event[] | null | undefined} [events]
 *  The list of events
 * @return {Tree}
 *  The syntax tree
 */
type Compile = (this: void, events?: Event[] | null | undefined) => Tree

export type { Compile as default }
