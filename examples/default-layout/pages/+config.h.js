import vikeSvelte from 'vike-svelte'
import logoUrl from '../assets/logo.svg'


console.log(vikeSvelte);

/**
 * @satisfies {import("vike/types").Config} 
 */
export default {
  title: 'Default Layout',
  description: 'Demo showcasing Vike + Svelte',
  favicon: logoUrl,
  extends: vikeSvelte
}