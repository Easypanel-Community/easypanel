import type {
  AdvancedStats,
  ContainerStats,
  DockerTaskStats,
  SystemStats,
} from '../types/monitor'
import type { ClientResponse } from '../types'
import { Routes } from '../utils/Routes'

export function monitorManager({ get }: ClientResponse) {
  async function getAdvancedStats() {
    const res = await get<AdvancedStats>(Routes.Monitor.GetAdvancedStats, {
      json: null,
    })
    return res
  }

  async function getDockerTaskStats() {
    const res = await get<DockerTaskStats>(Routes.Monitor.GetDockerTaskStats, {
      json: null,
    })
    return res
  }

  async function getMonitorTableData() {
    const res = await get<ContainerStats>(Routes.Monitor.GetMonitorTableData, {
      json: null,
    })
    return res
  }

  async function getSystemStats() {
    const res = await get<SystemStats>(Routes.Monitor.GetSystemStats, {
      json: null,
    })
    return res
  }

  return {
    getAdvancedStats,
    getDockerTaskStats,
    getMonitorTableData,
    getSystemStats,
  }
}
