/**
 * @file Type Aliases - Closer
 * @module fsm-compiler/types/Closer
 */

import type { Handle } from '@flex-development/fsm-compiler'
import type { TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Create an exit handle.
 *
 * @see {@linkcode Handle}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T
 *  The corresponding token type
 *
 * @this {void}
 *
 * @param {Handle<T> | null | undefined} [pre]
 *  The handle to run before exiting a node
 * @return {Handle<T>}
 *  The exit handle
 */
type Closer = <T extends TokenType>(
  this: void,
  pre?: Handle<T> | null | undefined
) => Handle<T>

export type { Closer as default }
