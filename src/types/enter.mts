/**
 * @file Type Aliases - Enter
 * @module fsm-compiler/types/Enter
 */

import type {
  CompileContext,
  Node,
  OnEnterError
} from '@flex-development/fsm-compiler'
import type { Token } from '@flex-development/fsm-tokenizer'

/**
 * Enter a node.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode Node}
 * @see {@linkcode OnEnterError}
 * @see {@linkcode Token}
 *
 * @this {CompileContext}
 *
 * @param {Node} node
 *  The node to enter
 * @param {Token} token
 *  The corresponding token
 * @param {OnEnterError | null | undefined} [onError]
 *  Handle the case where another token is open, but closed by something else
 * @return {undefined}
 */
type Enter = (
  this: CompileContext,
  node: Node,
  token: Token,
  onError?: OnEnterError | null | undefined
) => undefined

export type { Enter as default }
