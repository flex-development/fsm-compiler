import type { Root } from '@flex-development/fsm/ast'
import '@flex-development/fsm/ast/compile'
import type unist from 'unist'

declare module '@flex-development/fsm/ast' {
  interface Extension {
    canContainEols?: string[] | null | undefined
  }

  interface NodeMap {
    literal: unist.Literal
    node: unist.Node
    parent: unist.Parent
    root: Root
  }
}
