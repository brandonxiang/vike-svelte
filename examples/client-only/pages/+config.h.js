import vikeSvelte from 'vike-svelte'
import Layout from '../layout/Layout.svelte'

/**
 * @satisfies {import("vike/types").Config} 
 */
export default {
  Layout,
  ssr: true,
  extends: vikeSvelte
}