// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import RenderStack from '../../components/RenderStack.svelte'
import Empty from '../../components/Empty.svelte'
import { getTitle } from '../getTitle.js'
import { PageKey } from '../utils/context.js'
import { getComponentStack } from '../utils/componentStack.js'
import { render } from 'svelte/server'

/**
 * 
 * @param {import('vike/types').PageContext} pageContext 
 * @returns {any}
 */
function onRenderHtml(pageContext) {
  /** @type {*} */
  const config = pageContext.config
  const Page = pageContext.Page ?? Empty;
  const components = getComponentStack(config, Page)

  const app = render(RenderStack, {
    context: new Map([[PageKey, pageContext]]),
    props: { components, Page },
  })
  const { body, head } = app

  const title = getTitle(pageContext)
  const titleTag = !title ? '' : escapeInject`<title>${title}</title>`

  const { description } = config
  const descriptionTag = !description ? '' : escapeInject`<meta name="description" content="${description}" />`

  const { favicon } = config
  const faviconTag = !favicon ? '' : escapeInject`<link rel="icon" href="${favicon}" />`

  const lang = config.lang || 'en'

  const documentHtml = escapeInject`<!DOCTYPE html>
      <html lang="${lang}">
        <head>
          <meta charset="UTF-8" />
          ${faviconTag}
          ${titleTag}
          ${descriptionTag}
          ${dangerouslySkipEscape(head)}
        </head>
        <body>
          <div id="root">
            ${dangerouslySkipEscape(body)}
          </div>
        </body>
      </html>`

  return { documentHtml }
}
