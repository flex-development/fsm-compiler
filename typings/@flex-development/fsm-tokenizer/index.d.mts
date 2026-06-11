import type {} from '@flex-development/fsm-tokenizer'

declare module '@flex-development/fsm-tokenizer' {
  interface TokenFields {
    value?: string | null | undefined
  }

  interface TokenTypeMap {
    bracketExpression: 'bracketExpression'
    literal: 'literal'
    eoc: 'eoc'
    fail: 'fail'
    succ: 'succ'
  }
}
