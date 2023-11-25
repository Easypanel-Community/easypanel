export interface RestConfig {
  baseURL: string
  token: string
}

export interface RestResponse {
  ok: boolean
  status: number
  statusText?: string
  data?: object
}

export interface RestError {
  ok: boolean
  errorMessage: string
  status?: number
  error?: object
}

export type * from './monitor'
export type * from './projects'
export type * from './services'
export type * from './settings'

export interface ClientConfig {
  endpoint: string
  credentials: {
    email: string
    password: string
  }
  token?: string
}

export interface NoResponse extends Omit<RestResponse, 'data'> {
  data?: null
}

export interface StringResponse extends Omit<RestResponse, 'data'> {
  data?: string
}

export interface BooleanResponse extends Omit<RestResponse, 'data'> {
  data?: string
}

export interface LoginRes extends RestResponse {
  data?: {
    token: string
  }
}

export interface UserRes extends RestResponse {
  data?: {
    id: string
    createdAt: string
    email: string
    admin: boolean
    password: null
  }
}
