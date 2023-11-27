import { $fetch } from 'ofetch'
import type { ClientConfig, ClientResponse, NoResponse, UserRes } from './types'
import { monitorManager, projectsManager, servicesManager, settingsManager } from './managers'
import { Routes } from './utils/Routes'

let token = ''

function client(config: ClientConfig): ClientResponse {
  token = config.token

  const customClient = $fetch.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': config.token,
    },
    baseURL: config.endpoint,
    retry: 1,
    retryDelay: 1000, // ms
  })

  function get<T>(route: string, body: any): Promise<T> {
    return customClient(route, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(body),
    })
  }

  function post<T>(route: string, body: any): Promise<T> {
    return customClient(route, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(body),
    })
  }

  return {
    get,
    post,
    token,
  }
}

export function easypanel(config: ClientConfig) {
  const _client = client(config)

  const projects = projectsManager(_client)
  const services = servicesManager(_client)
  const monitor = monitorManager(_client)
  const settings = settingsManager(_client)

  async function getUser(): Promise<UserRes> {
    const res = await _client.get<UserRes>(Routes.Auth.GetUser, { json: null })
    return res
  }

  async function getLicensePayload(type: 'lemon' | 'portal'): Promise<NoResponse> {
    const res = await _client.get<NoResponse>(Routes.License(type).Get, { json: null })
    return res
  }

  async function activateLicense(type: 'lemon' | 'portal'): Promise<NoResponse> {
    const res = await _client.post<NoResponse>(Routes.License(type).Activate, {
      json: null,
    })
    return res
  }

  return {
    projects,
    services,
    monitor,
    settings,
    getUser,
    getLicensePayload,
    activateLicense,
  }
}
