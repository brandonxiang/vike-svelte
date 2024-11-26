// https://vike.dev/onRenderHtml
export {onRenderHtml}

import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import PassThrough from '../../components/PassThrough.svelte'
import { getTitle } from '../getTitle.js'
import { VikeContextKey } from '../pageContext.js'
import { render } from 'svelte/server'

/**
 * 
 * @param {import('vike/types').PageContext} pageContext 
 * @returns 
 */
function onRenderHtml(pageContext) {
  /** @type{*} */
  const Layout = pageContext.config.Layout?.[0] ?? PassThrough

  const app = render(Layout, { context: new Map([[VikeContextKey, pageContext]]), props:pageContext })
  const { body, head } = app

  const title = getTitle(pageContext)
  const titleTag = !title ? '' : escapeInject`<title>${title}</title>`

  const { description } = pageContext.config
  const descriptionTag = !description ? '' : escapeInject`<meta name="description" content="${description}" />`

  const { favicon } = pageContext.config
  const faviconTag = !favicon ? '' : escapeInject`<link rel="icon" href="${favicon}" />`

  const lang = pageContext.config.lang || 'en'

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
          <div id="page-view">
            ${dangerouslySkipEscape(body)}
          </div>
        </body>
      </html>`

  return { documentHtml }
}