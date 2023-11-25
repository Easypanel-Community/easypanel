import { ofetch } from 'ofetch'
import { Routes } from '../utils/Routes'

import type {
  CanCreate,
  ClientConfig,
  Create,
  ListProjects,
  ListWithServices,
  NoResponse,
  Project,
  ProjectName,
  ProjectQueryConf,
} from '../typesNew'

async function client(config: ClientConfig) {
  let token = ''
  const customClient = ofetch.create({
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: config.endpoint,
    async onResponseError({ response }) {
      if (response.status === 401)
        await login()
    },
    retryStatusCodes: [
      401,
      408,
      409,
      425,
      429,
      500,
      502,
      503,
      504,
    ],
    retry: 1,
    retryDelay: 1000, // ms
  })

  async function login() {
    const data = await post(Routes.Auth.Login, {
      json: config.credentials,
    })

    token = data.result.data.json.token
    return data
  }

  function get(route: string, body: any) {
    return customClient(route, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(body),
    })
  }

  function post(route: string, body: any) {
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

export function projectsManager({ get, post }: Awaited<ReturnType<typeof client>>) {
  async function canCreate(): Promise<CanCreate> {
    const res = await get(Routes.Projets.CanCreate, {
      json: null,
    })
    return res
  }

  async function create(body: ProjectName): Promise<Create> {
    const Route = Routes.Projets.Create.replace('app', body.name)
    const res = await post(Route, {
      json: body,
    })
    return res
  }

  async function destory(body: ProjectName): Promise<NoResponse> {
    const res = await post(Routes.Projets.Destroy, {
      json: body,
    })
    return res
  }

  async function inspect(body: ProjectQueryConf): Promise<Project> {
    const res = await get(Routes.Projets.Inspect, {
      json: body,
    })
    return res
  }

  async function list(): Promise<ListProjects> {
    const res = await get(Routes.Projets.List, {
      json: null,
    })
    return res
  }

  async function listWithServices(): Promise<ListWithServices> {
    const res = await get(Routes.Projets.ListWithServices, {
      json: null,
    })
    return res
  }

  return {
    canCreate,
    create,
    destory,
    inspect,
    list,
    listWithServices,
  }
}

export async function EasyPanel(config: ClientConfig) {
  const resolvedClient = await client(config)

  const projects = projectsManager(resolvedClient)

  return {
    projects,
  }
}

const test = await EasyPanel({
  credentials: {
    email: '',
    password: '',
  },
  endpoint: '',
})

test.projects.create({ name: 'test' })
