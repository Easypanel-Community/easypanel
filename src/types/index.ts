export interface ClientResponse {
  get: <T>(route: string, input?: any) => Promise<T>
  post: <T>(route: string, body: any) => Promise<T>
  token: string
}

export interface RestConfig {
  baseURL: string
  token: string
}

export interface RestResponse<T> {
  result: {
    data: {
      json: T
    }
  }
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
  token: string
  /**
   * @deprecated Use `token` instead
   */
  credentials?: {
    email: string
    password: string
  }
}

export type NoResponse = RestResponse<null>

export type StringResponse = RestResponse<string>

export type BooleanResponse = RestResponse<boolean>

export interface LoginRes extends RestResponse<{ token: string }> {}

export interface UserRes extends RestResponse<{
  id: string
  createdAt: string
  email: string
  admin: boolean
  password: null
}> {}
