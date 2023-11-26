import type { Service } from './services'
import type { RestResponse } from './'

/**
 * Params
 */

export interface ProjectName {
  name: string
}

export interface ProjectInfo extends ProjectName {
  createdAt: string
}

export interface ProjectQueryConf {
  projectName: string
}

export type CanCreate = RestResponse<boolean>

export type Create = RestResponse<ProjectInfo>

export type Project = RestResponse<{
  project: ProjectInfo
  services: Service[]
}>

export type ListProjects = RestResponse<ProjectInfo[]>

export type ListWithServices = RestResponse<{
  projects: ProjectInfo[]
  services: Service[]
}>
