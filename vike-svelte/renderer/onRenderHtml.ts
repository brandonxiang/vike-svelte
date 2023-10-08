// https://vike.dev/onRenderHtml
export default onRenderHtml

import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageContext } from 'vike/types'
import PassThrough from './PassThrough.svelte'
import { getTitle } from './getTitle'
import { VikeContextKey } from '../components/usePageContext'

async function onRenderHtml(pageContext: PageContext) {
  const Layout = pageContext.config.Layout ?? PassThrough

  const app = (Layout as any).render(pageContext, { context: new Map([[VikeContextKey, { a: 1 }]]) })
  const { html, head, css } = app

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
          <style>${css.code}</style>
        </head>
        <body>
          <div id="page-view">
            ${dangerouslySkipEscape(html)}
          </div>
        </body>
      </html>`

  return { documentHtml }
}
