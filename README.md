# Easypanel SDK

<span><a href="https://www.npmjs.com/package/easypanel-sdk "><img src="https://img.shields.io/npm/v/easypanel-sdk?style=flat&colorA=18181B&colorB=28CF8D" alt="Version"></a> </span> | <span> <a href="https://www.npmjs.com/package/easypanel-sdk"> <img src="https://img.shields.io/npm/dm/easypanel-sdk?style=flat&colorA=18181B&colorB=28CF8D" alt="Downloads"> </a> </span>

[easypanel](https://easypanel.io) - This is an unofficial sdk for Easypanel.


## Installation

```bash
pnpm install easypanel-sdk
yarn add easypanel-sdk
npm install easypanel-sdk
```


## Usage

```ts
import { easypanel } from 'easypanel-sdk'
import { config } from 'dotenv'

config()

const app = easypanel({
  endpoint: process.env.EASYPANEL_URL || '',
  token: process.env.EASYPANEL_TOKEN || '',
})

const project = await app.projects.create({ name: 'NewProject' })
console.warn(project)
```

## Development

Requires [pnpm](https://pnpm.js.org/) >= 8.10.0
Requires [node](https://nodejs.org/en/) >= 20.0.0

```bash
pnpm install
pnpm dev # watch mode tsup
pnpm build # build
```

### Playground

```bash
cd playground
pnpm install
pnpm dev # send requests and close
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/oku-ui/static/sponsors/sponsors.svg">
    <img alt="sponsors" src='https://cdn.jsdelivr.net/gh/oku-ui/static/sponsors/sponsors.svg'/>
  </a>
</p>


## License

MIT License © 2023-PRESENT [productdevbook](https://github.com/productdevbook)