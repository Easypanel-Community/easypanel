import { easypanel } from 'easypanel-sdk'
import { config } from 'dotenv'

config()

const app = easypanel({
  url: process.env.EASYPANEL_URL || '',
  auth: {
    email: process.env.EASYPANEL_EMAIL || '',
    password: process.env.EASYPANEL_PASSWORD || '',
  },
})

await app.login()

await app.createService({
  projectName: 'projects',
  serviceName: 'xxx',
})
