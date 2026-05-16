import vikeSvelte from 'vike-svelte/config'
import Layout from './Layout.svelte'
import logoUrl from '../assets/logo.svg'


/**
 * @satisfies {import("vike/types").Config} Default configs (can be overridden by pages)
 */
export default {
  title: 'My Vike + Svelte App',
  description: 'Demo showcasing Vike + Svelte',
  viewport: 'width=device-width, initial-scale=1',
  htmlAttributes: {
    'data-renderer': 'vike-svelte',
  },
  bodyAttributes: {
    'data-app-shell': 'minimal',
  },
  favicon: logoUrl,
  Layout,
  extends: vikeSvelte
}
