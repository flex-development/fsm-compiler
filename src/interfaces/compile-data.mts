/**
 * @file Interfaces - CompileData
 * @module fsm-compiler/interfaces/CompileData
 */

/**
 * Registry of tracked data.
 *
 * This interface can be augmented to register custom data.
 *
 * @example
 *  declare module '@flex-development/fsm-compiler' {
 *    interface CompileData {
 *      flowCodeInside?: boolean | null | undefined
 *    }
 *  }
 */
interface CompileData {}

export type { CompileData as default }
