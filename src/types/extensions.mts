/**
 * @file Type Aliases - Extensions
 * @module fsm-compiler/types/Extensions
 */

import type { CreateExtensions, Extension } from '@flex-development/fsm/ast'
import type { List } from '@flex-development/fsm/core'

/**
 * An extension, a list of extensions, or a factory function.
 *
 * @see {@linkcode CreateExtensions}
 * @see {@linkcode Extension}
 * @see {@linkcode List}
 */
type Extensions = CreateExtensions | Extension | List<Extension>

export type { Extensions as default }
