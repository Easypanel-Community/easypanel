import type { Service, ServiceType } from './services'

/**
 * Params
 */

export interface CreateServiceSchema {
  type: ServiceType
  data: Service
}

export interface ProjectFromSchema {
  projectName: string
  schema: Record<string, unknown> & {
    services: CreateServiceSchema[]
  }
}
