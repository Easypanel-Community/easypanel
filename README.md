# Easypanel Api

[easypanel](https://easypanel.io)


## Installation

```bash
pnpm install easypanel
```


## Usage

```ts
import { easypanel } from 'easypanel'
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