/**
 * @file Type Aliases - Closer
 * @module fsm-compiler/types/Closer
 */

import type { Handle } from '@flex-development/fsm-compiler'

/**
 * Create an exit handle.
 *
 * @see {@linkcode Handle}
 *
 * @this {void}
 *
 * @param {Handle | null | undefined} [before]
 *  The handle to run before exiting a node
 * @return {Handle}
 *  The exit handle
 */
type Closer = (this: void, before?: Handle | null | undefined) => Handle

export type { Closer as default }
