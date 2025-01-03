// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import PassThrough from '../../components/PassThrough.svelte'
import Empty from '../../components/Empty.svelte'
import { getTitle } from '../getTitle.js'
import { PageKey } from '../utils/context.js'
import { render } from 'svelte/server'

/**
 * 
 * @param {import('vike/types').PageContext} pageContext 
 * @returns 
 */
function onRenderHtml(pageContext) {
  /** @type{*} */
  const Layout = pageContext.config.Layout?.[0] ?? PassThrough;
  const Page = pageContext.Page ?? Empty;

  const app = render(Layout, { context: new Map([[PageKey, pageContext]]), props: { Page } })
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
          <div id="root">
            ${dangerouslySkipEscape(body)}
          </div>
        </body>
      </html>`

  return { documentHtml }
}