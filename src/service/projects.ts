import { routes } from '../utils/routes'

import type {
  CanCreate,
  ClientResponse,
  Create,
  ListProjects,
  ListWithServices,
  NoResponse,
  Project,
  ProjectName,
  ProjectQueryConf,
} from '../types'

export function projects({ get, post }: ClientResponse) {
  async function canCreate() {
    const res = await get<CanCreate>(routes.projets.CanCreate, {
      input: {
        json: null,
      },
    })
    return res
  }

  async function create(body: ProjectName) {
    const Route = routes.projets.Create.replace('app', body.name)
    const res = await post<Create>(Route, {
      json: body,
    })
    return res
  }

  async function destory(body: ProjectName) {
    const res = await post<NoResponse>(routes.projets.Destroy, {
      json: body,
    })
    return res
  }

  async function inspect(body: ProjectQueryConf) {
    const res = await get<Project>(routes.projets.Inspect, {
      input: {
        json: body,
      },
    })
    return res
  }

  async function list() {
    const res = await get<ListProjects>(routes.projets.List, {
      input: {
        json: null,
      },
    })
    return res
  }

  async function listWithServices() {
    const res = await get<ListWithServices>(routes.projets.ListWithServices, {
      input: {
        json: null,
      },
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
