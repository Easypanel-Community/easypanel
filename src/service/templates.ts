import type { ClientResponse, NoResponse, ProjectFromSchema } from '../types'
import { routes } from '../utils/routes'

export function templates({ post }: ClientResponse) {
  async function createFromSchema(body: ProjectFromSchema) {
    const res = await post<NoResponse>(routes.templates.CreateFromSchema, {
      json: body,
    })
    return res
  }

  return {
    createFromSchema,
  }
}
