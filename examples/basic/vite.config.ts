import {svelte} from '@sveltejs/vite-plugin-svelte'
import ssr from 'vike/plugin'
import { UserConfig } from 'vite'

export default {
  plugins: [svelte({
    compilerOptions: {
      hydratable: true
    }
  }), ssr()],
} satisfies UserConfig