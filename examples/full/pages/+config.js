import vikeSvelte from 'vike-svelte/config'
import Layout from './Layout.svelte'
import logoUrl from '../assets/logo.svg'

/**
 * @satisfies {import("vike/types").Config} Default configs (can be overridden by pages)
 */
export default {
  Layout,
  title: 'My Vike + Svelte App',
  description: 'Demo showcasing Vike + Svelte',
  favicon: logoUrl,
  ssr: true,
  extends: vikeSvelte
}