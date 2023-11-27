import type {
  BooleanResponse,
  ChangeCredentialsParams,
  ClientResponse,
  GithubTokenParams,
  LetsEncryptParams,
  NoResponse,
  PanelDomainParams,
  PanelDomainRes,
  PruneDockerDailyParams,
  StringResponse,
  TreafikConfParams,
} from '../types'
import { routes } from '../utils/routes'

export function settings({ get, post }: ClientResponse) {
  async function changeCredentials(body: ChangeCredentialsParams): Promise<NoResponse> {
    const res = await post<NoResponse>(routes.settings.ChangeCredentials, {
      json: body,
    })
    return res
  }

  /**
   * Returns github token
   */
  async function getGithubToken(): Promise<StringResponse> {
    const res = await get<StringResponse>(routes.settings.GetGithubToken, {
      input: {
        json: null,
      },
    })
    return res
  }

  /**
   * Returns Let's encrypt email
   */
  async function getLetsEncryptEmail(): Promise<StringResponse> {
    const res = await get<StringResponse>(
      routes.settings.GetLetsEncryptEmail,
      {
        input: {
          json: null,
        },
      },
    )
    return res
  }

  async function getPanelDomain(): Promise<PanelDomainRes> {
    const res = await get<PanelDomainRes>(routes.settings.GetPanelDomain, {
      input: {
        json: null,
      },
    })
    return res
  }

  async function getServerIp(): Promise<StringResponse> {
    const res = await get<StringResponse>(routes.settings.GetServerIp, {
      input: {
        json: null,
      },
    })
    return res
  }

  async function getTraefikCustomConfig(): Promise<StringResponse> {
    const res = await get<StringResponse>(
      routes.settings.GetTraefikCustomConfig,
      {
        input: {
          json: null,
        },
      },
    )
    return res
  }

  async function pruneDockerBuilder(): Promise<StringResponse> {
    const res = await post<StringResponse>(
      routes.settings.PruneDockerBuilder,
      {
        json: null,
      },
    )
    return res
  }

  async function pruneDockerImages(): Promise<StringResponse> {
    const res = await post<StringResponse>(routes.settings.PruneDockerImages, {
      json: null,
    })
    return res
  }

  async function refreshServerIp(): Promise<NoResponse> {
    const res = await post<NoResponse>(routes.settings.RefreshServerIp, {
      json: null,
    })
    return res
  }

  async function restartEasypanel(): Promise<NoResponse> {
    const res = await post<NoResponse>(routes.settings.RestartEasypanel, {
      json: null,
    })
    return res
  }

  async function restartTraefik(): Promise<NoResponse> {
    const res = await post<NoResponse>(routes.settings.RestartTraefik, {
      json: null,
    })
    return res
  }

  async function setDockerPruneDaily(
    body: PruneDockerDailyParams,
  ): Promise<BooleanResponse> {
    const res = await post<BooleanResponse>(
      routes.settings.SetDockerPruneDaily,
      {
        json: body,
      },
    )
    return res
  }

  async function setGithubToken(body: GithubTokenParams): Promise<StringResponse> {
    const res = await post<StringResponse>(routes.settings.SetGithubToken, {
      json: body,
    })
    return res
  }

  async function setPanelDomain(body: PanelDomainParams): Promise<NoResponse> {
    const res = await post<NoResponse>(routes.settings.SetPanelDomain, {
      json: body,
    })
    return res
  }

  async function updateTraefikCustomConfig(
    body: TreafikConfParams,
  ): Promise<NoResponse> {
    const res = await post<NoResponse>(
      routes.settings.UpdateTraefikCustomConfig,
      {
        json: body,
      },
    )
    return res
  }

  async function setLetsEncryptEmail(body: LetsEncryptParams): Promise<StringResponse> {
    const res = await post<StringResponse>(
      routes.settings.setLetsEncryptEmail,
      {
        json: body,
      },
    )
    return res
  }

  return {
    changeCredentials,
    getGithubToken,
    getLetsEncryptEmail,
    getPanelDomain,
    getServerIp,
    getTraefikCustomConfig,
    pruneDockerBuilder,
    pruneDockerImages,
    refreshServerIp,
    restartEasypanel,
    restartTraefik,
    setDockerPruneDaily,
    setGithubToken,
    setPanelDomain,
    updateTraefikCustomConfig,
    setLetsEncryptEmail,
  }
}
