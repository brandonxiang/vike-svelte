import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

/** @satisfies {import('rollup').RollupOptions}  */
const commonConfig = {
  output: [{ dir: 'dist', format: 'es', sanitizeFileName: false }]
}

export default defineConfig([
  // server side
  {
    ...commonConfig,
    input: ['./renderer/onRenderHtml.ts', './renderer/+config.ts', './renderer/pageContext.ts'],
    plugins: [
      typescript(),
      resolve({
        exportConditions: ['svelte'],
        extensions: ['.svelte']
      }),
      svelte({
        compilerOptions: {
          generate: 'ssr'
        }
      })
    ],
    external: ['vike/server']
  },
  // client side
  {
    ...commonConfig,
    input: ['./renderer/onRenderClient.ts'],
    plugins: [
      typescript(),
      resolve({
        exportConditions: ['svelte'],
        extensions: ['.svelte']
      }),
      svelte({
        compilerOptions: {
          generate: 'dom',
          hydratable: true
        }
      })
    ],
    external: ['svelte']
  }
])
