// Resolves images from src/assets/<name> in Vite-friendly way
export function asset(name) {
  return new URL(`./assets/${name}`, import.meta.url).href
}
