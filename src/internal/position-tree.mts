/**
 * @file Internal - positionTree
 * @module fsm-compiler/internal/positionTree
 */

import type { Root } from '@flex-development/fsm-compiler'
import type { Position, Token } from '@flex-development/fsm-tokenizer'
import point from './point.mts'

/**
 * Position a `tree` based on `events`.
 *
 * > 👉 **Note**: Does nothing if event list is empty.
 *
 * @internal
 *
 * @template {Root} T
 *  The tree
 *
 * @this {void}
 *
 * @param {T} tree
 *  The tree to position
 * @param {[unknown, Token, unknown?][]} events
 *  The list of events
 * @return {undefined}
 */
function positionTree<T extends Root>(
  this: void,
  tree: T,
  events: [unknown, Token, unknown?][]
): undefined {
  if (events.length) {
    tree.position ??= {} as Position
    tree.position.start = point(events[0]![1].start)
    tree.position.end = point(events[events.length - 1]![1].end)
  }

  return void tree
}

export default positionTree
