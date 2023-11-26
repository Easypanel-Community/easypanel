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
} from '../typesNew'
import { Routes } from '../utils/Routes'

export function settingsManager({ get, post }: ClientResponse) {
  async function changeCredentials(body: ChangeCredentialsParams): Promise<NoResponse> {
    const res = await post<NoResponse>(Routes.Settings.ChangeCredentials, {
      json: body,
    })
    return res
  }

  /**
   * Returns github token
   */
  async function getGithubToken(): Promise<StringResponse> {
    const res = await get<StringResponse>(Routes.Settings.GetGithubToken, {
      json: null,
    })
    return res
  }

  /**
   * Returns Let's encrypt email
   */
  async function getLetsEncryptEmail(): Promise<StringResponse> {
    const res = await get<StringResponse>(
      Routes.Settings.GetLetsEncryptEmail,
      { json: null },
    )
    return res
  }

  async function getPanelDomain(): Promise<PanelDomainRes> {
    const res = await get<PanelDomainRes>(Routes.Settings.GetPanelDomain, {
      json: null,
    })
    return res
  }

  async function getServerIp(): Promise<StringResponse> {
    const res = await get<StringResponse>(Routes.Settings.GetServerIp, {
      json: null,
    })
    return res
  }

  async function getTraefikCustomConfig(): Promise<StringResponse> {
    const res = await get<StringResponse>(
      Routes.Settings.GetTraefikCustomConfig,
      {
        json: null,
      },
    )
    return res
  }

  async function pruneDockerBuilder(): Promise<StringResponse> {
    const res = await post<StringResponse>(
      Routes.Settings.PruneDockerBuilder,
      {
        json: null,
      },
    )
    return res
  }

  async function pruneDockerImages(): Promise<StringResponse> {
    const res = await post<StringResponse>(Routes.Settings.PruneDockerImages, {
      json: null,
    })
    return res
  }

  async function refreshServerIp(): Promise<NoResponse> {
    const res = await post<NoResponse>(Routes.Settings.RefreshServerIp, {
      json: null,
    })
    return res
  }

  async function restartEasypanel(): Promise<NoResponse> {
    const res = await post<NoResponse>(Routes.Settings.RestartEasypanel, {
      json: null,
    })
    return res
  }

  async function restartTraefik(): Promise<NoResponse> {
    const res = await post<NoResponse>(Routes.Settings.RestartTraefik, {
      json: null,
    })
    return res
  }

  async function setDockerPruneDaily(
    body: PruneDockerDailyParams,
  ): Promise<BooleanResponse> {
    const res = await post<BooleanResponse>(
      Routes.Settings.SetDockerPruneDaily,
      {
        json: body,
      },
    )
    return res
  }

  async function setGithubToken(body: GithubTokenParams): Promise<StringResponse> {
    const res = await post<StringResponse>(Routes.Settings.SetGithubToken, {
      json: body,
    })
    return res
  }

  async function setPanelDomain(body: PanelDomainParams): Promise<NoResponse> {
    const res = await post<NoResponse>(Routes.Settings.SetPanelDomain, {
      json: body,
    })
    return res
  }

  async function updateTraefikCustomConfig(
    body: TreafikConfParams,
  ): Promise<NoResponse> {
    const res = await post<NoResponse>(
      Routes.Settings.UpdateTraefikCustomConfig,
      {
        json: body,
      },
    )
    return res
  }

  async function setLetsEncryptEmail(body: LetsEncryptParams): Promise<StringResponse> {
    const res = await post<StringResponse>(
      Routes.Settings.setLetsEncryptEmail,
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
