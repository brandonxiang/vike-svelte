<script>
  import { useConfig } from '../hooks/useConfig.js'

  /**
   * @typedef {Object} Props
   * @property {string | undefined} [title]
   * @property {string | undefined} [description]
   * @property {string | undefined} [lang]
   * @property {string | undefined} [favicon]
   * @property {string | undefined} [viewport]
   * @property {Record<string, string | number | boolean | null | undefined> | Array<Record<string, string | number | boolean | null | undefined>> | undefined} [htmlAttributes]
   * @property {Record<string, string | number | boolean | null | undefined> | Array<Record<string, string | number | boolean | null | undefined>> | undefined} [bodyAttributes]
   */

  /** @type {Props} */
  const props = $props()

  useConfig(props)
</script>
