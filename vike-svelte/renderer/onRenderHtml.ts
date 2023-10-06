// https://vike.dev/onRenderHtml
export default onRenderHtml

import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageContext } from 'vike/types'
import PassThrough from './PassThrough.svelte'

const base = '/';

async function onRenderHtml(pageContext: PageContext) {
  const Layout = pageContext.config.Layout ?? PassThrough
  //@ts-ignore
  const app = Layout.render(pageContext)
  const { html, head, css } = app

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${base}logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(head)}
        <style>${css.code}</style>
      </head>
      <body>
        <div id="app">
          ${dangerouslySkipEscape(html)}
        </div>
      </body>
    </html>`
}