/**
 * Params
 */

import type { RestResponse } from './index.types'

export interface ChangeCredentialsParams {
  email: string
  oldPassword: string
  newPassword: string
}

export interface PruneDockerDailyParams {
  pruneDockerDaily: boolean
}

export interface GithubTokenParams {
  githubToken: string
}

export interface PanelDomainParams {
  serveOnIp: boolean
  defaultPanelDomain: string
  panelDomain: string
}

export interface TreafikConfParams {
  config: string
}

export interface LetsEncryptParams {
  letsEncryptEmail: string
}

/**
 * Returns
 */
export interface PanelDomainRes extends RestResponse {
  data?: {
    serveOnIp: boolean
    panelDomain: string
    defaultPanelDomain: string
  }
}
