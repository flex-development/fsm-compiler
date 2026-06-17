import type {} from '@flex-development/fsm/parse'

declare module '@flex-development/fsm/parse' {
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
