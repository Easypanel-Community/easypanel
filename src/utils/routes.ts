// Completed
const projets = {
  List: '/api/trpc/projects.listProjects', // GET
  ListWithServices: '/api/trpc/projects.listProjectsAndServices', // GET
  CanCreate: '/api/trpc/projects.canCreateProject', // POST
  Inspect: '/api/trpc/projects.inspectProject', // GET
  Create: '/api/trpc/projects.createProject', // POST
  Destroy: '/api/trpc/projects.destroyProject', // POST
}

function services(type: string) {
  const Routes = {
    Create: '/api/trpc/services.app.createService', // POST
    Inspect: '/api/trpc/services.app.inspectService', // GET
    Destroy: '/api/trpc/services.app.destroyService', // POST
    Deploy: '/api/trpc/services.app.deployService', // POST
    Disable: '/api/trpc/services.app.disableService', // POST
    Enable: '/api/trpc/services.app.enableService', // POST
    ExposeService: '/api/trpc/services.app.exposeService', // POST
    GetServiceStats: '/api/trpc/monitor.getServiceStats', // GET
    RefreshDeployToken: '/api/trpc/services.app.refreshDeployToken', // POST
    UpdateSourceGithub: '/api/trpc/services.app.updateSourceGithub', // POST
    UpdateSourceGit: '/api/trpc/services.app.updateSourceGit', // POST
    UpdateSourceImage: '/api/trpc/services.app.updateSourceImage', // POST
    UpdateBuild: '/api/trpc/services.app.updateBuild', // POST
    UpdateEnv: '/api/trpc/services.app.updateEnv', // POST
    UpdateDomains: '/api/trpc/services.app.updateDomains', // POST
    UpdateRedirects: '/api/trpc/services.app.updateRedirects', // POST
    UpdateBasicAuth: '/api/trpc/services.app.updateBasicAuth', // POST
    UpdateMounts: '/api/trpc/services.app.updateMounts', // POST
    UpdatePorts: '/api/trpc/services.app.updatePorts', // POST
    UpdateResources: '/api/trpc/services.app.updateResources', // POST
    UpdateDeploy: '/api/trpc/services.app.updateResources', // POST
    UpdateBackup: '/api/trpc/services.app.updateBackup', // POST
    UpdateAdvanced: '/api/trpc/services.mariadb.updateAdvanced', // POST,
    GetServiceLogs: '/api/trpc/logs.getServiceLogs', // GET
  }

  for (const [key, value] of Object.entries(Routes))
    Routes[key as keyof typeof Routes] = value.replace('app', type)

  return Routes
}

// Completed
const monitor = {
  GetAdvancedStats: '/api/trpc/monitor.getAdvancedStats', // GET
  GetSystemStats: '/api/trpc/monitor.getSystemStats', // GET
  GetDockerTaskStats: '/api/trpc/monitor.getDockerTaskStats', // GET
  GetMonitorTableData: '/api/trpc/monitor.getMonitorTableData', // GET
}

// Completed
const auth = {
  GetUser: '/api/trpc/auth.getUser', // GET
  Logout: '/api/trpc/auth.logout', // POST
  Login: '/api/trpc/auth.login', // POST
}

// Completed
function license(type: string) {
  const Routes = {
    Get: '/api/trpc/portalLicense.getLicensePayload', // GET
    Activate: '/api/trpc/portalLicense.activate', // POST
  }

  for (const [key, value] of Object.entries(Routes))
    Routes[key as keyof typeof Routes] = value.replace('portal', type)

  return Routes
}

// Completed
const settings = {
  RestartEasypanel: '/api/trpc/settings.restartEasypanel', // POST
  GetServerIp: '/api/trpc/settings.getServerIp', // GET
  RefreshServerIp: '/api/trpc/settings.refreshServerIp', // POST
  GetGithubToken: '/api/trpc/settings.getGithubToken', // GET
  SetGithubToken: '/api/trpc/settings.setGithubToken', // POST
  GetPanelDomain: '/api/trpc/settings.getPanelDomain', // GET
  SetPanelDomain: '/api/trpc/settings.setPanelDomain', // POST
  GetLetsEncryptEmail: '/api/trpc/settings.getLetsEncryptEmail', // GET
  setLetsEncryptEmail: '/api/trpc/settings.setLetsEncryptEmail', // POST
  GetTraefikCustomConfig: '/api/trpc/settings.getTraefikCustomConfig', // GET
  UpdateTraefikCustomConfig: '/api/trpc/settings.updateTraefikCustomConfig', // POST
  RestartTraefik: '/api/trpc/settings.restartTraefik', // POST
  PruneDockerImages: '/api/trpc/settings.pruneDockerImages', // POST
  PruneDockerBuilder: '/api/trpc/settings.pruneDockerBuilder', // POST
  SetDockerPruneDaily: '/api/trpc/settings.setPruneDockerDaily', // POST
  ChangeCredentials: '/api/trpc/settings.changeCredentials', // POST
}

export const routes = {
  projets,
  services,
  monitor,
  auth,
  license,
  settings,
}
