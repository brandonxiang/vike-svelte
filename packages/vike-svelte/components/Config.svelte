<script>
  import { useConfig } from '../hooks/useConfig.js'

  /**
   * @typedef {Object} Props
   * @property {string | undefined} [title]
   * @property {string | undefined} [description]
   * @property {string | undefined} [lang]
   * @property {string | undefined} [favicon]
   */

  /** @type {Props} */
  const props = $props()

  useConfig(props)
</script>
