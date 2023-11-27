import type { ClientResponse, NoResponse, StringResponse } from '../types'
import type {
  CreateService,
  DeployParams,
  MountParams,
  SelectService,
  ServiceRes,
  ServiceType,
  UpdateBasicAuth,
  UpdateBuild,
  UpdateEnv,
  UpdateGit,
  UpdateGithub,
  UpdateImage,
  UpdatePorts,
  UpdateRedirects,
  UpdateResources,
} from '../types/services'
import { routes } from '../utils/routes'

export function services({ get, post }: ClientResponse) {
  /**
   * Creates a new service.
   */
  async function create(
    serviceType: ServiceType,
    body: CreateService,
  ) {
    body.domains = [
      {
        host: '$(EASYPANEL_DOMAIN)',
      },
    ]
    const Route = routes.services(serviceType).Create
    const res = await post<ServiceRes>(Route, { json: body })
    return res
  }

  /**
   * Retrieves information about a service.
   */
  async function inspect(
    serviceType: ServiceType,
    body: SelectService,
  ) {
    const Route = routes.services(serviceType).Inspect
    const res = await get<ServiceRes>(Route, { input: {
      input: {
        json: body,
      },
    } })
    return res
  }

  /**
   * Destroys a service.
   */
  async function destroy(
    serviceType: ServiceType,
    body: SelectService,
  ) {
    const Route = routes.services(serviceType).Destroy
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Deploys a service.
   */
  async function deploy(
    serviceType: ServiceType,
    body: SelectService,
  ) {
    const Route = routes.services(serviceType).Deploy
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Disables a service.
   */
  async function disable(
    serviceType: ServiceType,
    body: SelectService,
  ) {
    const Route = routes.services(serviceType).Disable
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Enables a service.
   */
  async function enable(
    serviceType: ServiceType,
    body: SelectService,
  ) {
    const Route = routes.services(serviceType).Enable
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Refreshes the deploy token for a service.
   */
  async function refreshDeployToken(
    serviceType: ServiceType,
    body: SelectService,
  ) {
    const Route = routes.services(serviceType).RefreshDeployToken
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the source from GitHub for a service.
   */
  async function updateSourceGithub(
    serviceType: ServiceType,
    body: UpdateGithub,
  ) {
    const Route = routes.services(serviceType).UpdateSourceGithub
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the source from Git for a service.
   */
  async function updateSourceGit(
    serviceType: ServiceType,
    body: UpdateGit,
  ) {
    const Route = routes.services(serviceType).UpdateSourceGit
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the source from an image for a service.
   */
  async function updateSourceImage(
    serviceType: ServiceType,
    body: UpdateImage,
  ) {
    const Route = routes.services(serviceType).UpdateSourceImage
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the build configuration for a service.
   */
  async function updateBuild(
    serviceType: ServiceType,
    body: UpdateBuild,
  ) {
    const Route = routes.services(serviceType).UpdateBuild
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the environment variables for a service.
   */
  async function updateEnv(
    serviceType: ServiceType,
    body: UpdateEnv,
  ) {
    const Route = routes.services(serviceType).UpdateEnv
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the domain configuration for a service.
   */
  async function updateDomains(
    serviceType: ServiceType,
    body: CreateService,
  ) {
    const Route = routes.services(serviceType).UpdateDomains
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the redirects configuration for a service.
   */
  async function updateRedirects(
    serviceType: ServiceType,
    body: UpdateRedirects,
  ) {
    const Route = routes.services(serviceType).UpdateRedirects
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the basic authentication configuration for a service.
   */
  async function updateBasicAuth(
    serviceType: ServiceType,
    body: UpdateBasicAuth,
  ) {
    const Route = routes.services(serviceType).UpdateBasicAuth
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the mounts configuration for a service.
   */
  async function updateMounts(
    serviceType: ServiceType,
    body: MountParams,
  ) {
    const Route = routes.services(serviceType).UpdateMounts
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the ports configuration for a service.
   */
  async function updatePorts(
    serviceType: ServiceType,
    body: UpdatePorts,
  ) {
    const Route = routes.services(serviceType).UpdatePorts
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the resources configuration for a service.
   */
  async function updateResources(
    serviceType: ServiceType,
    body: UpdateResources,
  ) {
    const Route = routes.services(serviceType).UpdateResources
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  /**
   * Updates the deployment configuration for a service.
   */
  async function updateDeploy(
    serviceType: ServiceType,
    body: DeployParams,
  ) {
    const Route = routes.services(serviceType).UpdateDeploy
    const res = await post<NoResponse>(Route, { json: body })
    return res
  }

  async function getServiceLogs(body: SelectService) {
    const service = `${body.projectName}_${body.serviceName}`
    const res = await get<StringResponse>(routes.services('').GetServiceLogs, {
      json: {
        input: {
          service,
          lines: 50,
        },
      },
    })

    return res
  }

  return {
    create,
    inspect,
    destroy,
    deploy,
    disable,
    enable,
    refreshDeployToken,
    updateSourceGithub,
    updateSourceGit,
    updateSourceImage,
    updateBuild,
    updateEnv,
    updateDomains,
    updateRedirects,
    updateBasicAuth,
    updateMounts,
    updatePorts,
    updateResources,
    updateDeploy,
    getServiceLogs,
  }
}
