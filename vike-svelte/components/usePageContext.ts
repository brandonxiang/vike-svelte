import { setContext, getContext } from "svelte";
import { PageContext } from "vike/types";

export { usePageContext }
export { setPageContext }


const key = '__vike-svelte__bcc79e46-5797-40d8-9cec-e9daf9c62ce8'

function usePageContext() {
  const pageContext = getContext(key)
  return pageContext
}

function setPageContext(pageContext: PageContext) {
  setContext(key, pageContext)
}