import { ofetch } from 'ofetch'
import type { ClientConfig, ClientResponse } from './typesNew'
import { projectsManager } from './managers'

let token = ''

function client(config: ClientConfig): ClientResponse {
  token = config.token

  const customClient = ofetch.create({
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
  const resolvedClient = client(config)

  const projects = projectsManager(resolvedClient)

  return {
    projects,
  }
}
