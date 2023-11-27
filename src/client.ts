import { $fetch } from 'ofetch'
import type { ClientConfig, ClientResponse, NoResponse, UserRes } from './types'
import { monitor, projects, services, settings } from './service'
import { routes } from './utils/routes'

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

  function get<T>(route: string, input?: any): Promise<T> {
    return customClient(route, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params: input,
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

  const _projects = projects(_client)
  const _services = services(_client)
  const _monitor = monitor(_client)
  const _settings = settings(_client)

  async function getUser(): Promise<UserRes> {
    const res = await _client.get<UserRes>(routes.auth.GetUser, { json: null })
    return res
  }

  async function getLicensePayload(type: 'lemon' | 'portal'): Promise<NoResponse> {
    const res = await _client.get<NoResponse>(routes.license(type).Get, { json: null })
    return res
  }

  async function activateLicense(type: 'lemon' | 'portal'): Promise<NoResponse> {
    const res = await _client.post<NoResponse>(routes.license(type).Activate, {
      json: null,
    })
    return res
  }

  return {
    projects: _projects,
    services: _services,
    monitor: _monitor,
    settings: _settings,
    getUser,
    getLicensePayload,
    activateLicense,
    token: _client.token,
  }
}
