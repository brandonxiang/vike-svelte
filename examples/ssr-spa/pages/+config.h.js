import vikeSvelte from 'vike-svelte'
import Layout from '../layout/Layout.svelte'
import logoUrl from '../assets/logo.svg'

/**
 * @type {import("vike/types").Config} Default configs (can be overridden by pages)
 */
export default {
  title: 'My Vike + Svelte App',
  description: 'Demo showcasing Vike + Svelte',
  favicon: logoUrl,
  Layout,
  ssr: true,
  extends: vikeSvelte
}