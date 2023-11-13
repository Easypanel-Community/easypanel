import type { $Fetch } from 'ofetch'

export type * from './general'

export interface ConstructorInput {
  url: string
  auth: {
    email: string
    password: string
  }
  token?: string
}

export interface Options {
  token: string
  nitro: $Fetch
  auth: ConstructorInput['auth']
}
