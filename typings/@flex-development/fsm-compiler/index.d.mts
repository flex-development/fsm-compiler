import type { Root } from '@flex-development/fsm-compiler'
import type unist from 'unist'

declare module '@flex-development/fsm-compiler' {
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
