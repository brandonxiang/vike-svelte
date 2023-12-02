import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: [
    './renderer/onRenderClient.ts',
    './renderer/onRenderHtml.ts',
    './renderer/+config.ts',
    './renderer/pageContext.ts'
  ],
  output: [{ dir: 'dist', format: 'es', sanitizeFileName: false }],
  plugins: [
    typescript(),
    svelte({
      compilerOptions: {
        hydratable: true
      }
    }),
    resolve({
      exportConditions: ['svelte'],
      extensions: ['.svelte']
    })
  ],
  external: ['vike/server']
})
