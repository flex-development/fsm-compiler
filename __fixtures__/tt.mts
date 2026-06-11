/**
 * @file Fixtures - tt
 * @module fixtures/tt
 */

import type { TokenType } from '@flex-development/fsm-tokenizer'

/**
 * Token types.
 *
 * @enum {TokenType}
 */
enum tt {
  bracketExpression = 'bracketExpression',
  eoc = 'eoc',
  fail = 'fail',
  literal = 'literal',
  succ = 'succ'
}

export default tt
