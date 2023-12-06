


/**
 * Depending on the value of `config.meta.ssr`, set other config options' `env`
 * accordingly.
 * See https://vike.dev/meta#modify-existing-configurations
 * @type {import('vike/types').ConfigEffect}
 */
const toggleSsrRelatedConfig = ({ configDefinedAt, configValue }) => {
  if (typeof configValue !== 'boolean') {
    throw new Error(`${configDefinedAt} should be a boolean`)
  }

  return {
    meta: {
      // When the SSR flag is false, we want to render the page only in the
      // browser. We achieve this by then making the `Page` implementation
      // accessible only in the client's renderer.
      Page: {
        env: configValue
          ? { server: true, client: true } // default
          : { client: true },
      }
    }
  }
}

/** @satisfies {import('vike/types').Config} */
export default {
  onRenderHtml: 'import:vike-svelte/renderer/onRenderHtml',
  onRenderClient: 'import:vike-svelte/renderer/onRenderClient',
  passToClient: ['pageProps', 'title'],

  clientRouting: true,
  hydrationCanBeAborted: true,
  meta: {
    Head: {
      env: { server: true },
    },
    Layout: {
      env: { server: true, client: true },
    },
    title: {
      env: { server: true, client: true },
    },
    description: {
      env: { server: true },
    },
    favicon: {
      env: { server: true },
    },
    lang: {
      env: { server: true },
    },
    ssr: {
      env: { config: true },
      effect: toggleSsrRelatedConfig,
    },
  },
};
