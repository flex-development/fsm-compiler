/**
 * @file Type Aliases - Preprocess
 * @module fsm-compiler/types/Preprocess
 */

import type { CompileContext, Root } from '@flex-development/fsm-compiler'
import type { Event } from '@flex-development/fsm-tokenizer'

/**
 * Preprocess events before turning them into a syntax tree.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode Event}
 * @see {@linkcode Root}
 *
 * @template {Root} [Tree]
 *  The syntax tree
 *
 * @this {CompileContext}
 *
 * @param {Event[]} events
 *  The current list of events
 * @param {Tree} tree
 *  The current syntax tree
 * @return {null | undefined}
 */
type Preprocess<Tree extends Root = Root> = (
  this: CompileContext,
  events: Event[],
  tree: Tree
) => null | undefined

export type { Preprocess as default }
