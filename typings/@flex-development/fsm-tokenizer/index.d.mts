import type {} from '@flex-development/fsm-tokenizer'

declare module '@flex-development/fsm-tokenizer' {
  interface TokenTypeMap {
    fail: 'fail'
    succ: 'succ'
  }
}
