import type {
  AdvancedStats,
  ContainerStats,
  DockerTaskStats,
  SystemStats,
} from '../types/monitor'
import type { ClientResponse } from '../types'
import { routes } from '../utils/routes'

export function monitor({ get }: ClientResponse) {
  async function getAdvancedStats() {
    const res = await get<AdvancedStats>(routes.monitor.GetAdvancedStats, {
      input: {
        json: null,
      },
    })
    return res
  }

  async function getDockerTaskStats() {
    const res = await get<DockerTaskStats>(routes.monitor.GetDockerTaskStats, {
      input: {
        json: null,
      },
    })
    return res
  }

  async function getMonitorTableData() {
    const res = await get<ContainerStats>(routes.monitor.GetMonitorTableData, {
      input: {
        json: null,
      },
    })
    return res
  }

  async function getSystemStats() {
    const res = await get<SystemStats>(routes.monitor.GetSystemStats, {
      input: {
        json: null,
      },
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
