export type TokenType = 'default' | 'Bearer'

export interface ErrorReturn {
  error: {
    json: {
      message: string
      code: number
      data: {
        code: string
        httpStatus: number
        path: string
        zodErrors?: null
      }
    }
  }
}

export interface DataReturn<T> {
  result: {
    data: {
      json: T
    }
  }
}

export interface CreateService extends Pick<Service, 'projectName' | 'domains'> {
  serviceName: string
}

export interface DomainsEntity {
  host: string
}

export interface Service {
  projectName: string
  name: string
  type: string
  enabled: boolean
  token: string
  env: string
  deploy: Deploy
  domains?: (DomainsEntity)[] | null
  mounts?: (null)[] | null
  ports?: (null)[] | null
}

export interface Deploy {
  replicas: number
  command?: null
  zeroDowntime: boolean
}

export interface DomainsEntity {
  host: string
  https?: boolean
  port?: number
  path?: string
}
