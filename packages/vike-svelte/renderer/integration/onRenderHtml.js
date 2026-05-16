// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import PassThrough from '../../components/PassThrough.svelte'
import Empty from '../../components/Empty.svelte'
import { getTitle } from '../getTitle.js'
import { PageKey } from '../utils/context.js'
import { mergeAttributes, serializeAttributes } from '../utils/htmlAttributes.js'
import { render } from 'svelte/server'

/**
 * 
 * @param {import('vike/types').PageContext} pageContext 
 * @returns {any}
 */
function onRenderHtml(pageContext) {
  /** @type {*} */
  const config = pageContext.config
  /** @type{*} */
  const Layout = config.Layout?.[0] ?? PassThrough;
  const Page = pageContext.Page ?? Empty;

  const app = render(Layout, { context: new Map([[PageKey, pageContext]]), props: { Page } })
  const { body, head } = app

  const title = getTitle(pageContext)
  const titleTag = !title ? '' : escapeInject`<title>${title}</title>`

  const { description } = config
  const descriptionTag = !description ? '' : escapeInject`<meta name="description" content="${description}" />`

  const { viewport } = config
  const viewportTag = !viewport ? '' : escapeInject`<meta name="viewport" content="${viewport}" />`

  const { favicon } = config
  const faviconTag = !favicon ? '' : escapeInject`<link rel="icon" href="${favicon}" />`

  const lang = config.lang || 'en'
  const htmlAttributes = serializeAttributes({
    ...mergeAttributes(config.htmlAttributes),
    lang,
  })
  const bodyAttributes = serializeAttributes(mergeAttributes(config.bodyAttributes))

  const documentHtml = escapeInject`<!DOCTYPE html>
      <html ${dangerouslySkipEscape(htmlAttributes)}>
        <head>
          <meta charset="UTF-8" />
          ${faviconTag}
          ${titleTag}
          ${descriptionTag}
          ${viewportTag}
          ${dangerouslySkipEscape(head)}
        </head>
        <body ${dangerouslySkipEscape(bodyAttributes)}>
          <div id="root">
            ${dangerouslySkipEscape(body)}
          </div>
        </body>
      </html>`

  return { documentHtml }
}
