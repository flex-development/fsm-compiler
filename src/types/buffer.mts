/**
 * @file Type Aliases - Buffer
 * @module fsm-compiler/types/Buffer
 */

import type { CompileContext } from '@flex-development/fsm-compiler'

/**
 * Capture some of the output data.
 *
 * @see {@linkcode CompileContext}
 *
 * @this {CompileContext}
 *
 * @return {undefined}
 */
type Buffer = (this: CompileContext) => undefined

export type { Buffer as default }
