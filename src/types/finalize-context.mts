/**
 * @file Type Aliases - FinalizeContext
 * @module fsm-compiler/types/FinalizeContext
 */

import type { Options } from '@flex-development/fsm-compiler'
import type { CompileContext } from '@flex-development/fsm/ast'

/**
 * Finalize the compilation context.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode Options}
 *
 * @this {void}
 *
 * @param {CompileContext} context
 *  The current compile context
 * @param {Options} options
 *  The options used to create the compiler
 * @return {null | undefined}
 */
type FinalizeContext = (
  this: void,
  context: CompileContext,
  options: Options
) => null | undefined

export type { FinalizeContext as default }
