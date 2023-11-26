import type { RestResponse } from '.'

export type ServiceType =
  | 'app'
  | 'mysql'
  | 'mariadb'
  | 'postrages'
  | 'mongo'
  | 'redis'

export interface SelectService {
  projectName: string
  serviceName: string
  password?: string
  rootPassword?: string
  image?: string
}

export interface DomainParams {
  host: string
  https?: boolean
  port?: number
  path?: string
}

export interface RedirectParams {
  regex: string
  replacement: string
  permanent: boolean
}

export interface PortParams {
  protocol: 'tcp' | 'udp'
  published: number
  target: number
}

export interface DeployParams extends SelectService {
  replicas: number
  command: string[]
  zeroDowntime: boolean
  capAdd: string[]
  capDrop: string[]
  sysctls: string[]
}

export interface MountParams extends SelectService {
  mounts: {
    type: 'bind' | 'volume' | 'file'
    hostPath?: string // This property is optional based on the type
    name?: string // This property is optional based on the type
    content?: string // This property is optional based on the type
    mountPath: string
  }[]
}

export interface UserParams {
  username: string
  password: string
}

export interface Service extends SelectService, UpdateResources, UpdateBuild {
  type: ServiceType
  enabled: boolean
  token: string
  env?: string
  command?: string
  deploy?: DeployParams
  domains?: DomainParams[]
  mounts?: MountParams[]
  ports?: PortParams[]
  redirects?: RedirectParams[]
  basicAuth?: UserParams[]
  exposedPort?: number
  deploymentUrl?: string
  source?: {
    autodDeploy: boolean
  } & GitParams &
  GithubParams &
  DockerImageParams
}

export interface CreateService extends SelectService {
  domains: DomainParams[]
}

interface GitParams {
  path: string
  ref: string
  repo: string
}

interface GithubParams extends GitParams {
  owner: string
}

interface DockerImageParams {
  image: string
  username: string
  password: string
}

export interface UpdateGit extends SelectService, GitParams {}
export interface UpdateImage
  extends SelectService,
  Omit<DockerImageParams, 'image' | 'password'> {}
export interface UpdateGithub extends SelectService, GithubParams {}

export interface UpdateBuild extends SelectService {
  build: {
    type: 'dockerfile' | 'heroku-buildpacks' | 'paketo-buildpacks' | 'nixpacks'
  }
}

export interface UpdateEnv extends SelectService {
  env: string
}

export interface UpdateRedirects extends SelectService {
  redirects: RedirectParams[]
}

export interface UpdateBasicAuth extends SelectService {
  basicAuth: UserParams[]
}

export interface UpdatePorts extends SelectService {
  ports: PortParams[]
}

export interface UpdateResources extends SelectService {
  resources: {
    cpuLimit: number
    cpuReservation: number
    memoryLimit: number
    memoryReservation: number
  }
}

export type ServiceRes = RestResponse<Service>
