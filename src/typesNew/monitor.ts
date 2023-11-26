import type { RestResponse } from '.'

export type AdvancedStats = RestResponse<{
  cpu: { value: string, time: string }[]
  disk: { value: string, time: string }[]
  memory: { value: string, time: string }[]
  network: { value: { input: number, output: number }, time: string }[]
}>

export type DockerTaskStats = RestResponse<{
  [key: string]: {
    actual: number
    desired: number
  }
}>

export type SystemStats = RestResponse<{
  uptime: number
  memInfo: {
    totalMemMb: number
    usedMemMb: number
    freeMemMb: number
    usedMemPercentage: number
    freeMemPercentage: number
  }
  diskInfo: {
    totalGb: string
    usedGb: string
    freeGb: string
    usedPercentage: string
    freePercentage: string
  }
  cpuInfo: {
    usedPercentage: number
    count: number
    loadavg: number[]
  }
  network: {
    inputMb: number
    outputMb: number
  }
}>

export type ContainerStats = RestResponse<{
  id: string
  stats: {
    cpu: {
      percent: number
    }
    memory: {
      usage: number
      percent: number
    }
    network: {
      in: number
      out: number
    }
  }
  projectName: string
  serviceName: string
  containerName: string
}[]>
