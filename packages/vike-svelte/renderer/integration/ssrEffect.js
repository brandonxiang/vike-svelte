/**
 * Depending on the value of `config.meta.ssr`, set other config options' `env`
 * accordingly.
 * See https://vike.dev/meta#modify-existing-configurations
 * @param {Parameters<import('vike/types').ConfigEffect>[0]} param0 
 * @returns {ReturnType<import('vike/types').ConfigEffect>}
 */
export const ssrEffect = ({ configDefinedAt, configValue }) => {
  if (typeof configValue !== 'boolean') {
    throw new Error(`${configDefinedAt} should be a boolean`)
  }

  const env = {
    // Always load on the client-side.
    client: true,
    // When the SSR flag is false, we want to render the page only on the client-side.
    // We achieve this by loading `Page` only on the client-side: when onRenderHtml()
    // gets a `Page` value that is undefined it skip server-side rendering.
    server: configValue !== false,
  }
  return {
    meta: {
      Page: { env },
      /* We don't do this to enable wraping <Head> with <Wrapper>
      Wrapper: { env }, */
      Layout: { env },
      Loading: { env },
    },
  }
}