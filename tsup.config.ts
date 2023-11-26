import type { Options } from 'tsup'

export default <Options>{
  entryPoints: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  sourcemap: false,
  clean: true,
  dts: true,
  minify: true,
  noExternal: [
    'ofetch',
  ],
}
