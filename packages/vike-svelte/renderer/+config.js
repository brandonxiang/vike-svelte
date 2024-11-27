import { ssrEffect } from './integration/ssrEffect.js';


/** @satisfies {import('vike/types').Config} */
export default {

  name: "vike-svelte",
  require: {
    vike: ">=0.4.195",
  },

  // https://vike.dev/onRenderHtml
  onRenderHtml: "import:vike-svelte/__internal/integration/onRenderHtml:onRenderHtml",
  // https://vike.dev/onRenderClient
  onRenderClient: "import:vike-svelte/__internal/integration/onRenderClient:onRenderClient",

  // https://vike.dev/clientRouting
  clientRouting: true,
  hydrationCanBeAborted: true,
  
  passToClient: ["_configFromHook"],

  // https://vike.dev/meta
  meta: {
    Head: {
      env: { server: true },
      cumulative: true,
    },
    Layout: {
      env: { server: true, client: true },
      cumulative: true,
    },
    Wrapper: {
      env: { server: true, client: true },
      cumulative: true,
    },
    title: {
      env: { server: true, client: true },
    },
    description: {
      env: { server: true },
    },
    viewport: {
      env: { server: true },
    },
    favicon: {
      env: { server: true },
      global: true,
    },
    lang: {
      env: { server: true, client: true },
    },
    ssr: {
      env: { config: true },
      effect: ssrEffect,
    },
    stream: {
      env: { server: true },
    },
    htmlAttributes: {
      env: { server: true },
      global: true,
      cumulative: true, // for Vike extensions
    },
    bodyAttributes: {
      env: { server: true },
      global: true,
      cumulative: true, // for Vike extensions
    },
    onAfterRenderClient: {
      env: { server: false, client: true },
      cumulative: true,
    },
  },
};
