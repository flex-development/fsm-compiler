/**
 * @file Type Aliases - Handles
 * @module fsm-compiler/types/Handles
 */

import type { Handle } from '@flex-development/fsm-compiler'
import type { TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Record, where each key is a token type and each value is a token handler.
 *
 * @see {@linkcode Handle}
 * @see {@linkcode TokenType}
 */
type Handles = Partial<Record<TokenType, Handle | null | undefined>>

export type { Handles as default }
