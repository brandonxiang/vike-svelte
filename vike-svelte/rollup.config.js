import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions } */
export default {
  input: [
    "./renderer/onRenderClient.ts",
    './renderer/onRenderHtml.ts',
    "./renderer/+config.ts",
    "./components/usePageContext.ts",
  ],
  output: [{ dir: "dist", format: "es", sanitizeFileName: false }],
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
    }),
  ]
}