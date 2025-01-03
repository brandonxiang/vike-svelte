import {svelte} from '@sveltejs/vite-plugin-svelte'
import ssr from 'vike/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    svelte(),
    ssr()
  ],
  optimizeDeps: {include: [
    'vike-svelte/clientOnly', 
    'vike-svelte/__internal/integration/onRenderHtml',
    'vike-svelte/__internal/integration/onRenderClient',
  ]}
});