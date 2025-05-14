import { ServerActionReturn } from './dataTypes'

export type ServerAction = (...args: any[]) => Promise<ServerActionReturn>
