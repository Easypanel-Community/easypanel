import { Routes } from '../utils/Routes'

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
} from '../typesNew'

export function projectsManager({ get, post }: ClientResponse) {
  async function canCreate() {
    const res = await get<CanCreate>(Routes.Projets.CanCreate, {
      json: null,
    })
    return res
  }

  async function create(body: ProjectName) {
    const Route = Routes.Projets.Create.replace('app', body.name)
    const res = await post<Create>(Route, {
      json: body,
    })
    return res
  }

  async function destory(body: ProjectName) {
    const res = await post<NoResponse>(Routes.Projets.Destroy, {
      json: body,
    })
    return res
  }

  async function inspect(body: ProjectQueryConf) {
    const res = await get<Project>(Routes.Projets.Inspect, {
      json: body,
    })
    return res
  }

  async function list() {
    const res = await get<ListProjects>(Routes.Projets.List, {
      json: null,
    })
    return res
  }

  async function listWithServices() {
    const res = await get<ListWithServices>(Routes.Projets.ListWithServices, {
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
