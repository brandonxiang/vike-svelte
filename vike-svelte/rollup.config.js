import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions } */
export default {
  input: [
    "./renderer/onRenderClient.js",
    './renderer/onRenderHtml.js',
    "./renderer/+config.js",
    "./renderer/pageContext.js",
  ],
  output: [{ dir: "dist", format: "es", sanitizeFileName: false }],
  plugins: [
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