import { getContext } from "svelte";

export const key = 'vike-svelte:useData';

export function useData() {
    return getContext(key);
}