import { easypanel } from 'easypanel-sdk'
import { config } from 'dotenv'

config()

const app = easypanel({
  endpoint: process.env.EASYPANEL_URL || '',
  token: process.env.EASYPANEL_TOKEN || '',
})

// const dd = await app.projects.create({ name: 'ttt' })
// console.warn(dd)

const response = await app.projects.inspect({
  projectName: 'projects',
})
console.warn(response)
