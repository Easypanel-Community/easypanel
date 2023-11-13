import { ofetch } from 'ofetch'

import type { ConstructorInput, CreateService, DataReturn, Options, Service, TokenType } from '../types'

export function easypanel(data: ConstructorInput) {
  data.url.replace(/\/$/, '')
  const url = `${data.url}/api/trpc`
  const options: Options = {
    token: data.token || '',
    auth: data.auth,
    nitro: ofetch.create({
      headers: {
        'Content-Type': 'application/json',
      },
      baseURL: url,
      async onResponseError({ response }) {
        if (response.status === 401)
          await login(options.auth)
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
    }),
  }

  function _createAuthorizationHeader(type?: TokenType): string {
    switch (type) {
      case 'Bearer':
        return `Bearer ${options.token}`
      default:
        return `${options.token}`
    }
  }

  async function login(input?: ConstructorInput['auth']): Promise<DataReturn<{ token: string }>> {
    if (options.token && !input)
      return Promise.resolve({ result: { data: { json: { token: '' } } } })

    const data = await options.nitro('/auth.login', {
      method: 'POST',
      body: JSON.stringify({
        json: {
          email: input ? input.email : options.auth.email,
          password: input ? input.password : options.auth.password,
        },
      }),
    })

    options.token = data.result.data.json.token
    return data
  }

  async function createService(input: CreateService): Promise<DataReturn<Service>> {
    if (input.domains) {
      input.domains = [
        {
          host: '$(EASYPANEL_DOMAIN)',
        },
      ]
    }

    const headers = {
      Authorization: _createAuthorizationHeader(),
    }

    const { data } = await options.nitro(`/services.app.createService`, {
      method: 'post',
      headers,
      body: JSON.stringify({
        json: {
          ...input,
        } as CreateService,
      }),
    })
    return data
  }

  return {
    login,
    createService,
  }
}
