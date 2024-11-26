import { svelte } from '@sveltejs/vite-plugin-svelte'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [ svelte(), vike() ],
});